import './App.css';

import Header from './components/Header/index';
import Info from './components/Info/index';
import ToTop from './components/ToTop/index';
import Contact from './components/Contact/index';
import Menu from './components/Menu/index';
import Foods from '../data.json/';

const App = () => {
  return (
    <div className="container">
      <Header />

      <Info />

      <div className="cards">
        {Foods.map((e) => (
          <Menu
            key={e.id}
            title={e.title}
            desc={e.desc}
            src={e.src}
            modalTitle={e.modalTitle}
            modalDesc={e.modalDesc}
          />
        ))}
        ;
      </div>
      <ToTop />
      <Contact />
    </div>
  );
};

export default App;
