import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import NewsDetail from './Components/NewsDetail';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Components/Redux/store';
import AdminPanel from './Components/AdminPanel/AddPost.jsx';

function App() {
  return (
    <>

      <Provider store={store}>
        <Header />

        <NavBar />
        <Routes>
          <Route path='/Home' element={<Main />} />
          <Route path='/NewsDetails' element={<NewsDetail />} />
        </Routes>

      </Provider>


    </>
  );
}

export default App;
