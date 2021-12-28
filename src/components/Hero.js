import Button from "./Button";
import Shell from "./Shell";

const Hero = () => {
  return (
    <Shell>
      <div className="my-10 flex flex-col space-y-8 justify-center items-center">
        <h1 className="font-bold text-[50px] text-gray-700 max-w-2xl text-center font-jakarta">
          The One Link for All Your Links
        </h1>
        <p className="text-center text-gray-400 text-xl max-w-[600px]">
          Easily share your portfolio to others ,It’s free, and takes less than
          a minute.
        </p>
        <div className="flex border-2 border-indigo-700 overflow-hidden rounded-lg z-10 xs:text-14 xs:h-48">
          <div className="flex flex-col justify-center">
            <div className="pl-10 font-jakarta font-normal text-lg text-left leading-17 xs:text-14 text-gray-900">
              mybio.ca/
            </div>
          </div>{" "}
          <input
            name="link"
            placeholder="name"
            className="h-12 text-black font-light font-jakarta placeholder-grey text-14 sm:text-lg w-125p sm:w-200p bg_landing"
            type="text"
          />{" "}
          <div className="cursor-pointer bg_trans">
            <a href="https://app.bio.link/signup">
              <Button className="font-semibold text-white w-[125px] tracking-widest sm:w-auto rounded-r-md px-24 xs:px-0">
                Claim My Link
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default Hero;
