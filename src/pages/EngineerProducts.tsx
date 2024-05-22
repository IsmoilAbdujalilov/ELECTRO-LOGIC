import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { engineer } from "../data/engineer";
import { useDispatch } from "react-redux";
import { GET_DATAS } from "../store/actions";

const EngineerView = () => {
  const params: any = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [oneElData, setOneElData] = useState([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const data = engineer[Number(params.productId)];
  const filterData = engineer.find((el) => {
    if (el.id === Number(params.id)) {
      return el;
    }
  });

  const findData = filterData?.data?.find((el) => {
    if (el.id === Number(params.productId)) {
      return el;
    }
  });

  console.log(findData);

  useEffect(() => {
    const data: any = [];

    setOneElData(data);
    setIsLoading(false);
  }, [Number(params.productId)]);

  const handleClick = (data: any) => {
    console.log(data);

    if (!token) {
      navigate("/pages/login");
    } else {
      dispatch(GET_DATAS(data));
    }
  };

  return (
    <section className="py-5">
      <div className="container">
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
                  src={findData?.image}
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
            <div className="row gap-4">
              {findData?.images?.map((el: any) => {
                return (
                  <a
                    key={el?.id}
                    href={el?.img}
                    data-type="image"
                    data-fslightbox="mygalley"
                    className="col-1 rounded-2"
                  >
                    <img
                      width="60"
                      height="60"
                      src={el?.img}
                      className="rounded-2"
                    />
                  </a>
                );
              })}
            </div>
          </aside>
          <main className="col-lg-6">
            <div className="ps-lg-3">
              <h4 className="title text-dark mt-3">{findData?.title}</h4>

              <hr />

              <div className="row mb-4">
                <div className="col-md-4 col-6 mb-3">
                  <div className="mb-3">
                    <span className="h5">Цена: {findData?.price} ₽</span>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <div className="box">
                  <button
                    type="button"
                    onClick={() => handleClick(findData)}
                    className="btn btn-primary shadow-0 w-100"
                  >
                    <i className="me-1 fa fa-shopping-basket"></i> Add to cart{" "}
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default EngineerView;
