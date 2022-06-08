import { useEffect, useState } from 'haunted';

export function useManageDrinks(element, generateToast) {
  const [fetchedData, setFetchedData] = useState([]);
  const [userChoices, setUserChoices] = useState([]);

  useEffect(() => {
    const onAddEvent = ({ detail: { data } }) => {
      setUserChoices(previousState => [...previousState, data]);
      generateToast('Ingredients added to shopping list.', 'success');
    };

    element.addEventListener('event-add', onAddEvent);

    return () => element.removeEventListener('event-add', onAddEvent);
  }, []);

  useEffect(() => {
    const onRemoveEvent = ({ detail: { data } }) => {
      setUserChoices(previousState => previousState.filter(i => i.idDrink !== data.idDrink));
      generateToast('Ingredients removed from shopping list.', 'success');
    };

    element.addEventListener('event-remove', onRemoveEvent);

    return () => element.removeEventListener('event-remove', onRemoveEvent);
  }, []);

  return { fetchedData, userChoices, setFetchedData };
}
