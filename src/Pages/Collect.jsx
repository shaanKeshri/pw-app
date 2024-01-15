import { useQuery } from '@tanstack/react-query';
import { ListCollectedShows } from '../lib/ListCollectedShows';
import { expendPages } from '../api/tvmaze';
import Showgrid from '../components/shows/Showgrid';

export const Collect = () => {
  const [collectIds] = ListCollectedShows();
  const { data: Collect, err: CollectShowsErr } = useQuery({
    queryKey: ['Collected', collectIds],
    queryFn: () =>
      expendPages(collectIds).then(result => result.map(show => ({ show }))),

    refetchOnWindowFocus: false,
  });
  if (Collect?.length === 0) {
    return <div>Nothing Collected.</div>;
  }

  if (Collect?.length > 0) {
    return <Showgrid shows={Collect} />;
  }

  if (CollectShowsErr) {
    return <div>Error Occured: {CollectShowsErr.message}</div>;
  }

  return <div> Shows are Loading..</div>;
};
