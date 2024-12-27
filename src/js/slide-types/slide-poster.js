import { css, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { defineSlideType } from './base.js';
import { getMeta, getTitle, markup, pipeline } from '../utils.mjs';
import '../animated-background.js';

defineSlideType('slide-poster', {
  render ({ attrs, content }) {

    const meta = getMeta();
    const title = pipeline(
      content ?? getTitle(),
      (text) => text.replace(', ', ' '),
      markup,
    );

    return html`
      <animated-background></animated-background>
      <div class="newspaper">
        <div class="name">${unsafeHTML(title)}</div>
        <hr class="small">
        <div class='date'>${meta.date}</div>
        <hr class="big">
        <div class="columns">
          <div class='headline'>
            Jules et Antoine débarquent au ${meta.event}
            <div class='city'>${meta.city}</div>
            <p></p>
            <p></p>
            <p></p>
            <p class='end-80'></p>
          </div>
          <div>
            <p></p>
            <p class='end-80'></p>
            <hr>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p class='end-60'></p>
          </div>
          <div>
            <p></p>
            <p></p>
            <div class='picture'></div>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    `;
  },
  // language=CSS
  styles: css`
    :host {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: black;
    }
    

    .title {
      background: #ee2325;
      font-size: 3.5em;
      z-index: 1;
      padding: 0 0.75ch;
      margin-bottom: 12rem;
      transform: scale(1, 1.2);
      font-family: 'Sufler', sans-serif;
    }
    
    .newspaper {
        position: absolute;
        width: 80%;
        height: 75%;
        background: white;
        padding: 0.25em 1.5em;
        box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, .2);
    }
    
    .name {
        text-align: center;
        font-size: 2.5em;
        font-family: 'Sufler', sans-serif;
    }
    
    .date {
        font-style: italic;
        font-size: 1em;
        text-align: center;
    }
    
    .columns {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
    }
    
    .columns > div {
        height: 100%;
    }
    
    .headline {
        font-size: 1.25em;
        font-weight: 800;
        text-align: center;
        font-family: 'NoticiaText', serif;
    }
    
    .city {
        font-size: 0.75em;
        font-style: italic;
    }
    
    hr {
        border-color: black;
    }
    
    hr.big {
        border-top-width: 3px;
    }
    
    p {
        height: 1em;
        background-color: grey;
    }
    
    p.end-80 {
        width: 80%;
    }
    p.end-60 {
        width: 60%;
    }
    
    .picture {
        width: 100%;
        min-height: 200px;
        background-color: grey;
    }
  `,
});
