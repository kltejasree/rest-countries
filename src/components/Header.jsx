import { IoMoonOutline } from "react-icons/io5";

const Header = ({darkMode, toggleDarkMode}) => {


  return (
    <header
      className="flex items-center justify-between px-9 py-5 bg-white  dark:bg-gray-800 dark:text-white"
    >
      <span className="font-bold text-xl">Where in the world?</span>

      <button
        type="button"
        onClick={toggleDarkMode}
        className="flex gap-2 items-center font-semibold"
      >
        <IoMoonOutline />
        Dark Mode
      </button>
    </header>
  );
};

export default Header;