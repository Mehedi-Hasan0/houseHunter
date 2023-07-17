import { Link } from "react-router-dom";
import logo from "../../assets/house-hunter-logo.png";

const Navbar = () => {
  return (
    <nav className=" max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-2 md:py-3 2xl:py-4 border-b border-neutral-200 shadow sticky top-0">
      <div className=" flex flex-row justify-between items-center gap-3 md:gap-0">
        <div className=" flex flex-row gap-2 items-center flex-1">
          <img src={logo} alt="Logo" className=" w-7 md:w-9 2xl:w-11" />
          <Link
            to="/"
            className=" text-textColor text-sm md:text-lg 2xl:text-2xl font-medium"
          >
            House Hunter
          </Link>
        </div>
        <div>
          <Link to="/register">
            <button className=" py-2 px-3 rounded-md bg-primary hover:bg-accent duration-300 transition text-white font-medium">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
