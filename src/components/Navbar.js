import Button from "./Button";
import Shell from "./Shell";

const Navbar = () => {

  
  return (
    <Shell>
      <nav className="flex justify-between items-center font-jakarta">
        <h1 className="uppercase font-bold tracking-widest text-xl cursor-pointer hover:text-gray-500 transition-all">
          myBio
        </h1>
        <ul className="flex space-x-[32px] tracking-wide  text-gray-800 text-lg">
          <li className="hover:text-indigo-500 cursor-pointer transition-all">
            Solutions
          </li>
          <li className="hover:text-indigo-500 cursor-pointer transition-all">
            Team
          </li>
          <li className="hover:text-indigo-500 cursor-pointer transition-all">
            Blog
          </li>
        </ul>
        {/* <div className="space-x-3">
          <Button>Login</Button> */}
        <a href="https://app.bio.link/signup">
          <Button>Sign Up</Button>
        </a>
        {/* </div> */}
      </nav>
      {/* <h1 className="font-bold text-[50px] text-gray-700 font-jakarta">
        Understand talent and unlock their potential
      </h1> */}
    </Shell>
  );
};

export default Navbar;
