const Castdetail = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id}>
          <div>
            <img
              src={person.image ? person.image.medium : '/no image-small.png'}
            />
          </div>
          <div>
            {person.name} | {character.name} {!!voice && '| Voiceover'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Castdetail;
