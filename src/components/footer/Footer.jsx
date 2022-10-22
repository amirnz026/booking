import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList mt-3">
          <li className="fListItem">نحوه رزرو اقامتگاه</li>
          <li className="fListItem">خدمات مشتریان</li>
          <li className="fListItem">راهنمای رزرو اقامتگاه</li>
          <li className="fListItem">شیوه‌های پرداخت</li>
          <li className="fListItem">لغو رزرو</li>
          <li className="fListItem">تماس با ما</li>
        </ul>
      </div>
      <div className="fText text-center ">
        Copyright &copy; 2022 <span className="copyRightText">ReserveFa</span>.
      </div>
    </div>
  );
};

export default Footer;
