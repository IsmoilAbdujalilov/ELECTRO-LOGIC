const User = () => {
  return (
    <div className="container">
      <h1 className="h5 text-center py-5 mb-0">User profile</h1>
      <section style={{ marginBottom: "75px" }}>
        <div className="row">
          <div className="col-md-8 mb-4 mb-md-0">
            <div className="card mb-4">
              <div className="card-header card-header py-3">
                <strong>Edit profile</strong>
              </div>
              <div className="card-body text-center">
                <div className="mb-3">
                  <strong>Profile photo</strong>
                </div>
                <form action="">
                  <div className="d-flex justify-content-center mb-4">
                    <div className="file-upload-wrapper">
                      <div className="file-upload">
                        <div className="file-upload-message">
                          <i className="fas fa-cloud-upload-alt file-upload-cloud-icon"></i>
                          <p className="file-upload-default-message">
                            Drag and drop a file here or click
                          </p>
                          <p className="file-upload-main-error"></p>
                        </div>
                        <div className="file-upload-mask"></div>
                        <ul className="file-upload-errors"></ul>
                        <input
                          accept=""
                          type="file"
                          className="file-upload-input"
                        />
                        <div className="file-upload-previews">
                          <div className="file-upload-preview">
                            <div className="file-upload-render">
                              <img
                                src="https://mdbootstrap.com/img/new/avatars/1.jpg"
                                alt=""
                                className="file-upload-preview-img"
                              />
                            </div>
                            <div className="file-upload-preview-details">
                              <div className="file-upload-details-container">
                                <div className="file-uplod-preview-details-inner">
                                  <p className="file-upload-file-name">1.jpg</p>
                                  <p className="file-upload-preview-message">
                                    Drag and drop or click to replace
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-outline">
                    <input
                      className="form-control active mb-4"
                      value="John Doe"
                    />
                    <label className="form-label">Name</label>
                    <div className="form-notch">
                      <div className="form-notch-leading"></div>
                      <div
                        className="form-notch-middle"
                        style={{ width: "41.6px" }}
                      ></div>
                      <div className="form-notch-trailing"></div>
                    </div>
                  </div>
                  <div className="form-outline">
                    <input
                      className="form-control active mb-4"
                      type="email"
                      value="johndoe@gmail.com"
                    />
                    <label className="form-label">Email</label>
                    <div className="form-notch">
                      <div className="form-notch-leading"></div>
                      <div
                        className="form-notch-middle"
                        style={{ width: "40px" }}
                      ></div>
                      <div className="form-notch-trailing"></div>
                    </div>
                  </div>
                  <div className="form-outline">
                    <input
                      className="form-control active mb-4"
                      value="Founder"
                    />
                    <label className="form-label">Jobs</label>
                    <div className="form-notch">
                      <div className="form-notch-leading"></div>
                      <div
                        className="form-notch-middle"
                        style={{ width: "41.6px" }}
                      ></div>
                      <div className="form-notch-trailing"></div>
                    </div>
                  </div>
                  <div className="form-outline">
                    <textarea
                      rows={4}
                      value={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iusto ullam nihil impedit. Porro minus nemo nobis maiores
                      numquam tempora architecto a, nisi consectetur, expedita
                      illum, debitis aliquam incidunt molestias eveniet.{" "}`}
                      className="form-control active mb-4"
                    ></textarea>
                    <label className="form-label">Description</label>
                    <div className="form-notch">
                      <div className="form-notch-leading"></div>
                      <div
                        className="form-notch-middle"
                        style={{ width: "72px" }}
                      ></div>
                      <div className="form-notch-trailing"></div>
                    </div>
                  </div>
                  <button
                    className="ripple ripple-surface btn btn-primary mb-2"
                    type="button"
                    role="button"
                  >
                    Update profile
                  </button>
                </form>
              </div>
            </div>
            <div className="card">
              <div className="card-header py-3">
                <strong>Change password</strong>
              </div>
              <div className="card-body text-center pt-4">
                <form action="">
                  <div className="form-outline">
                    <input className="form-control mb-4" value="" />
                    <label className="form-label">New password</label>
                    <div className="form-notch">
                      <div className="form-notch-leading"></div>
                      <div
                        className="form-notch-middle"
                        style={{ width: "91.2px" }}
                      ></div>
                      <div className="form-notch-trailing"></div>
                    </div>
                  </div>
                  <div className="form-outline">
                    <input className="form-control mb-4" value="" />
                    <label className="form-label">Confirm password</label>
                    <div className="form-notch">
                      <div className="form-notch-leading"></div>
                      <div
                        className="form-notch-middle"
                        style={{ width: "111.2px" }}
                      ></div>
                      <div className="form-notch-trailing"></div>
                    </div>
                  </div>
                  <button
                    className="ripple ripple-surface btn btn-primary mb-2"
                    type="button"
                    role="button"
                  >
                    Apply
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card card">
              <div className="card-body text-center">
                <img
                  className="rounded-circle shadow-1 mb-3"
                  src="https://mdbootstrap.com/img/new/avatars/1.jpg"
                  alt="avatar"
                  style={{ width: "150px" }}
                />
                <p className="mb-1">
                  <strong>John Doe</strong>
                </p>
                <p className="mb-2">
                  <small>Founder</small>
                </p>
                <p className="mb-2 text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                  deserunt pariatur voluptatem consequuntur! Aliquid, placeat
                  nobis odit delectus ad est, nemo repudiandae possimus
                  repellendus voluptas debitis, numquam modi asperiores beatae?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default User;
