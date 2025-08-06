import Banner from './Component/Banner/Banner'
import Header from './Component/Header';
import MovieSection from './Component/MovieSection';
import Newsletter from './Component/Newsletter';
import Footer from './Component/Footer';

function App() {
  return (
    <>
    <Header/>
    <Banner src="/banner.jpg" alt="Banner" />
    <MovieSection/>
    <Banner src="./combo.png" alt="Combo"/>
    <Newsletter/>
    <Banner src="./tarjeta.png" alt="tarjeta"/>
    <Footer/>
    </>
  )
}

export default App;
