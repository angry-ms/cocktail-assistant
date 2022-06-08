import { html, component } from "haunted";

function ToastNotification({ toasters }) {

  const render = () => {
    if (toasters && toasters.length > 0) {
      return toasters.map(el => {
        if (el.id && el.content) {
          return html`
            <div class=${`toast__el ${el.color || ''}`}><p>${el.content}</p></div>`
        }
      });
    }
  };

  return html`
    <div class="toast">
      ${render()}
    </div>

    <style>
      .toast {
        position: fixed;
        bottom: 32px;
        right: 32px;
        z-index: 500;
      }

      .toast__el {
        box-sizing: border-box;
        width: 400px;
        margin-top: 16px;
        padding: 16px 32px;
        font-size: 16px;
        font-weight: 500;
        color: dimgray;
        text-align: center;
        box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.1);
      }

      .toast__el.info {
        background-color: lightyellow;
      }

      .toast__el.success {
        background-color: honeydew;
      }

      .toast__el.error {
        background-color: lightpink;
      }

      @media print {
        .toast {
          display: none;
        }
      }
    </style>
  `
}

customElements.define("toast-notification", component(ToastNotification));
