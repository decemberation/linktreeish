import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import socials from './Socials';
import './App.css' 

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container row">
        {
          socials.map((social, index) => {
            return(
              <Card
                key={index}
                index={index}
                title={social.title}
                banner={social.image}
                url={social.url}
              />
            )
            })
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
