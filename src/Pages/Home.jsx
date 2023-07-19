import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import api, { API } from "../../backend";
import BookingModal from "../components/dashboard/houseOwner/BookingModal";

const Home = () => {
  const [allHouses, setAllHouses] = useState(null);
  const [houseId, setHouseId] = useState(null);

  const { data: bookingList, refetch } = useQuery({
    queryKey: ["houseList"],
    queryFn: async () => {
      const response = await api.get("/auth/booking_list");
      return response.data.data;
    },
  });

  console.log(bookingList);

  useEffect(() => {
    async function GetAllHouses() {
      const response = await axios.get(`${API}auth/all_houses_list`);
      setAllHouses(response?.data.data);
    }
    GetAllHouses();
  }, []);
  console.log(allHouses);
  return (
    <main
      className=" max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-5 md:py-9 lg:py-10 2xl:py-14  
     "
    >
      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 sm:gap-6 md:gap-8 lg:gap-10">
        {allHouses &&
          allHouses.map((house, i) => {
            const isIdMatch = bookingList?.some(
              (list) => list.houseId === house._id
            );
            console.log(isIdMatch);
            return (
              <div
                key={i}
                className=" flex flex-col gap-y-3 shadow-md bg-white border border-neutral-200 rounded-2xl relative pb-14"
              >
                <div>
                  <img
                    src={house?.houseImage}
                    alt="House"
                    className="rounded-t-2xl"
                  />
                </div>
                <div className=" flex flex-col gap-y-1 text-sm py-3 px-2 md:pt-3 md:pb-5 md:px-4">
                  <p>
                    <span className="font-medium">Bedrooms:</span>{" "}
                    {house?.bedrooms}, Room size: {house?.roomSize} sft
                  </p>
                  <p>
                    {" "}
                    <span className="font-medium">Available from:</span>{" "}
                    {house?.availablityDate}
                  </p>
                  <p>
                    <span className=" font-medium"> Phone number:</span>{" "}
                    {house?.phoneNumber}
                  </p>
                  <p>
                    <span className=" font-medium"> Rent per month:</span>{" "}
                    {house?.rentPerMonth}tk
                  </p>
                </div>
                <button
                  onClick={() => {
                    setHouseId(house?._id);
                    window.my_modal_1.showModal();
                  }}
                  disabled={isIdMatch}
                  className=" py-3 px-6 md:px-9 absolute bottom-0 right-0 rounded-br-2xl rounded-tl-2xl bg-primary hover:bg-accent duration-300 transition text-white font-medium disabled:bg-[#dddddd] disabled:cursor-not-allowed"
                >
                  {isIdMatch ? (
                    <p className=" text-[#717171] text-sm">Aready booked</p>
                  ) : (
                    "Book"
                  )}
                </button>
              </div>
            );
          })}
      </section>
      <BookingModal houseId={houseId} refetch={refetch} />
    </main>
  );
};

export default Home;
