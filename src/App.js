
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';

function App() {
  return (
    <>
    <Logo/>
    <Header/>
    <Footer title="TNI" website="www.google.com" 
    address="Bangkok" postcode={10510} isOpen/>
    </>
  );
}

export default App;
