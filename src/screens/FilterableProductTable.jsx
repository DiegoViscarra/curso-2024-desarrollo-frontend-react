import { useState } from "react";
import { useSelector } from 'react-redux';
import SearchBar from "./_components/SearchBar";
import ProductTable from "./_components/ProductTable";

const FilterableProductTable = () => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    const filterableProductTableState = useSelector((state) => state.filterableProductTable);

    return (
        <div>
            <SearchBar 
                filterText={filterText} 
                inStockOnly={inStockOnly} 
                onFilterTextChange={setFilterText} 
                onInStockOnlyChange={setInStockOnly} />
            <ProductTable 
                products={filterableProductTableState.products} 
                filterText={filterText}
                inStockOnly={inStockOnly} />
        </div>
    );
};

export default FilterableProductTable;