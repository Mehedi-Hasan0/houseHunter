import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/house-hunter-logo.png";
import { getUser, userLogOut } from "../../redux/actions/userActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userDetails);

  useEffect(() => {
    dispatch(getUser());
    console.log("user data");
  }, []);

  const hadnleLogout = () => {
    dispatch(userLogOut());
  };
  return (
    <nav className=" max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-2 md:py-3 2xl:py-4 border-b border-neutral-200 shadow sticky top-0 bg-bgColor">
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
        <div className=" flex flex-row gap-4">
          {user ? (
            <div className=" flex flex-row items-center gap-5">
              <p className=" text-textColor hover:px-3 hover:py-1 hover:bg-secondary rounded-full">
                Dashboard
              </p>
              <Link to="/register">
                <button
                  onClick={hadnleLogout}
                  className=" py-2 px-3 rounded-md bg-primary hover:bg-accent duration-300 transition text-white font-medium"
                >
                  Log out
                </button>
              </Link>
            </div>
          ) : (
            <>
              <Link to="/register">
                <button className=" py-2 px-3 rounded-md bg-primary hover:bg-accent duration-300 transition text-white font-medium">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className=" py-2 px-3 rounded-md border border-primary hover:bg-accent hover:text-white duration-300 transition text-textColor font-medium">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
