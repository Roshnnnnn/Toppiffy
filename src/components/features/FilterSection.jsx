import { useDispatch, useSelector } from "react-redux";
import { setBrand, setPrice, setSort } from "../redux/slices/filterSlice";

const FilterSection = () => {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filter);

  const handleBrandChange = (e) => {
    dispatch(setBrand(e.target.value));
    console.log(e.target.value);
  };

  const handlePriceChange = (e) => {
    dispatch(setPrice(e.target.value));
    console.log(e.target.value);
  };

  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value));
    console.log(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 mx-12 bg-gray-200">
      <select
        className="p-2 border border-gray-300 rounded mb-2 md:mb-0 md:mr-2"
        value={filterState.brand}
        onChange={handleBrandChange}
      >
        <option value="">All Brands</option>
        <option value="HERSHEYS">HERSHEYS</option>
        <option value="NESTLE">NESTLE</option>
        <option value="CADBURY">CADBURY</option>
        <option value="WHITTAKER">WHITTAKER</option>
        <option value="FERRERO">FERRERO</option>
      </select>

      <select
        className="p-2 border border-gray-300 rounded mb-2 md:mb-0 md:mr-2"
        value={filterState.price}
        onChange={handlePriceChange}
      >
        <option value="">Price</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>

      <select
        className="p-2 border border-gray-300 rounded"
        value={filterState.sort}
        onChange={handleSortChange}
      >
        <option value="">Alphabetical</option>
        <option value="aToZ">A to Z</option>
        <option value="zToA">Z to A</option>
      </select>
    </div>
  );
};

export default FilterSection;
