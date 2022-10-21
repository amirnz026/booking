import "./propertyList.css";
import image01 from "../../images/image-01.webp";
import image02 from "../../images/image-02.webp";
import image03 from "../../images/image-03.webp";

const propertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={image01} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h1>233 hotels</h1>
        </div>
      </div>
      <div className="pListItem">
        <img src={image01} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h1>2331 hotels</h1>
        </div>
      </div>
      <div className="pListItem">
        <img src={image01} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h1>233 hotels</h1>
        </div>
      </div>
      <div className="pListItem">
        <img src={image01} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h1>2331 hotels</h1>
        </div>
      </div>
      <div className="pListItem">
        <img src={image01} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h1>2331 hotels</h1>
        </div>
      </div>
    </div>
  );
};

export default propertyList;
