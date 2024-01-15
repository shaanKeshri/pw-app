import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import Searchform from '../components/Searrchform';
import Actorsgrid from '../components/actors/Actorsgrid';
import Showgrid from '../components/shows/Showgrid';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataErr, setApiDataErr] = useState(null);

  const searchBegin = async ({ q, searchPref }) => {
    try {
      setApiDataErr(null);

      if (searchPref === 'shows') {
        const data = await searchForShows(q);
        setApiData(data);
      } else {
        const data = await searchForPeople(q);
        setApiData(data);
      }
    } catch (error) {
      setApiDataErr(error);
    }
  };

  const inspectData = () => {
    if (apiDataErr) {
      <div>{apiDataErr.massage}</div>;
    }

    if (apiData?.length === 0) {
      return <div>Nothig Matched with that.</div>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <Showgrid shows={apiData} />
      ) : (
        // apiData.map(data => <div key={data.show.id}> {data.show.name}</div>)
        <Actorsgrid actors={apiData} />
      );
      // apiData.map(data => (
      //     <div key={data.person.id}> {data.person.name}</div>));
    }
    return null;
  };

  return (
    <div>
      <Searchform onSearch={searchBegin} />

      <div>{inspectData()}</div>
    </div>
  );
};
export default Home;
