import { css, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { defineSlideType } from './base.js';
import { getMeta, getTitle, markup, pipeline } from '../utils.mjs';
import '../animated-background.js';

defineSlideType('slide-poster', {
  render ({ attrs, content }) {
    const meta = getMeta();
    const isMainPage = attrs.main !== undefined;
    let title;

    if(isMainPage) {
      title = content.split('\n')[1]
    }

    const columns = content.split('==========').slice(1, -1).map((column) => {
      const rows = column.split('\n');

      return html`<div>
        ${rows.map((row) => {
          if(row.startsWith('-----')) {
            return html`<hr/>`
          }
          if(row.startsWith('!')) {
            return html`<div class='picture'></div>`
          }
          if(row.startsWith('xxx')) {
            return html`<p class='end-${row.length}'></p>`
          }
          if(row.startsWith('<img')){
            return html`${unsafeHTML(row)}`
          }
          return html`<div class='headline'>${unsafeHTML(markup(row))}</div>`;
        })}
      </div>`
    });


    return html`
      <animated-background></animated-background>
      <div class="newspaper">
        ${isMainPage ? 
        html`<div class="name">${unsafeHTML(title)}</div>
          <hr class="small">
        <div class='date'>${meta.event} - ${meta.date} - ${meta.city}</div>`
          : null}
        <hr class="big">
        <div class="columns">
          ${columns.map((column) => column)}
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
        font-size: 4em;
        line-height: 1;
        font-family: 'Chomsky', sans-serif;
    }
    
    .date {
        font-style: italic;
        font-size: 1em;
        text-align: center;
    }
    
    .columns {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
        gap: 2rem;
    }
    
    .columns > div {
        height: 100%;
        width: 100%
    }
    
    .headline {
        font-size: 1.25em;
        font-weight: 800;
        text-align: center;
        font-family: 'NoticiaText', serif;
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
    
    .columns {
        font-family: 'NotoSerif', serif;
    }
    
    .columns hr {
        margin: 1em 0 1em;
    }
    
    .columns img {
        width: 100%;
        filter: grayscale(100%);
        object-fit: cover;
        max-height: 9em;
    }
    
    .columns img.contain {
      max-height: 100%;
      object-fit: contain;  
    } 
    
    p.end-4 {
        width: 40%;
    }
    p.end-5 {
        width: 50%;
    }
    p.end-6 {
        width: 60%;
    }
    p.end-7 {
        width: 70%;
    }
    p.end-8 {
        width: 80%;
    }
    p.end-9 {
        width: 90%;
    }
  `,
});
