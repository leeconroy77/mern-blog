import Footer from "./Footer";
import NavBar from "./NavBar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
