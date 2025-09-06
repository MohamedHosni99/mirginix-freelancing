import { Suspense, lazy } from 'react';
import ButtonGradient from './assets/svg/ButtonGradient.jsx';
import Loader from './components/Loader/Loader.jsx';
import { Routes, Route } from 'react-router-dom';



const MainPage = lazy(() => import('./components/MainPage.jsx')); 
const ServiceDetail = lazy(() => import('./components/ServiceDetail.jsx'));

const App = () => {

  return (
    <Suspense fallback={<Loader />}>
      <div className="pt-[4.75rem] lg:pt-[5.75rem] overflow-hidden">
        
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/service-detail/:id" element={<ServiceDetail />} />
      </Routes>
      <ButtonGradient />
      </div>
    </Suspense>
  );
};

export default App;
