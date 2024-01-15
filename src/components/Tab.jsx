import { Link } from 'react-router-dom';
const Tabs = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: '______Collection',
    to: '/collect',
  },
];
const Tab = () => {
  return (
    <div>
      {Tabs.map(item => (
        <Link key={item.to} to={item.to}>
          {' '}
          {item.text}{' '}
        </Link>
      ))}
    </div>
  );
};
export default Tab;
