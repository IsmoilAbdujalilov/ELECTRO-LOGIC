function App() {
  return (
    <div id="intro" className="bg-image vh-100 shadow-1-strong">
      <video
        style={{ minWidth: "100%", minHeight: "40%" }}
        playsInline
        autoPlay
        muted
        loop
      >
        <source
          className="h-25"
          src="https://mdbootstrap.com/img/video/Lines.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="mask"
        style={{
          background: `linear-gradient(
            45deg,
            rgba(29, 236, 197, 0.7),
            rgba(91, 14, 214, 0.7) 100%
            )`,
        }}
      >
        <div className="container d-flex align-items-center justify-content-center text-center h-100">
          <div className="text-white" data-mdb-theme="dark">
            <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
            <h5 className="mb-4">Best & free guide of responsive web design</h5>
            <a
              className="btn btn-outline-light btn-lg m-2"
              data-mdb-ripple-init
              href="https://www.youtube.com/watch?v=c9B4TPnak1A"
              role="button"
              rel="nofollow"
              target="_blank"
            >
              Start tutorial
            </a>
            <a
              className="btn btn-outline-light btn-lg m-2"
              data-mdb-ripple-init
              href="https://mdbootstrap.com/docs/standard/"
              target="_blank"
              role="button"
            >
              Download MDB UI KIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
