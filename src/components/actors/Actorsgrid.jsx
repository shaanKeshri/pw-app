import Actorcard from './Actorcard';
import noImage from '../../lib/noImage.png';

const Actorsgrid = ({ actors }) => {
  return (
    <div>
      {actors.map(data => (
        <Actorcard
          key={data.person.id}
          name={data.person.name}
          img={data.person.image ? data.person.image.medium : noImage}
          gender={data.person.gender}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
        />
        // <div key={data.person.id}> {data.person.name}</div>
      ))}
    </div>
  );
};

export default Actorsgrid;
