const SignupComponent = () => {
  return (
    <section
      id="Login"
      className="flex pt-[5vh] pb-[13vh] justify-between flex-wrap "
    >
      <section className="flex items-center justify-center flex-grow">
        <div>
          <h1 className="font-jakarta text-5xl font-semibold text-gray-600 m-0">
            Let's
            <label className="text-indigo-500"> Create </label>
            <br />
            <span> your account</span>
            {/* center a login form with button */}
          </h1>
        </div>
      </section>

      <section className="flex items-center justify-center flex-grow  w-[30%]">
        <form className="bg-gray-300 max-w-full px-8 py-16 rounded-2xl w-full">
          <div className="flex flex-col mb-8">
            <label className="font-jakarta font-semibold mb-2">Email:</label>
            <input
              className="outline-none bg-none border p-2 rounded-[5px] focus:bg-gray-200"
              type="email"
            ></input>
          </div>
          <div className="flex flex-col mb-8 font-jakarta ">
            <label className="font-jakarta font-semibold mb-2">Link:</label>
            <div className="relative">
              <div className="top-2 left-4 bl-input-prefix text-14 text-gray-600 font-normal absolute">
                mybio.ca/
              </div>
              <input
                className="outline-none overflow-hidden bg-none border pl-24 p-2  w-full rounded-[5px] focus:bg-gray-200"
                type="email"
              ></input>
            </div>
          </div>
          <div className="flex flex-col mb-8">
            <label className="font-jakarta font-semibold mb-2">Password:</label>
            <input
              className="outline-none bg-none border p-2 rounded-[5px] focus:bg-gray-200"
              type="password"
            ></input>
          </div>
          <div className="flex flex-col mb-8">
            <button
              className="bg-indigo-500 py-3 px-6 rounded-lg cursor-pointer font-jakarta text-sm font-semibold text-white"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="flex flex-col">
            <a href="/signup">
              <a className="px-6 font-normal cursor-pointer font-jakarta text-sm  text-gray-900 text-center hover:border-b-2 hover:border-indigo-600 transition-all ">
                {" "}
                Don't have an account? Join here
              </a>
            </a>
          </div>
        </form>
      </section>
    </section>
  );
};

export default SignupComponent;
