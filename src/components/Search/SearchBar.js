import { html, component } from "haunted";

function SearchBar({ onSubmit }) {
  return html`
    <form class="search-bar" @submit=${(e) => onSubmit(e)}>
      <div class="search-bar__item">
        <input type="text" name="search" placeholder="e.g. Long Island" class="search-bar__input">
      </div>
      <button type="submit" class="search-bar__button">Search</button>
    </form>

    <style>
      .search-bar {
        padding: 50px 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .search-bar__button {
        transition: all 0.3s ease;
        background: transparent;
        padding: 11px 30px;
        border: solid 1px black;
        font-size: 14px;
        cursor: pointer;
        margin-left: 32px;
      }

      .search-bar__button:hover {
        background-color: lightgreen;
        border-color: lightgreen;
        color: darkgreen;
      }

      .search-bar__input {
        box-sizing: border-box;
        height: 40px;
        width: 280px;
        padding: 5px 20px;
        font-size: 16px;
        font-weight: 500;
        border: 0;
        border-bottom: solid 2px dimgray;
        outline: 0;
      }

      .search-bar__input:focus {
        border-bottom-color: lightgreen;
      }

      .search-bar__input::placeholder {
        color: lightgrey;
      }

      /* Change the white to any color */
      .search-bar__input:-webkit-autofill,
      .search-bar__input:-webkit-autofill:hover,
      .search-bar__input:-webkit-autofill:focus,
      .search-bar__input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
      }

      @media print {
        .search-bar {
          display: none;
        }
      }
    </style>
  `
}

customElements.define("search-bar", component(SearchBar));
