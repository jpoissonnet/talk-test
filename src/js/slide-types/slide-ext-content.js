import { css, html } from "lit";
import { defineSlideType } from "./base.js";
import "@cicciosgamino/qr-code-element";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

defineSlideType("slide-ext-content", {
  render({ attrs, content }) {
    const lines = content.split("\n").filter((line) => line.trim() !== "");
    const image = lines.find((line) => line.startsWith("<img "));
    const qr = lines.find((line) => line.startsWith("https://"));
    const title = lines.find(
      (line) => !line.startsWith("https://") && !line.startsWith("<img "),
    );

    return html`
      <div class="container">${unsafeHTML(image)}</div>
      ${
        qr
          ? html`<div class="qr-container">
              <qr-code-element
                text="${qr}"
                graphic-element="canvas"
                error-correction="medium"
                border-width="0"
                mask-pattern="-1"
                scale="5"
              >
              </qr-code-element>
            </div>`
          : null
      }
      </div>
      ${title ? html`<span>${unsafeHTML(title)}</span>` : null}
    `;
  },
  // language=CSS
  styles: css`
    :host {
      position: relative;
    }

    .container {
      position: absolute;
      display: flex;
      top: 10%;
      width: 100%;
      bottom: 20%;
      justify-content: center;
      z-index: 3;
    }

    .container img {
      display: block;
      max-width: 60%;
      height: auto;
    }

    .qr-container {
      position: absolute;
      display: flex;
      left: 1em;
      bottom: 1em;
      justify-content: center;
      z-index: 3;
      max-width: 200px;
      object-fit: cover;
      border: 0.5em solid var(--color-bb);
    }

    .qr-container .qr-code-element {
      height: fit-content;
    }

    span {
      position: absolute;
      right: 1em;
      bottom: 1em;
      font-size: 1.25em;
      font-family: Railway, sans-serif;
    }

    :host([white]) img {
      background: white;
    }

    :host([cover]) img {
      object-fit: cover;
    }

    :host([contain]) img {
      object-fit: contain;
    }

    strong {
      color: var(--color-bb);
    }
  `,
});
