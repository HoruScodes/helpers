import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";

const LoginComponent = () => {
  return (
    <section
      id="Login"
      className="flex pt-[5vh] pb-[13vh] justify-between flex-wrap "
    >
      <section className="flex items-center justify-center flex-grow">
        <div>
          <h1 className="font-jakarta text-5xl font-semibold text-gray-600 m-0">
            <label className="text-indigo-500"> Login </label>
            <br />
            <span> to your account</span>
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
              Login
            </button>
          </div>
          <div className="flex flex-col">
            <Link href="/login">
              <a className="px-6 font-normal cursor-pointer font-jakarta text-sm  text-gray-900 text-center hover:border-b-2 hover:border-indigo-600 transition-all ">
                {" "}
                Already have an account? Login
              </a>
            </Link>
          </div>
        </form>
      </section>
    </section>
  );
};

export default LoginComponent;
