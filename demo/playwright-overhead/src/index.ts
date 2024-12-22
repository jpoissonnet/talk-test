import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { html } from "hono/html";
import { trimTrailingSlash } from "hono/trailing-slash";

const app = new Hono();
app.use(trimTrailingSlash());
app.get("/api/:delay?", async (c) => {
  const delay = c.req.param("delay") ?? "0";
  await new Promise((resolve) => setTimeout(resolve, +delay));

  return c.text("Blazingly fast!");
});

app.get("/:delay?", (c) => {
  const delay = c.req.param("delay") ?? "";
  return c.html(html`
    <html lang="en">
      <head>
        <style>
          body {
            font-family:
              system-ui,
              -apple-system,
              sans-serif;
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            background: #f5f5f5;
          }

          .container {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          h1 {
            color: #2d3748;
            margin: 0 0 1.5rem 0;
            font-size: 1.5rem;
          }

          button {
            background: #4f46e5;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            font-size: 1rem;
            cursor: pointer;
            transition:
              transform 0.1s ease-in-out,
              background 0.2s ease;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          button:hover {
            background: #4338ca;
            transform: translateY(-1px);
          }

          button:active {
            transform: translateY(0px);
          }

          .status {
            margin-top: 1.5rem;
            padding: 1rem;
            border-radius: 6px;
            background: #f3f4f6;
          }

          .status-label {
            font-weight: 500;
            color: #4b5563;
            margin-bottom: 0.5rem;
          }

          .status-content {
            color: #1f2937;
          }

          .pending {
            color: #b45309;
          }

          .fulfilled {
            color: #047857;
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .loader {
            display: none;
            width: 18px;
            height: 18px;
            border: 2px solid #ffffff;
            border-top: 2px solid transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>API Fetch Demo</h1>

          <button onclick="handleFetch()">
            <span>Fetch Data</span>
            <div class="loader" id="loader"></div>
            <span>🚀</span>
          </button>

          <div class="status">
            <div class="status-label">Status:</div>
            <div class="status-content" title="status">Waiting to fetch...</div>
          </div>

          <div class="status">
            <div class="status-label">Result:</div>
            <div class="status-content" title="result"></div>
          </div>
        </div>

        <script>
          function handleFetch() {
            const statusElement = document.querySelector('[title="status"]');
            const loader = document.getElementById("loader");
            const button = document.querySelector("button");

            button.disabled = true;
            loader.style.display = "block";

            statusElement.innerText = "Fetching data...";
            statusElement.classList.add("pending");

            fetch("/api/${delay}")
              .then((res) => res.text())
              .then((content) => {
                statusElement.innerText = "Request successful!";
                statusElement.classList.remove("pending");
                statusElement.classList.add("fulfilled");
                document.querySelector('[title="result"]').innerText = content;
              })
              .catch((error) => {
                statusElement.innerText = "Error fetching data";
                document.querySelector('[title="result"]').innerText =
                  error.message;
              })
              .finally(() => {
                button.disabled = false;
                loader.style.display = "none";
              });
          }
        </script>
      </body>
    </html>
  `);
});

serve({
  fetch: app.fetch,
  port: 3000,
});
