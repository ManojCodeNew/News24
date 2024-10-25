import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import NewsDetail from './Components/NewsDetail';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Components/Redux/store';
function App() {
  return (
    <>

      <Header />

      {/* <div className='Main-container'> */}
      <NavBar />
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/NewsDetails' element={<NewsDetail />} />
        </Routes>
      {/* <NewsCard /> */}
      {/* <GridBox category="ರಾಜ್ಯ"/> */}

      </Provider>

      {/* </div> */}

    </>
  );
}

export default App;
