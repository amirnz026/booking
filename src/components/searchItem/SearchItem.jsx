import "./searchItem.css";
import image01 from "../../images/image-01.webp";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src={image01} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">آپارتمان یک خوابه آذربایجان ۵</h1>
        <span className="siDistance">۷۵۰ متر بنا</span>
        <span className="siTaxiOp">تاکسی رایگان از فرودگاه</span>
        <span className="siSubtitle">اتاقک کوچه همراه با تسویه هوا</span>
        <span className="siFeatures">
          کل اتاق، 1 سرویس بهداشتی، 2 اتاق خواب
        </span>
        <span className="siCancelOp">لغو رایگان</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>عملکرد عالی</span>
          <button>۸.۹</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">شبی ۲,۰۰۰,۰۰۰ تومان</span>
          <span className="siTaxOp">به همراه مالیات</span>
          <button className="siCheckButton">بررسی موجود بودن</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
