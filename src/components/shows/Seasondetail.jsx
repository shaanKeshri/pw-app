const Seasondetail = ({ seasons }) => {
  return (
    <div>
      <p>Seasons in Total:{seasons.length}</p>
      <p>
        Episodes in Total:
        {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </p>
      <div>
        {seasons.map(season => {
          <div key={season.id}>
            <p>Season{season.number}</p>
            <p>Episodes: {seasons.episodesOrder}</p>
            <div>
              Aired: {season.premierDate}- {season.endDate}
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Seasondetail;
