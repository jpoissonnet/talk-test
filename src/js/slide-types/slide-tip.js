import { css, html } from "lit";
import { defineSlideType } from "./base.js";
import { markup } from "../utils.mjs";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

defineSlideType("slide-tip", {
  render({ attrs, content }) {
    const count = attrs.count || NaN;

    return html`
      <div class="background">
        <div class="title">Conseil numéro ${count}:</div>
        <div class="tip-text">${unsafeHTML(content)}</div>
      </div>
    `;
  },
  // language=CSS
  styles: css`
    :host {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Interstate", sans-serif;
    }

    .background {
      background-color: var(--color-bb);
      color: white;
      z-index: 2;
      margin: 6rem;
      padding: 3rem;
      box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .tip-text {
      color: #fff;
      margin: auto;
      box-sizing: border-box;
      font-size: 3rem;
      line-height: 1.4;
      z-index: 3;
    }

    .tip-text strong {
      color: var(--color-bbbb);
    }

    .title {
      font-size: 1.5rem;
    }
  `,
});
