import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPerson,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {openDate && (
          <div className="dateRangeContainer">
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            />
            <AiFillCloseCircle
              className="closeBtn"
              onClick={() => {
                setOpenDate(false);
              }}
            />
          </div>
        )}

        {openOptions && (
          <div className="optionsWrapper">
            <div className="options">
              <div className="optionItem">
                <span className="optionText">بزرگسال</span>
                <div className="optionCounter">
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    disabled={options.adult <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">کودک</span>
                <div className="optionCounter">
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    disabled={options.children <= 0}
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">اتاق</span>
                <div className="optionCounter">
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    disabled={options.room <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>

            <AiFillCloseCircle
              className="closeBtn"
              onClick={() => setOpenOptions(false)}
            />
          </div>
        )}

        <div className="headerWrapper"></div>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>اقامت</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>اقامت</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>اقامت</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>اقامت</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>اقامت</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">با یه تخفیف مادام العمر چی؟</h1>
            <p className="headerDesc">
              با هر سفر جایزه دریافت کنید - با افتتاح اکانت در رزروفا، ۱۰ %
              تخفیف مادام العمر دریافت کنید
            </p>
            <button className="headerBtn smHide">ورود | ثبت نام</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="کجا می روید؟"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => {
                    setOpenDate((prev) => !prev);
                    setOpenOptions(false);
                  }}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} تا ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )} `}</span>
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => {
                    setOpenOptions((prev) => !prev);
                    setOpenDate(false);
                  }}
                  className="headerSearchText"
                >{`${options.adult} بزرگسال . ${options.children} کودک . ${options.room} اتاق`}</span>
              </div>
              <div className="headerSearchItem smSearchBtnItem">
                <button className="headerBtn" onClick={handleSearch}>
                  جستجو
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
