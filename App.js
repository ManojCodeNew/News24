import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import BreakingNews from './Components/Breaking_news';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
<>
<Header/>
{/* <div className='Main-container'> */}
<NavBar/>
<BreakingNews/>
<Main/>
<Footer/>
{/* </div> */}

</>
  );
}

export default App;
