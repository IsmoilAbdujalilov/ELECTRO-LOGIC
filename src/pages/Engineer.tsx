import { Link } from "react-router-dom";
import { engineer } from "../data/engineer";

const Engineer = () => {
  return (
    <section className="catalog py-5">
      <div className="catalog-container container">
        <h2 className="text-center mb-5">Инженер каталог</h2>
        <ul className="list-group list-group-light">
          {engineer.map((el) => {
            const path = `${el.name.split(" ").join("-")}/${el.id}`;
            return (
              <Link
                to={`/pages/engineer-products/${path}`}
                className="list-group-item d-flex justify-content-between align-items-center"
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

export default Engineer;


