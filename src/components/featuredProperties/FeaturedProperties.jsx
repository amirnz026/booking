import "./FeaturedProperties.css";
import image01 from "../../images/image-01.webp";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src={image01} alt="" className="fpImg" />
        <span className="fpName">ویلا دوخوابه باغ ادریسی</span>
        <span className="fpCity">مازندران، رامسر</span>
        <span className="fpPrice">۱,۰۰۰,۰۰۰ تومان / هر شب</span>
        <div className="fpRating">
          <button>۸.۳</button>
          <span>عملکرد عالی</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={image01} alt="" className="fpImg" />
        <span className="fpName">اقامتگاه سنتی بوتیک شهرزاد واحد دو تخته</span>
        <span className="fpCity">یزد، یزد</span>
        <span className="fpPrice">۱,۰۰۰,۰۰۰ تومان / هر شب</span>
        <div className="fpRating">
          <button>۸.۳</button>
          <span>عملکرد عالی</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={image01} alt="" className="fpImg" />
        <span className="fpName">ویلا یک خوابه افشین 2</span>
        <span className="fpCity">گیلان، رشت</span>
        <span className="fpPrice">۱,۰۰۰,۰۰۰ تومان / هر شب</span>
        <div className="fpRating">
          <button>۸.۳</button>
          <span>عملکرد عالی</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={image01} alt="" className="fpImg" />
        <span className="fpName">آپارتمان یک خوابه شهر زیبا واحد 1</span>
        <span className="fpCity">تهران، تهران</span>
        <span className="fpPrice">۱,۰۰۰,۰۰۰ تومان / هر شب</span>
        <div className="fpRating">
          <button>۸.۳</button>
          <span>عملکرد عالی</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={image01} alt="" className="fpImg" />
        <span className="fpName">ویلا دوخوابه باغ ادریسی</span>
        <span className="fpCity">مازندران، رامسر</span>
        <span className="fpPrice">۱,۰۰۰,۰۰۰ تومان / هر شب</span>
        <div className="fpRating">
          <button>۸.۳</button>
          <span>عملکرد عالی</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={image01} alt="" className="fpImg" />
        <span className="fpName">اقامتگاه سنتی بوتیک شهرزاد واحد دو تخته</span>
        <span className="fpCity">یزد، یزد</span>
        <span className="fpPrice">۱,۰۰۰,۰۰۰ تومان / هر شب</span>
        <div className="fpRating">
          <button>۸.۳</button>
          <span>عملکرد عالی</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
