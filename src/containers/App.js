import { html, component } from "haunted";
import '@/components/Search/SearchBar';
import '@/components/Search/SearchResults';
import '@/components/List/UserChoices';
import '@/components/Other/ToastNotification';
import { useManageDrinks } from '@/hooks/useManageDrinks';
import { useGenerateToast } from '@/hooks/useGenerateToast';

function App(element) {
  const { toastState, generateToast } = useGenerateToast();
  const { fetchedData, setFetchedData, userChoices } = useManageDrinks(element, generateToast);

  async function onSubmitHandler(event) {
    event.preventDefault();
    let fetched;
    setFetchedData([]);

    generateToast('Searching...', 'info');

    const lowerCaseVal = event.target?.search?.value?.toLowerCase();

    if (lowerCaseVal.length >= 1) {
      fetched = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${lowerCaseVal}`, {
        method: 'GET',
      }).then(res => res.json()).catch((err) => generateToast(err.message, 'error'));
    } else {
      return;
    }

    if (fetched.drinks) {
      setFetchedData(fetched.drinks);
      generateToast('Here are the results.', 'success');
    } else {
      generateToast('No results found.', 'error')
    }
  }


  return html`
    <toast-notification .toasters=${toastState}></toast-notification>

    <div class="app__bar">
      <search-bar .onSubmit=${onSubmitHandler}></search-bar>
    </div>

    <div class="app__flex">
      <div class="app__col">
        <search-results .data=${fetchedData} .userChoices=${userChoices}></search-results>
      </div>
      <div class="app__col app__col--data">
        <user-choices .fetched=${fetchedData} .data=${userChoices}></user-choices>
      </div>
    </div>

    <style>
      .app__flex {
        display: flex;
        width: 100%;
        box-sizing: border-box;
      }

      .app__col {
        flex: 0 0 50%;
        box-sizing: border-box;
      }

      @media print {
        .app__flex {
          display: block;
        }

        .app__col {
          display: none;
        }

        .app__col--data {
          display: block;
        }
      }
    </style>
  `
}

customElements.define("main-app", component(App));
