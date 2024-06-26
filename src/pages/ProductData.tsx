import { products } from "../data/products";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductData = () => {
  const { productId } = useParams();
  const [engineerData, setEngineerData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const oneEngineerView = () => {
    return products.find((el) => {
      if (el.id === Number(productId)) {
        setEngineerData([el]);
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      oneEngineerView();
      setIsLoading(false);
    }, 500);
  }, [productId]);

  return (
    <section id="products" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 mb-5">
        <h2 className="text-center mb-5">Продукты</h2>
        <div className="row">
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            engineerData.length > 0 &&
            engineerData.map((outEl: any) => {
              return outEl.data.map((el: any) => {
                const catalogName = el?.name?.split(" ")?.join("-");
                const catalogTitle = el?.title?.split(" ")?.join("-");
                return (
                  <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
                    <Link
                      to={`/pages/product/${catalogTitle}/${catalogName}/${el.id}`}
                      className="card"
                    >
                      <div className="d-flex justify-content-between p-3">
                        <p className="lead mb-0">
                          Сегодняшнее комбо-предложение
                        </p>
                        <div
                          style={{
                            width: "35px",
                            height: "35px",
                            padding: "10px",
                          }}
                          className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                        >
                          <p className="text-white mb-0 small">
                            x{outEl.count}
                          </p>
                        </div>
                      </div>
                      <img
                        src={el?.image}
                        alt="Gaming Laptop"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <div className="d-flex justify-content-between mb-3">
                          <h5 className="mb-0">{el.title}</h5>
                          <h5 className="text-dark mb-0">{el.price} ₽</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              });
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductData;
