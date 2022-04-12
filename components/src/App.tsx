import Header from './component/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/404';
import Form from './pages/Form';
import { PATH_MAIN, PATH_404, PATH_ABOUT, PATH_OTHER, PATH_FORM } from './constants/constants';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={PATH_MAIN} element={<Main />} />
        <Route path={PATH_FORM} element={<Form />} />
        <Route path={PATH_ABOUT} element={<AboutUs />} />
        <Route path={PATH_404} element={<NotFound />} />
        <Route path={PATH_OTHER} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
