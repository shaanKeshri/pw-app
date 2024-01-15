const Showcard = ({
  name,
  img,
  id,
  summary,
  onCollectClick,
  addedToCollect,
}) => {
  const about = summary ? summary.replace(/<.+?>/g, '') : 'Click Expend';

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt="poster" />
      <p>{about}</p>
      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Expend
        </a>
        <button type="button" onClick={() => onCollectClick(id)}>
          {addedToCollect ? 'Uncollect' : 'Collect'}
        </button>
      </div>
    </div>
  );
};

export default Showcard;
