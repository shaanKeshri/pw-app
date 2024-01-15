const urlHead = 'https://api.tvmaze.com';

const splitUrl = async queryString => {
  const callApi = await fetch(`${urlHead}${queryString}`);

  const jsonData = await callApi.json();

  return jsonData;
};

export const searchForShows = query => splitUrl(`/search/shows?q= ${query}`);
export const searchForPeople = query => splitUrl(`/search/people?q= ${query}`);

export const expendPage = showId =>
  splitUrl(`/shows/${showId}?embed[]=seasons&embed[]=cast`);
export const expendPages = async showIds => {
  const Promises = showIds.map(showId => splitUrl(`/shows/${showId}`));

  return Promise.all(Promises);
};
