import {html} from "hono/html";

const styleTag = html`
            <style>
                body {
                    font-family:
                            system-ui,
                            -apple-system,
                            sans-serif;
                    max-width: 100vw;
                    margin: 40px auto;
                    padding: 2rem;
                    font-size: 32px;
                }
                
                h1 {
                    color: #2d3748;
                    margin: 0 0 1.5rem 0;
                }

                button {
                    background: #4f46e5;
                    font-size: 3rem;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 6px;
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
        `;

export const appTemplate = (delay: string) => (
    html`
    <html lang="en">
      <head>
        ${styleTag}
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