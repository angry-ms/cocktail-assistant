import { html, component, useCallback } from "haunted";
import { filterIngredients } from '@/utils/helpers';
import '@/components/List/PrintButton';

function UserChoices({ data, fetched }) {

  const renderUniqueIngredients = useCallback(() => {
    const ingredients = filterIngredients(data);

    if (ingredients.length > 0) {
      return ingredients.map(el => html`
        <li class="user-choices__item">${el}</li>`)
    }
  }, [data]);

  const render = () => {
    if (data.length > 0 || fetched.length > 0) {
      return html`
        <div class="user-choices">
          <div class="user-choices__inner" id="elementToPrint">
            <p class="user-choices__heading">Shopping list</p>

            <ul class="user-choices__items">
              ${renderUniqueIngredients()}
            </ul>
          </div>
          <print-button .data=${data} class="user-choices__btn"></print-button>
        </div>
      `
    }
  }

  return html`
      ${render()}

    <style>
      .user-choices {
        padding: 32px 16px;
        box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        box-sizing: border-box;
        margin-left: 30px;
      }

      .user-choices__items {
        margin: 0;
        padding: 0 0 0 30px;
        list-style-position: inside;
      }

      .user-choices__item {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 10px;
      }

      .user-choices__heading {
        font-size: 24px;
        font-weight: 700;
        margin: 0;
        padding-bottom: 16px;
        color: dimgray;
      }

      @media print {
        .user-choices {
          box-shadow: none;
          margin-left: 0;
        }

        .user-choices__heading {
          font-size: 20px;
          margin-bottom: 32px;
        }

        .user-choices__btn {
          display: none;
        }
      }
    </style>
  `
}

customElements.define("user-choices", component(UserChoices));
