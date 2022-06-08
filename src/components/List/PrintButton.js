import { html, component, useCallback } from "haunted";

function PrintButton({ data }) {
  const render = useCallback(() => {
    if (data && data?.length > 0) {
      return html`
        <button type="button" class="print-button" @click=${() => window.print()}>
          Print list
        </button>`;
    }
  }, [data])

  return html`
    ${render()}

    <style>
      .print-button {
        transition: all 0.3s ease;
        background: transparent;
        padding: 11px 30px;
        border: solid 1px black;
        font-size: 14px;
        cursor: pointer;
        margin-top: 32px;
      }

      .print-button:hover {
        background-color: lightgreen;
        border-color: lightgreen;
        color: darkgreen;
      }
    </style>
  `
}

customElements.define("print-button", component(PrintButton));
