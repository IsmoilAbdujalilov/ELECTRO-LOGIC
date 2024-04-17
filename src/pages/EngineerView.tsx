import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { engineer } from "../data/engineer";

const EngineerView = () => {
  const { id } = useParams();
  const [score, setScore] = useState<number>(1);
  const [oneElData, setOneElData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getOneEl = () => {
    let data: any = [];
    const findData = engineer.map((el: any) => {
      return el?.data.map((el: any) => {
        if (el?.id === Number(id)) {
          data.push(el);
        }
      });
    });
    setOneElData(data);
  };

  useEffect(() => {
    setTimeout(() => {
      getOneEl();
      setIsLoading(false);
    }, 1000);
  }, [id]);

  const incAndDecrCount = (score: any) => {
    if (score < 1) {
      setScore((score = 1));
    }
    setScore(score);
  };

  return (
    <section className="py-5">
      <div className="container">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          oneElData.length > 0 &&
          oneElData.map((el: any) => {
            console.log(el);
            return (
              <div className="row gx-5">
                <aside className="col-lg-6">
                  <div className="border rounded-4 mb-3 d-flex justify-content-center">
                    <a
                      target="_blank"
                      data-type="image"
                      className="rounded-4"
                      data-fslightbox="mygalley"
                    >
                      <img
                        width="100%"
                        height={500}
                        src={el.image}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          height: "500px",
                          margin: "auto",
                        }}
                        className="rounded-4 fit"
                      />
                    </a>
                  </div>
                  <div className="d-flex justify-content-center mb-3">
                    {el?.images?.map((el: any) => {
                      return (
                        <a
                          key={el.id}
                          href={el.img}
                          data-type="image"
                          data-fslightbox="mygalley"
                          className="border mx-1 rounded-2"
                        >
                          <img
                            width="60"
                            height="60"
                            src={el.img}
                            className="rounded-2"
                          />
                        </a>
                      );
                    })}
                  </div>
                </aside>
                <main className="col-lg-6">
                  <div className="ps-lg-3">
                    <h4 className="title text-dark">{el.title}</h4>

                    <hr />

                    <div className="row mb-4">
                      <div className="col-md-4 col-6 mb-3">
                        <label className="mb-2 d-block">Quantity</label>
                        <div
                          className="input-group mb-3"
                          style={{ width: "170px" }}
                        >
                          <button
                            type="button"
                            id="button-addon1"
                            data-mdb-ripple-color="dark"
                            onClick={() => incAndDecrCount(score - 1)}
                            className="btn btn-white border border-secondary px-3"
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <input
                            value={score}
                            type="text"
                            aria-describedby="button-addon1"
                            aria-label="Example text with button addon"
                            className="form-control text-center border border-secondary"
                          />
                          <button
                            type="button"
                            id="button-addon2"
                            data-mdb-ripple-color="dark"
                            onClick={() => incAndDecrCount(score + 1)}
                            className="btn btn-white border border-secondary px-3"
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="mb-3">
                          <span className="h5">Цена: {el.price} ₽</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-2">
                      <div className="box">
                        <button
                          type="button"
                          className="btn btn-primary shadow-0 w-100"
                        >
                          <i className="me-1 fa fa-shopping-basket"></i> Add to
                          cart{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default EngineerView;
