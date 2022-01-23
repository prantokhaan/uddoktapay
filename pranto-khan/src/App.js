import AboutUs from './Pages/AboutUs/AboutUs';
import Blog from './Pages/Blog/Blog';
import Features from './Pages/Features/Features';
import Footer from './Pages/Footer/Footer';
// import './App.css';
import Header from './Pages/Header/Header/Header';
import Personal from './Pages/Header/Personal/Personal';
import Phones from './Pages/Phones/Phones';
import StartUsing from './Pages/StartUsing/StartUsing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Personal></Personal>
      <Features></Features>
      <AboutUs></AboutUs>
      <Phones></Phones>
      <Blog></Blog>
      <StartUsing></StartUsing>
      <Footer></Footer>
    </div>
  );
}

export default App;
