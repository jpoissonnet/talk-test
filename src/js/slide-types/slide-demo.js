import { css, html } from 'lit';
import { defineSlideType } from './base.js';
import '../animated-background.js';

defineSlideType('slide-demo', {
  render ({ attrs, content }) {

    return html`
      <animated-background />
    `;
  },
  // language=CSS
  styles: css`
  `,
});
