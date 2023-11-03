import { useBurger } from "../context";
import { data } from "./data";

export default function Container() {
  const containerResult = useBurger();

  const { filterBy, sortBy } = containerResult;
  console.log(filterBy);

  console.log("This is the containerResult", containerResult);

  let displayItems = data;

  if (filterBy) {
    switch (filterBy) {
      case "veg":
        displayItems = data.filter(function (citem) {
          return citem.veg === true;
        });
        break;

      case "nonveg":
        displayItems = data.filter(function (citem) {
          return citem.veg === false;
        });
        break;

      default:
        displayItems = data;
    }
  }

  if (sortBy) {
    switch (sortBy) {
      case "highprice":
        displayItems = displayItems.sort(function (a, b) {
          return b.price - a.price;
        });
        break;

      case "lowprice":
        displayItems = displayItems.sort(function (a, b) {
          return a.price - b.price;
        });
        break;

      case "highingredients":
        displayItems = displayItems.sort(function (a, b) {
          return b.ingredients.length - a.ingredients.length;
        });
        break;

      case "lowingredients":
        displayItems = displayItems.sort(function (a, b) {
          return a.ingredients.length - b.ingredients.length;
        });
        break;

      default:
        displayItems = data;
    }
  }

  console.log("This is the filtered array", displayItems);

  return (
    <div>
      <div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          gap: "20rem",
          height: "auto",
          border: "1px solid white",
          marginLeft: "75px",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20rem",
            marginLeft: "38px",
            marginTop: "30px",
            // border: "2px solid orange",
          }}
        >
          <div style={{ color: "white", fontSize: "25px" }}>Image</div>
          <div style={{ color: "white", fontSize: "25px" }}>Name</div>
          <div style={{ color: "white", fontSize: "25px" }}>Price</div>
          <div style={{ color: "white", fontSize: "25px" }}>Veg/Non-veg</div>
        </div>
        <div style={{ borderTop: "1px solid white", marginTop: "-300px" }}>
          <ul style={{ listStyle: "none" }}>
            {displayItems.map(function (citem, i) {
              return (
                <li
                  style={{
                    display: "flex",
                    gap: "15rem",
                    marginLeft: "0px",
                    marginTop: "30px",
                    borderBottom: "1px solid white",
                    width: "auto",
                  }}
                  key={i}
                >
                  <div>
                    <img
                      src={citem.images[0].sm}
                      alt="hello"
                      style={{ height: "50px", width: "50px" }}
                    />
                  </div>
                  <div style={{ color: "white", fontSize: "19px" }}>
                    {citem.name}
                  </div>
                  <div
                    style={{
                      color: "white",
                      // border: "2px solid white",
                      height: "20px",
                      width: "100px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {Math.round(citem.price)}
                    {"💸"}
                  </div>
                  <div>{`${citem.veg ? "🥔" : "🍗"}`}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
