import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import OrderInfo from './components/OrderInfo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <OrderInfo />
            <MenuSection />
          </>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 