
import About from './components/About';
import Footer from './components/Footer';
import JumbotronPanel from './components/JumbotronPanel';
import Konten from './components/Konten';
import NavbarApp from'./components/NavbarApp';
import "./css/Page.css"
function App() {
  return (
    <div className="App">
      {/* bagian atas */}
      <div className='intro'>
        <NavbarApp/>
        <div className='jumbotron'>
        <JumbotronPanel/>
        </div>
      </div>
      {/* penutup atas */}
      {/* konten */}
      <div className='konten'>
      <Konten/>
      </div>
      <div className='about bg-dark text-white'>
      <About/>
      </div>
      <div className='footer'>
      <Footer/>
      </div>
      {/* penutp konten */}
    </div>
  );
}

export default App;
