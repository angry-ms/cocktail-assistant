import { html, component } from "haunted";
import '@/components/Search/SearchButtons';

function SearchItem({ data, inUserChoicesList }) {

  const addToList = () => {
    const event = new CustomEvent('event-add', {
      bubbles: true,
      composed: true,
      detail: { data }
    });
    this.dispatchEvent(event);
  }

  const removeFromList = () => {
    const event = new CustomEvent('event-remove', {
      bubbles: true,
      composed: true,
      detail: { data }
    });
    this.dispatchEvent(event);
  }

  return html`
    <div class="search-item">
      <div class="search-item__wrap">
        <div class="search-item__image">
          <img src=${data.strDrinkThumb} alt=${data.strDrinkAlternate || data.strDrink}>
        </div>
        <div class="search-item__content">
          <h2 class="search-item__heading">${data.strDrink}</h2>
          <p class="search-item__description">${data.strInstructions}</p>
          <search-buttons class="search-item__btn-component" .isSelected=${inUserChoicesList} .add=${addToList} .remove=${removeFromList}></search-buttons>
        </div>
      </div>
    </div>
    
    <style>
      .search-item {
        padding: 32px 16px;
        margin-bottom: 32px;
        box-shadow: 0 5px 10px 1px rgba(0,0,0, 0.1);
        border-radius: 16px;
      }
      .search-item__wrap {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        flex-direction: row;
      }
      .search-item__image {
        flex: 0 0 128px;
        padding-right: 32px;
        font-size: 0;
      }
      .search-item__image img {
        width: 180px;
        height: 180px;
        object-fit: cover;
        font-size: 0;
      }
      .search-item__content {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
      }
      .search-item__heading {
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 32px;
        font-weight: 700;
        color: dimgray;
      }
      .search-item__description {
        margin-top: 0;
        margin-bottom: 16px;
        font-size: 14px;
        font-weight: 300;
        color: grey;
      }
      .search-item__btn-component {
        margin-top: auto;
      }
    </style>
  `
}

customElements.define("search-item", component(SearchItem));
