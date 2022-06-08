import { useReducer } from 'haunted';
import { id } from '@/utils/helpers';

const initialState = [];

function toastReducer(state, action) {
  switch (action.type) {
    case 'addToast':
      return [...state, action.payload];
    case 'deleteToast':
      return [...state.filter(i => i.id !== action.payload.id)]
  }
}

export function useGenerateToast() {
  const [toastState, toastDispatch] = useReducer(toastReducer, initialState);

  function generateToast(content, color) {
    const toastId = id();
    toastDispatch({ type: 'addToast', payload: { id: toastId, content: content, color: color } });

    setTimeout(() => {
      toastDispatch({ type: 'deleteToast', payload: { id: toastId } });
    }, 2000);
  }

  return { toastState, generateToast }
}
