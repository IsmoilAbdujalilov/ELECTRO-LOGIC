import { posts } from "../data/posts";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PostsView = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  type typePosts = {
    id: number;
    date: string;
    name: string;
    image: string;
    author: string;
    authorImage: string;
    description: string;
  };

  const [postData, setPostData] = useState<typePosts[]>([]);

  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      const fetchData = () => {
        return new Promise((resolve, reject) => {
          return posts.filter((el: typePosts) => {
            if (el.id === Number(id)) {
              resolve(el);
              setPostData([el]);
            } else {
              reject(false);
            }
          });
        });
      };
      fetchData()
        .then((data: any) => {
          setPostData([data]);
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
  }, [id]);

  return (
    <div style={{ position: "relative" }} className="pt-5">
      <div className="container">
        <nav aria-label="breadcrumb" className="py-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Post View
            </li>
          </ol>
        </nav>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <section draggable="false">
            {postData.length > 0 &&
              postData.map((el: typePosts) => {
                return (
                  <section className="mb-10">
                    {" "}
                    <img
                      src={el.image}
                      className="img-fluid shadow-1-strong rounded-5 mb-4"
                      alt=""
                      data-builder-edit="image"
                      data-builder-name="image1"
                      aria-controls="#picker-editor"
                      draggable="false"
                    />{" "}
                    <div className="row align-items-center mb-4">
                      <div className="col-lg-7">
                        <img
                          src={el.authorImage}
                          className="rounded-circle me-2"
                          height="35"
                          alt=""
                          loading="lazy"
                          data-builder-edit="image"
                          data-builder-name="image2"
                          aria-controls="#picker-editor"
                          draggable="false"
                        />
                        <span>
                          {" "}
                          Published{" "}
                          <u data-builder-edit="text" data-builder-name="text1">
                            15.07.2020
                          </u>{" "}
                          by
                        </span>{" "}
                        <span
                          className="text-dark"
                          data-builder-edit="text"
                          data-builder-href="https://mdb-builder.com/"
                          aria-controls="#picker-editor"
                          draggable="false"
                        >
                          {el.author}
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <h2
                      className="fw-bold mb-4"
                      data-builder-edit="text"
                      data-builder-name="text2"
                    >
                      {el.name}
                    </h2>{" "}
                    <p data-builder-edit="text" data-builder-name="text3">
                      {el.description}
                    </p>{" "}
                  </section>
                );
              })}
          </section>
        )}
      </div>
    </div>
  );
};

export default PostsView;
