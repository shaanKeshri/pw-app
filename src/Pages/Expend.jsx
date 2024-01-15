// import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { expendPage } from '../api/tvmaze';
// import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Showdescribed from '../components/shows/Showdescribed';
import Detailed from '../components/shows/Detailed';
import Seasondetail from '../components/shows/Seasondetail';
import Castdetail from '../components/shows/Castdetail';

// const useExpendById = showId => {
//   const [expendData, setExpendData] = useState(null);
//   const [expendErr, setExpendErr] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await expendPage(showId);
//         setExpendData(data);
//       } catch (err) {
//         setExpendErr(err);
//       }
//     }
//     fetchData();
//   }, [showId]);

//   return [expendData, expendErr];
// };

const Expend = () => {
  const { showId } = useParams();
  // const { expendData, expendErr } = useExpendById(showId);
  const { data: expendData, err: expendErr } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => expendPage(showId),
    refetchOnWindowFocus: false,
  });

  // const hook = useNevigate;

  // // const goToHome = () => {
  // //   hook('/');
  // };

  if (expendErr) {
    return <div>We have an Error: {expendErr.massage}</div>;
  }
  if (expendData) {
    return (
      <div>
        <Link to="/">Move to Home</Link>
        {/* <button type="button" onClick={goToHome}>
          Move to Home
        </button> */}
        <Showdescribed
          name={expendData.name}
          img={expendData.image}
          rating={expendData.rating}
          summary={expendData.summary}
          genres={expendData.genres}
        />
        <div>
          <h2>Details</h2>
          <Detailed
            status={expendData.status}
            premiered={expendData.premiered}
            network={expendData.network}
          />
        </div>
        <div>
          <h2>Seasons</h2>
          <Seasondetail seasons={expendData._embedded.seasons} />
        </div>
        <div>
          <h2>Cast</h2>
          <Castdetail cast={expendData._embedded.cast} />
        </div>
      </div>
    );
  }

  return <div>Data is loading</div>;
};

export default Expend;
