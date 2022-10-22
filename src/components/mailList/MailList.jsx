import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">در وقت و هزینه خود صرفه جویی کنید!</h1>
      <span className="mailDesc">
        همین الان ثبت نام کنید تا از آخرین اخبار با خبر باشید
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="ایمیل خود را وارد کنید" />
        <button>ثبت نام</button>
      </div>
    </div>
  );
};

export default MailList;
