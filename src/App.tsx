import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";
import { AppContainer } from "./styles";

interface MoviesResponse {
  products: {
    id: number;
    title: string;
    price: number;
    image: string;
  }[];
}

function App() {
  const [dataResponse, setDataResponse] = useState<MoviesResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const api = "https://wefit-movies.vercel.app/api/movies";

  const fetchData = async () => {
    try {
      const response = await axios.get(api);
      setDataResponse(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!dataResponse) {
    return <div>No data available</div>;
  }

  return (
    <AppContainer>
      {
        React.Children.toArray(
          dataResponse?.products.map((product) => (
            <Card
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))
        )
      }
    </AppContainer>
  );
}

export default App;
