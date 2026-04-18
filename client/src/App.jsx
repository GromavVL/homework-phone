import { BrowserRouter as Router, Routes, Route } from 'react-router'
import BasePage from './pages/BasePage'
import Home from './pages/Home'
import PhoneCatalogPage from './pages/PhoneCatalogPage'
import PhoneFormPage from './pages/PhoneFormPage'

function App () {
  return (
    <Router>
      <Routes>
        <Route patch='/' element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path='/catalog' element={<PhoneCatalogPage />} />
          <Route path='/form' element={<PhoneFormPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
