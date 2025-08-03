import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OrderInfo from './components/OrderInfo';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <OrderInfo />
              <MenuSection />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
