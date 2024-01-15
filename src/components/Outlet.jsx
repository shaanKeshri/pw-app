import { Outlet } from 'react-router-dom';
import Tab from './Tab';
export const OutletV = () => {
  return (
    <div className="App-header">
      <h1>Welcome to Moviespedia 🎞️</h1>

      <Tab />
      <Outlet />
    </div>
  );
};
