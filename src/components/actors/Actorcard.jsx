const ActorCard = ({ name, country, img, gender, birthday, deathday }) => {
  return (
    <div>
      <h2>
        {name} {!!gender && `(${gender})`}
      </h2>

      <div>
        <img src={img} alt="pic" />
      </div>

      <p>{country ? `Belongs to ${country}` : 'Country Unknown'}</p>

      {!!birthday && <p>Was Born- {birthday}</p>}

      <p>
        {deathday
          ? `Escaped the World- ${deathday}`
          : 'Fortunately not escaped from Earth ❤️'}
      </p>
    </div>
  );
};
export default ActorCard;
