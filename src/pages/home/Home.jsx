import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import ResNavbar from "../../components/navbar/ResNavbar";

const Home = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="block md:hidden">
        <ResNavbar />
      </div>
      <Header />

      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">جستجو بر اساس نوع</h1>
        <PropertyList />
        <h1 className="homeTitle">اقامتگاه های محبوب</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
