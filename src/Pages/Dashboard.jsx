import { useSelector } from "react-redux";

const Dashboard = () => {
  const userRole = useSelector((state) => state.user.userDetails.role);
  return (
    <>
      {userRole === "House Owner" ? (
        <p>Owner Dashboard</p>
      ) : (
        <p>Renter Dashboard</p>
      )}
    </>
  );
};

export default Dashboard;
