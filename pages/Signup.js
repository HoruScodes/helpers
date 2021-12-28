import Footer from "../src/components/Footers";
import Navbar from "../components/Navbar";
import Shell from "../components/Shell";
import SignupComponent from "./Signup";

const login = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Shell>
          <SignupComponent />
        </Shell>
      </main>
      <Footer />
    </div>
  );
};

export default login;
