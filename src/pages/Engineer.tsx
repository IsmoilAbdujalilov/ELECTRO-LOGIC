import { Link } from "react-router-dom";
import { engineer } from "../data/engineer";

const Engineer = () => {
  return (
    <section className="catalog py-5">
      <div className="catalog-container container">
        <h2 className="text-center mb-5">Инженер продукты</h2>
        <ul className="list-group list-group-light">
          {engineer.map((el) => {
            return (
              <a
                href={`#${el.count}`}
                className="list-group-item border p-2 d-flex justify-content-between align-items-center"
              >
                {el.name}
                <span className="badge badge-primary rounded-pill">
                  {el.count}
                </span>
              </a>
            );
          })}
        </ul>

        {engineer.map((el: any) => {
          console.log(el);
          return (
            <div className="mt-5" id={el.count}>
              <h3>{el.name}</h3>
              <div className="row">
                {el?.data?.map((outEl: any) => {
                  return (
                    <div className="col-md-6 col-lg-4 mb-4 mb-md-0 mt-3">
                      <Link
                        className="card mb-4 px-3"
                        to={`/pages/engineer-products/${outEl.name}/${el.id}/${outEl.id}`}
                      >
                        <div className="d-flex justify-content-between p-3 align-items-center">
                          <p className="lead mb-0" style={{ fontSize: "18px" }}>
                            Сегодняшнее комбо-предложение
                          </p>
                          {/* <div
                            style={{
                              width: "35px",
                              height: "35px",
                              padding: "10px",
                            }}
                            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                          >
                            <p className="text-white mb-0 small">
                              x{el.count}
                            </p>
                          </div> */}
                        </div>
                        <img
                          height={325}
                          style={{ width: "100%" }}
                          src={outEl.image}
                          className="card-img-top"
                          alt="Gaming Laptop"
                        />
                        <div className="card-body">
                          <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0" style={{ width: "60%" }}>
                              {outEl.title}
                            </h5>
                            <h5 className="text-dark mb-0">{outEl.price} ₽</h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Engineer;
