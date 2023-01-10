import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Menu from './components/Menu/index';
import Foods from '../data.json/';

const App = () => {
  return (
    <>
      <div className="container">
        <Header />

        <div className="cards">
          {Foods.map((e) => (
            <Menu key={e.id} title={e.title} desc={e.desc} src={e.src} />
          ))}
          ;
        </div>
      </div>
    </>
  );
};

export default App;
