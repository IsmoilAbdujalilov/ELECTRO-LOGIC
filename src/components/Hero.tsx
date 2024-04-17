import { BackgroundVideo } from "../assets/videos";

const Hero = () => {
  return (
    <div id="intro" className="bg-image vh-100 shadow-1-strong">
      <video
        style={{ minWidth: "100%", minHeight: "40%" }}
        playsInline
        autoPlay
        muted
        loop
      >
        <source className="h-25" src={BackgroundVideo} type="video/mp4" />
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
            <h1 className="mb-3 w-75 mx-auto">
              Логическое решение в сфере электротехники, электромонтажных работ,
              производство НКУ
            </h1>
            <p
              className="w-50 mx-auto"
              style={{ fontSize: "25px", lineHeight: "35px" }}
            >
              Работаем с промышленными предприятиями, учреждениями в сфере
              здравоохранения и сельского хозяйства, электро­монтажными и
              строительными организациями
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
