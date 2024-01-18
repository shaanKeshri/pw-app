import Showcard from './Showcard';
import { ListCollectedShows } from '../../lib/ListCollectedShows';
import noImage from '../../lib/noImage.png';

//section moved to ListCollectedShows.jsx to
// const useLocalReducer = (reducer, initState, localStorageKey) => {
//   const [state, dispatch] = useReducer(reducer, initState, initial => {
//     const savedValue = localStorage.getItem(localStorageKey);
//     return savedValue ? JSON.parse(savedValue) : initial;
//   });
//   useEffect(() => {
//     localStorage.setItem(localStorageKey, JSON.stringify(state));
//   }, [state, localStorageKey]);
//   return [state, dispatch];
// };

// const collectReducer = (currentCollect, action) => {
//   switch (action.type) {
//     case 'COLLECT':
//       return currentCollect.concat(action.showId);
//     case 'UNCOLLECT':
//       return currentCollect.concat.filter(showId => showId !== action.showId);
//     default:
//       return currentCollect;
//   }
// };

const Showgrid = ({ shows }) => {
  const [collect, dispatchCollect] = ListCollectedShows();
  // const [collect, dispatchCollect] = useLocalReducer(
  //   collectReducer,
  //   [],
  //   'collectedShows'
  // );

  // useLocalReducer(reducer, [], '');

  const onClickCollect = showId => {
    const afterCollected = collect.includes(showId);
    if (afterCollected) {
      dispatchCollect({ type: 'UNCOLLECT', showId });
    } else dispatchCollect({ type: 'COLLECT', showId });
  };
  return (
    <div>
      {shows.map(data => (
        <Showcard
          id={data.show.id}
          key={data.show.id}
          name={data.show.name}
          img={data.show.image ? data.show.image.medium : noImage}
          summary={data.show.summary}
          onCollectClick={onClickCollect}
          addedToCollect={collect.includes(data.show.id)}
        />

        // <div key={data.show.id}> {data.show.name}</div>
      ))}
    </div>
  );
};

export default Showgrid;
