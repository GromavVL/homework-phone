import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router';
import BasePage from './pages/BasePage';
import Home from './pages/Home';
import PhoneCatalogPage from './pages/PhoneCatalogPage';
import PhoneFormPage from './pages/PhoneFormPage';
import PreorderPage from './pages/PreorderPage';

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path='/catalog' element={<PhoneCatalogPage />} />
          <Route path='/form' element={<PhoneFormPage />} />
          <Route path='/preorder/:id' element={<PreorderPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
