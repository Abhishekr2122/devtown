import { useBurger } from "../context";

export default function NavBar() {
  const result = useBurger();
  const { filterBy, sortBy, handleFilterBy, handleSortBy } = result;
  console.log(result);

  return (
    <ul
      style={{
        listStyle: "none",
        marginTop: "90px",
        marginRight: "100px",
        display: "flex",
        gap: "2rem",
      }}
    >
      <li>
        <select
          name="Filter"
          style={{ borderRadius: "8px" }}
          value={filterBy}
          onChange={function (e) {
            handleFilterBy(e.target.value);
          }}
        >
          <option value="veg">Veg</option>
          <option value="nonveg">Non-veg</option>
        </select>
      </li>
      <li>
        <select
          name="sort"
          style={{ borderRadius: "8px" }}
          value={sortBy}
          onChange={function (e) {
            handleSortBy(e.target.value);
          }}
        >
          <option value="highprice">Higher-Price</option>
          <option value="lowprice">Lower-price</option>
          <option value="highingredients">Higher-ingredients</option>
          <option value="lowingredients">Lower-ingredients</option>
        </select>
      </li>
    </ul>
  );
}
