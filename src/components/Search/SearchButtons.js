import { html, component, useCallback } from "haunted";

function SearchButtons({ isSelected, add, remove }) {
  const render = useCallback(() => {
    if (isSelected) {
      return html`
        <button type="button" class="button-cta button-cta--remove" @click=${remove}>
          Remove
        </button>`;
    } else {
      return html`
        <button type="button" class="button-cta button-cta--add" @click=${add}>
          Add
        </button>`
    }
  }, [isSelected])

  return html`
    ${render()}
    <style>
      .button-cta {
        border: 0;
        font-size: 14px;
        font-weight: 600;
        color: white;
        text-align: center;
        box-sizing: border-box;
        display: inline-block;
        min-width: 120px;
        padding: 5px 10px;
        margin-top: auto;
        cursor: pointer;
      }

      .button-cta--add {
        background-color: lightgreen;
        color: darkgreen;
      }

      .button-cta--remove {
        background-color: palevioletred;
      }
    </style>
  `
}

customElements.define("search-buttons", component(SearchButtons));
