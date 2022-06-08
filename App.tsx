import * as React from 'react';
import './style.css';
import axios from 'axios';

export default function App() {
  const [cats, setCats] = React.useState([]);

  const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=50';

  const loadCats = () => {
    axios.get(API_URL).then((response) => {
      console.log(response);
      setCats(response.data);
    });
  };

  const Cat = ({ cat }) => {
    return <img key={cat.id} src={cat.url} />;
  };

  React.useEffect(() => {
    loadCats();
  }, []);

  return (
    <div>{cats.length > 0 && cats.map((cat) => <Cat cat={cat}></Cat>)}</div>
  );
}
