import {Card, Heading, Loading, SearchBar, Slider } from '../components/index';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productSilce";

function Home() {
  const products = useSelector((state) => state.products);
  const [viewProducts, setViewProducts] = useState(products);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch])
  
  useEffect(() => {
    setViewProducts(products);
},[products])


  //search by text
  const searchHandler = (searchTxt) => {
    const newProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchTxt.toLowerCase());
    })
    setViewProducts(newProducts);
  }

  //search by category
  const categoryHandler = (category) => {
    const newProducts = products.filter((product) => {
      return product.category == category;
    });
    setViewProducts(newProducts);
  }

  return (
    <div>
      <Slider />
      <div className="container mx-auto mt-10">
        <Heading title="Products"/>
        <SearchBar searchHandler={searchHandler} categoryHandler={categoryHandler}/>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4">
          {viewProducts[0] ? viewProducts.map((product) => (
            <Card key={product.id} {...product} />
          ))
          :
          <div className="col-span-12">
            <Loading />
          </div>
        }
        </div>
      </div>
    </div>
  )
}

export default Home;