import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { engineer } from "../data/engineer";
import { useDispatch } from "react-redux";
import { GET_DATAS } from "../store/actions";

const EngineerView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = JSON.parse(localStorage.getItem("token") as string) || {};
  // const [score, setScore] = useState<number>(0);
  const [oneElData, setOneElData] = useState([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [storageData, setStorageData] = useState<any>(
    JSON.parse(localStorage.getItem("data") as string) || []
  );

  const getOneEl = () => {
    const data = [];
    for (let i = 0; i < engineer[0]?.data?.length; i++) {
      if (engineer[0]?.data[i]?.id === Number(id)) {
        data.push(engineer[0]?.data[i]);
      }
    }

    return data;
  };

  const data: any = getOneEl()?.flat();

  useEffect(() => {
    setTimeout(() => {
      setOneElData(data);
      setIsLoading(false);
    }, 1000);
  }, [id]);

  // const incAndDecrCount = (score: any) => {
  //   if (score < 1) {
  //     setScore((score = 0));
  //   }
  //   setScore(score);
  // };

  const handleClick = (data: any) => {
    if (!token) {
      navigate("/pages/login");
    } else {
      setStorageData([...storageData, data]);
      dispatch(GET_DATAS(data));
    }
  };

  localStorage.setItem("data", JSON.stringify(storageData));

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
                  <div className="row">
                    <div className="col-2"></div>
                  </div>
                  <div className="row gap-3">
                    {el?.images?.map((el: any) => {
                      return (
                        <a
                          key={el.id}
                          href={el.img}
                          data-type="image"
                          data-fslightbox="mygalley"
                          className="col-1 rounded-2"
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
                        {/* <label className="mb-2 d-block">Quantity</label>
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
                        </div> */}
                        <div className="mb-3">
                          <span className="h5">Цена: {el.price} ₽</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-2">
                      <div className="box">
                        <button
                          type="button"
                          onClick={() => handleClick(el)}
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
