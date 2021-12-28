const Button = ({ children }) => {
  return (
    <button
      className={`bg-indigo-600 text-white rounded-md p-3 hover:bg-indigo-800 hover:text-white transition-all`}
    >
      {children}
    </button>
  );
};

export default Button;
