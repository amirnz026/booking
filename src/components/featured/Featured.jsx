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
          <h1>رامسر</h1>
          <h2>۳۰۸ اقامتگاه</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={image02} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>بندر انزلی</h1>
          <h2>۵۳۲ اقامتگاه</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={image03} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>ماسال</h1>
          <h2>۵۳۳ اقامتگاه</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={image02} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>بندر انزلی</h1>
          <h2>۵۳۲ اقامتگاه</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={image01} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>رامسر</h1>
          <h2>۳۰۸ اقامتگاه</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
