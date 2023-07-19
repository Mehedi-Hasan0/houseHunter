// import { toast } from "react-hot-toast";
// import api from "../../../../backend";
import { useState } from "react";
import EditHouseDetailsModal from "./EditHouseDetailsModal";

/* eslint-disable react/prop-types */
const HouseListTable = ({ houseList, refetch }) => {
  const [houseDetailForEdit, setHouseDetailForEdit] = useState(null);
  //   const handleHouseDetailEdit = async (houseId) => {
  //     let houseID = { houseId };
  //     try {
  //       const editResponse = await api.patch(
  //         "/auth/edit_house_details",
  //         houseID,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       console.log(editResponse);
  //     } catch (error) {
  //       console.log(error);
  //       toast.error(error);
  //     }
  //   };

  return (
    <section>
      <div className="overflow-x-scroll md:overflow-x-auto max-w-screen">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>House name</th>
              <th>Details</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {houseList &&
              houseList.map((house, i) => {
                return (
                  <>
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={house?.houseImage} alt="House images" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{house?.name}</div>
                            <div className="text-sm opacity-50">
                              {house?.city}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {house?.address}
                        <br />
                        <span className="text-xs">
                          Bedrooms: {house?.bedrooms}, Room size:{" "}
                          {house?.roomSize} sft
                          <br />
                          Available from: {house?.availablityDate}
                          <br />
                          Phone number: {house?.phoneNumber}
                          <br />
                          Rent per month: {house?.rentPerMonth}tk
                        </span>
                      </td>
                      <th>
                        <button
                          className="btn btn-ghost btn-xs"
                          onClick={() => {
                            window.my_modal_4.showModal();
                            setHouseDetailForEdit(house);
                          }}
                        >
                          edit
                        </button>
                      </th>
                      <th>
                        <button className="btn btn-ghost hover:btn-error hover:text-white btn-xs">
                          delete
                        </button>
                      </th>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
      <EditHouseDetailsModal
        houseDefaultValue={houseDetailForEdit}
        refetch={refetch}
      />
    </section>
  );
};

export default HouseListTable;
