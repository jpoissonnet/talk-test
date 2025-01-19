import { css, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { defineSlideType } from "./base.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { markup } from "../utils.mjs";

const NNBSP = "\u202f";
const SI_PREFIXES = ["", "k", "M", "G", "T", "P"];

const nf = new Intl.NumberFormat("fr", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 1,
});

// Keeping existing formatting functions
export function formatBytes(rawValue) {
  const symbol = "o";
  const prefixIndex = rawValue > 1 ? Math.floor(Math.log10(rawValue) / 3) : 0;
  const rebasedValue = rawValue / 1000 ** prefixIndex;
  const formattedValue = nf.format(rebasedValue);
  const prefix = SI_PREFIXES[prefixIndex];
  return html`${formattedValue}<strong class="unit"
      >${prefix + symbol}</strong
    >`;
}

export function formatTime(rawValue, speed) {
  const value = rawValue / speed;
  if (value > 1000) {
    const formattedValue = nf.format(value / 1000);
    return html`${formattedValue}<strong class="unit">s</strong>`;
  }
  const formattedValue = parseInt(value);
  return html`${formattedValue}<strong class="unit">ms</strong>`;
}

function format(value, unit, speed) {
  if (unit == null) return formatBytes(value);
  if (unit === "") return html`${nf.format(value)}`;
  if (unit === "raw") return html`${value}`;
  if (unit === "time") return formatTime(value, speed);
  return html`${nf.format(value)}<strong class="unit">${unit}</strong>`;
}

defineSlideType("slide-stackedchart", {
  render({ attrs, content }) {
    const unit = attrs.unit;
    const [title, ...parts] = content
      .trim()
      .split("\n")
      .map((line) => line.trim());

    // Parse sections with support for stacked data
    const sections = parts.map((line) => {
      const [rawLabel, rawDetails] = line.split(" : ").map((a) => a.trim());
      const isCommented = rawLabel.startsWith("// ");
      const label = rawLabel.replace("// ", "");

      // Handle stacked data format: "label : value1,color1;value2,color2;..."
      const stackedData = rawDetails
        .split(";")
        .slice(0, -1)
        .map((item) => {
          const [rawValue, color = "#888"] = item
            .trim()
            .split(",")
            .map((s) => s.trim());
          return {
            value: Number(rawValue),
            color,
          };
        });

      return {
        label,
        isCommented,
        stack: stackedData,
      };
    });

    // Calculate total values and percentages
    const maxTotal = Math.max(
      ...sections.map((section) =>
        section.stack.reduce((sum, item) => sum + item.value, 0),
      ),
    );

    const sectionsWithPercents = sections.map((section) => {
      const total = section.stack.reduce((sum, item) => sum + item.value, 0);
      const stackWithPercents = section.stack.map((item, index, array) => {
        const startPercent = array
          .slice(0, index)
          .reduce((sum, prev) => sum + (prev.value * 100) / maxTotal, 0);
        const percent = (item.value * 100) / maxTotal;
        console.log("👋", { item, startPercent, percent });
        return {
          ...item,
          percent,
          startPercent,
        };
      });

      return {
        ...section,
        stack: stackWithPercents,
        total,
      };
    });

    return html`
      <div class="title">
        <div>${unsafeHTML(markup(title))}</div>
        ${attrs.logo != null
          ? html`<img
              class="title-logo"
              src="src/img/logo-${attrs.logo}.svg"
              alt=""
            />`
          : ""}
      </div>

      <div class="container">
        ${sectionsWithPercents.map(
          ({ label, isCommented, stack, total }) => html`
            <div class="section ${classMap({ comment: isCommented })}">
              <div class="bar">
                ${stack.map(
                  ({ value, color, percent, startPercent }, index) => html`
                    <div
                      class="bar-value stacked"
                      style="
                    --bar-percent: ${percent};
                    --bar-start: ${startPercent};
                    background-color: ${color};
                  "
                    >
                      ${stack.length - 1 === index || true
                        ? attrs.percent == null
                          ? html`<div class="bar-label">
                              ${format(value, unit, attrs.speed)}
                            </div>`
                          : html`<div class="bar-label">
                              ${format(percent, "%")}
                            </div>`
                        : ""}
                    </div>
                  `,
                )}
              </div>
              <div class="legend">${unsafeHTML(markup(label))}</div>
            </div>
          `,
        )}
      </div>
    `;
  },
  styles: css`
    :host {
      display: grid;
      grid-template-rows: min-content 1fr;
      justify-content: center;
    }

    .title {
      align-self: center;
      justify-self: center;
      font-size: 3rem;
      font-weight: bold;
      padding: 1rem 0;
      font-family: "Yanone Kaffeesatz", sans-serif;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    strong {
      color: #0082ff;
    }
    .underline {
      text-decoration: underline;
    }

    em {
      margin-left: 1rem;
      font-style: normal;
      color: #666;
      font-size: 2rem;
    }

    .title-logo {
      display: none;
      height: 3rem;
    }

    .container {
      display: grid;
      grid-auto-columns: 1fr;
      grid-auto-flow: column;
      align-content: center;
      justify-content: center;
    }

    .section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .bar {
      height: 18rem;
      position: relative;
      width: 2.5rem;
    }

    :host([narrow]) .bar {
      width: 1.75rem;
    }
    :host([tiny]) .bar {
      width: 1.5rem;
    }

    .section.comment .bar {
      visibility: hidden;
    }

    .bar-label {
      box-sizing: border-box;
      font-family: "OperatorMono-Medium", monospace;
      font-size: 1.2rem;
      right: 52%;
      padding-bottom: 0.5rem;
      position: absolute;
      text-align: center;
      transform-origin: center center;
      transform: translateX(-50%) scale(1, 1);
      white-space: nowrap;
    }

    :host([small]) .bar-label {
      font-size: 1.25rem;
    }
    :host([tiny]) .bar-label {
      font-size: 0.9rem;
    }

    .unit {
      padding-left: 0.25rem;
      font-size: 0.8em;
      vertical-align: baseline;
      color: #777;
    }

    .bar-value {
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border: 0.15rem solid #000;
      border-bottom: none;
    }

    .bar-value.stacked {
      height: calc(var(--bar-percent) * 1%);
      bottom: calc(var(--bar-start) * 1%);
    }

    .legend {
      border-top: 0.15rem solid #000;
      box-sizing: border-box;
      font-family: "OperatorMono-Medium", monospace;
      font-size: 1.4rem;
      line-height: 1.5;
      padding: 0.5rem 1rem;
      text-align: center;
      width: 100%;
    }

    :host([small]) .legend {
      min-width: 5rem;
    }
    :host([narrow]) .legend {
      padding: 0.5rem 0.75rem;
    }
    :host([tiny]) .legend {
      padding: 0.5rem 0.6rem;
    }
    .section.comment .legend {
      color: transparent;
    }
  `,
});
