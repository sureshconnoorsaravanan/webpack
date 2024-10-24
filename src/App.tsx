import { Provider } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { store } from './redux/store';
import Home from './views/Home';
import ProductList from './views/ProductList';
import Footer from './components/Footer';
import CategoryTab from './components/CategoryTab';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <Provider store={store}>
      <Navbar/>
      <CategoryTab />
      {location.pathname !== "/" && (
        <div className="container mt-3 d-flex justify-content-end">
          <button
            className="back-button"
            onClick={() => navigate("/")}
          >
            ← {t('back-to-home')}
          </button>
        </div>
      )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:categoryId" element={<ProductList />} />
        </Routes>
        <Footer/>
  </Provider>
   
  );
};

export default App;
