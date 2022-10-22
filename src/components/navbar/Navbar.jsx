import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">رزروفا</span>
        <div className="navItem">
          <button className="navButton">ثبت نام</button>
          <button className="navButton">ورود</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
