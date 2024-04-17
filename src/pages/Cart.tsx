import { addDoc, collection } from "firebase/firestore";
import { DELETE_DATAS } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebaseConfig";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const state = JSON.parse(localStorage.getItem("data") as string) || [];
  const store = useSelector((state: any) => state.reducer.data);

  const deleteEl = (id: number) => {
    const deleteItem = store.filter((el: any) => el.id !== id);
    localStorage.setItem("data", JSON.stringify(deleteItem));
    dispatch(DELETE_DATAS(deleteItem));
  };

  const { email } = JSON.parse(localStorage.getItem("token") as string);

  console.log(email);

  const dbRef = collection(db, "admin");

  const sendToAdmin = async () => {
    const addData = await addDoc(dbRef, { email, data: JSON.stringify(state) });
    if (addData) {
      toast.success("Винформация отправлена ​​администратору", {
        autoClose: 2000,
        draggable: true,
        pauseOnHover: false,
        position: "top-right",
      });
      localStorage.setItem("data", JSON.stringify([]));
      dispatch(DELETE_DATAS([]));
    } else {
      toast.error("Данные не отправлены администратору", {
        autoClose: 2000,
        draggable: true,
        pauseOnHover: false,
        position: "top-right",
      });
    }
  };

  return (
    <section className="cart py-5">
      <ToastContainer />
      <div className="container">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Счет</th>
              <th>Изображение</th>
              <th>Заголовок</th>
              <th>Имя</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            {state.length > 0 &&
              state.map((el: any, index: number) => {
                return (
                  <tr key={el.id}>
                    <td>
                      <p className="fs-normal mb-1">{index + 1}</p>
                    </td>

                    <td>
                      <img
                        width={45}
                        height={45}
                        src={el.image}
                        className="rounded-circle"
                        style={{ width: "45px", height: "45px" }}
                      />
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{el.title}</p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{el.name}</p>
                    </td>

                    <td>
                      <button
                        type="button"
                        data-mdb-ripple-color="dark"
                        onClick={() => deleteEl(el.id)}
                        className="btn btn-danger btn-rounded btn-sm fw-bold"
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {store.length > 0 && (
          <div className="d-flex justify-content-end py-3">
            <button
              onClick={() => sendToAdmin()}
              className="btn btn-primary"
              type="button"
            >
              Отправить администратору
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
