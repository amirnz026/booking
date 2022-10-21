import "./featured.css";
import image01 from "../../images/image-01.webp";
import image02 from "../../images/image-02.webp";
import image03 from "../../images/image-03.webp";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={image01} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={image02} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={image03} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
