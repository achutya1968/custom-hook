import './App.css';

import Product from "./components/Product";
import useProductHook from "./components/useProductHook";

export default function App(){
  const { product,loading } = useProductHook();

  if(loading){
    return <h1>Loading....</h1>
  }

  return (
    <div className="App">
      <>
        <h1>Simple Custom Hook</h1>
        {product &&
          product?.map((p) => (
            <Product
              id={p.id}
              image={p.image}
              description={p.description}
              price={p.price}
            />
          ))}
      </>
    </div>
  );
}