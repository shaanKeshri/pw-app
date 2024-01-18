import noImage from '../../lib/noImage.png';
const Showdescribed = ({ name, img, rating, summary, genres }) => {
  return (
    <div>
      <h1>{name}</h1>

      <img src={img ? img.original : noImage} alt={name} />
      <div>
        <div>Raring- {rating.average || 'N/A'}</div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
      <div>
        Genres
        <div>
          {genres.map(genres => (
            <span key={genres}>{genres}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showdescribed;
