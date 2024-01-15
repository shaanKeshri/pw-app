import { useReducer, useEffect } from 'react';

const useLocalReducer = (reducer, initState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initState, initial => {
    const savedValue = localStorage.getItem(localStorageKey);
    return savedValue ? JSON.parse(savedValue) : initial;
  });
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);
  return [state, dispatch];
};

const collectReducer = (currentCollect, action) => {
  switch (action.type) {
    case 'COLLECT':
      return currentCollect.concat(action.showId);
    case 'UNCOLLECT':
      return currentCollect.concat.filter(showId => showId !== action.showId);
    default:
      return currentCollect;
  }
};

export const ListCollectedShows = () => {
  return useLocalReducer(collectReducer, [], 'collectedShows');
};
