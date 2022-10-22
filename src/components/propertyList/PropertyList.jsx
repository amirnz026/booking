import "./propertyList.css";
import image01 from "../../images/image-01.webp";
import image02 from "../../images/image-02.webp";
import image03 from "../../images/image-03.webp";
// gap-14 sm:gap-5 md:gap-10 mb-12 justify-between overflow-auto  w-full mx-auto pb-5 sm:mx-0  sm:pb-0  flex  mt-3
const propertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={image01} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>کلبه ها</h1>
          <h2>۵۳۲ هتل</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={image01} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>آپارتمان ها</h1>
          <h2>۳۴۲۳ هتل</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={image01} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>اقامتگاه ها</h1>
          <h2>۵۳۲ هتل</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={image01} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>ویلا ها</h1>
          <h2>۵۴ هتل</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={image01} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>کابین ها</h1>
          <h2>۸۷۴ هتل</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={image01} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>آپارتمان ها</h1>
          <h2>۳۴۲۳ هتل</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={image01} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>کلبه ها</h1>
          <h2>۵۳۲ هتل</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={image01} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>اقامتگاه ها</h1>
          <h2>۵۳۲ هتل</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={image01} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>ویلا ها</h1>
          <h2>۵۴ هتل</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={image01} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>کلبه ها</h1>
          <h2>۵۳۲ هتل</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={image01} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>آپارتمان ها</h1>
          <h2>۳۴۲۳ هتل</h2>
        </div>
      </div>
    </div>
  );
};

export default propertyList;
