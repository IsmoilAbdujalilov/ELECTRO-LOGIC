import { DELETE_DATAS } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const state = JSON.parse(localStorage.getItem("data") as string) || [];
  const store = useSelector((state: any) => state.reducer.data);

  const deleteEl = (id: number) => {
    const deleteItem = store.filter((el: any) => el.id !== id);
    localStorage.setItem("data", JSON.stringify(deleteItem));
    dispatch(DELETE_DATAS(deleteItem));
  };

  console.log(store);

  return (
    <section className="cart py-5">
      <div className="container">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Score</th>
              <th>Image</th>
              <th>Title</th>
              <th>Name</th>
              <th>Delete</th>
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
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cart;
