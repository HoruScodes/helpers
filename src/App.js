import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { useState, useEffect } from "react";
import Profile from "./components/Profile";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

function App() {
  const [profile, setProfile] = useState({
    name: "404",
    bio: "-",
    avatar:
      "https://avatars.githubusercontent.com/u/83689669?s=400&u=e474f2a5eddc2df7877163dc5fdaef5a4b920edb&v=4",
    links: [],
  });

  useEffect(() => {
    fetch("/data/richgang.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log("dsdasdsadasdasdasdas", data);
        setProfile(data);
      });
  }, []);
  return (
    <div className="p-m-4">
      {/* {console.log("here in componentr", profile)} */}
      <Profile data={profile} total={profile.links.length} />
      <Socials links={profile.links} />
      <Footer />
    </div>
  );
}

export default App;
