import { useState, useEffect } from "react";
import { useSelector, useDispatch  } from 'react-redux';
import { setProducts } from "../redux/product/productActions";
import SearchBar from "./Products/_components/SearchBar";
import ProductTable from "./Products/_components/ProductTable";

const Product = () => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setProducts([
                { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
                { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
                { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
                { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
                { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
                { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
            ])
        )
    }, []);

    return (
        <div>
            <SearchBar 
                filterText={filterText} 
                inStockOnly={inStockOnly} 
                onFilterTextChange={setFilterText} 
                onInStockOnlyChange={setInStockOnly} />
            <ProductTable 
                products={product.PRODUCTS} 
                filterText={filterText}
                inStockOnly={inStockOnly} />
        </div>
    );
};

export default Product;