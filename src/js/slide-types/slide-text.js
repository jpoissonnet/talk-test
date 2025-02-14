import { css, html } from 'lit';
import { defineSlideType, playMedia, stopMedia } from './base.js';
import twemoji from 'twemoji';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { markup } from '../utils.mjs';

defineSlideType('slide-text', {
  render ({ content, attrs }) {

    const htmlContent = twemoji.parse(markup(content), (icon, options, variant) => {
      return '/src/emoji/' + icon + '.svg';
    });

    return html`
      <div class="text">${unsafeHTML(htmlContent)}</div>
    `;
  },
  // language=CSS
  styles: css`
    :host {
      position: relative;
      display: grid;
      align-items: center;
      justify-content: center;
    }

    audio {
      display: none;
    }

    .text {
      text-align: center;
      font-family: 'Railway', sans-serif;
      font-size: 2.5rem;
      line-height: 1.25;
      font-weight: bold;
    }

    :host([small]) .text {
      text-align: left;
      font-size: 3rem;
    }

    strong {
      color: #0082ff;
    }

    sup {
      color: #0082ff;
      font-weight: bold;
    }

    .underline {
      text-decoration: underline;
    }
    
    .strike-through {
      text-decoration: line-through;
    }

    img {
      height: 6rem;
      margin-bottom: 1rem;
      display: block;
      width: 100%;
    }
  `,
});
