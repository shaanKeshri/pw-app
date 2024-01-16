import { HashRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './Pages/Home';
import { Collect } from './Pages/Collect';
import { OutletV } from './components/Outlet';
import './App.css';
import Expend from './Pages/Expend';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route element={<OutletV />}>
            <Route path="/" element={<Home />} />
            <Route path="/collect" element={<Collect />} />
          </Route>
          <Route path="/show/:showId" element={<Expend />} />
          <Route
            path="*"
            element={
              <div>
                This Page not Created Yet.
                <br /> Keep enjoying the Main Page.
              </div>
            }
          />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
