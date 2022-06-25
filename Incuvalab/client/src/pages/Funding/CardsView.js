import Card from './components/Card';
import { Helmet } from 'react-helmet';
import one from "./images/1bs.jpg";
import two from "./images/2bs.jpg";
import three from "./images/3bs.jpg";

const App = () => {
  const cards = [
    {
      price: 100,
      imgSrc: one,
    },
    {
      price: 250,
      imgSrc: two,
    },
    {
      price: 500,
      imgSrc: three,
    }
  ]
  
  return (
    <>
      
      <div class="title-cards">
        <h2>Opciones que Ofrecemos</h2>
      </div>
      <div class="container-card">
        {cards.map(card => (
          <Card 
            price={card.price}
            imgSrc={card.imgSrc}
          />
        ))}
      </div>
    </>
  );
}

export default App;
