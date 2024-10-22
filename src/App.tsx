import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/home';
import ProductList from './views/ProductList';
import Navbar from './components/navbar/navbar';

const App: React.FC = () => {
  return (<>
      <Navbar/>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:categoryId" element={<ProductList />} />
      </Routes>
  </>
   
  );
};

export default App;
