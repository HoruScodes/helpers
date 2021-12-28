import Footer from "../src/components/Footer";
import LoginComponent from "./Login";
import Navbar from "../components/Navbar";
import Shell from "../components/Shell";

const login = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Shell>
          <LoginComponent />
        </Shell>
      </main>
      <Footer />
    </div>
  );
};

export default login;
