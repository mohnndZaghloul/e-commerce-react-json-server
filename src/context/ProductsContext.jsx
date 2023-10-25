import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductsProvider = ({ children }) => {

    const API_URL = "http://localhost:9000/products";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData();
    },[])
    
    //function to fetch async data to context
    const getData = async () => {
        const res = await axios.get(API_URL);
        const data = await res.data;
        setProducts(data);
    }

    return(
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}


export default ProductsProvider;