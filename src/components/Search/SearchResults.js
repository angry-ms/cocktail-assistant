import { html, component } from "haunted";
import {containsObject} from '@/utils/helpers';
import '@/components/Search/SearchItem';

function SearchResults({ data, userChoices }) {

  const renderSearchResults = () => {
    if (data && data?.length >= 1) {
      return data.map(single => {
        const inUserChoicesList = containsObject(single, userChoices);
        return html`<search-item .data=${single} .inUserChoicesList=${inUserChoicesList}></search-item>`
      })
    }
  }

  return html`
    <div class="search-results">
      <ul class="search-results__items">
        ${renderSearchResults()}
      </ul>
    </div>
    
    <style>
      ul {
        padding: 0;
        margin: 0;
      }
    </style>
  `
}

customElements.define("search-results", component(SearchResults));
