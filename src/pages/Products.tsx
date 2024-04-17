import { Link } from "react-router-dom";
import { products } from "../data/products";

const Products = () => {
  return (
    <section className="catalog py-5">
      <div className="catalog-container container">
        <h2 className="text-center mb-5">Продукты каталог</h2>
        <ul className="list-group list-group-light">
          {products.map((el) => {
            const path = `${el.name.split(" ").join("-")}/${el.id}`;
            return (
              <Link
                to={`/pages/product/${path}`}
                className="list-group-item border p-2 d-flex justify-content-between align-items-center"
              >
                {el.name}
                <span className="badge badge-primary rounded-pill">20</span>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Products;
