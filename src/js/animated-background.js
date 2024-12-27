import { css, html, LitElement } from 'lit'

export class AnimatedBackground extends LitElement {

  constructor () {
    super();
  }

  render() {
    return html`
      <div class='background'>
        <div class='umbrella'></div>
        <div class='drop'></div>
        <div class='umbrella'></div>
        <div class='drop'></div>
        <div class='umbrella'></div>
        <div class='drop'></div>
        <div class='umbrella'></div>
        <div class='drop'></div>
        <div class='umbrella'></div>
        <div class='drop'></div>
      </div>
    `
  }

  static get styles () {
    return [
      // language=CSS
      css`
          @keyframes slide-out {
              0% {
                  transform: translateY(0%);
              }
              100% {
                  transform: translateY(-7%);
              }
          }

          @keyframes slide-in {
              0% {
                  transform: translateY(0%);
              }
              100% {
                  transform: translateY(7%);
              }
          }

          :host {
              --icon-size: 10rem;
          }

          .background {
              position: absolute;
              inset: 0;
              background: var(--color-bb);
              display: flex;
              transform: scale(1.5) rotate(30deg);
              height: 200%;
          }

          .umbrella, .drop {
              width: var(--icon-size);
              margin: 0 1rem;
              height: 200%;
              background-size: 90% 5rem;
              background-blend-mode: color-dodge;
              background-repeat: repeat-y;
              opacity: 0.4;
          }
          
          .umbrella {
              background-image: url('src/img/parapluie.svg');
              animation: slide-out linear infinite alternate 30s;
          }
          
          .drop {
              background-image: url('src/img/gouttes-de-pluie.svg');
              animation: slide-in linear infinite alternate 30s;
          }
      `,
    ];
  }
}

window.customElements.define('animated-background', AnimatedBackground);
