import { useState } from "react";
import { useForm } from "react-hook-form";

import errorIcon from "../../../assets/errorIcon.png";

const NewHouseModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [image, setImage] = useState(null);

  const handleHouseInfo = (data) => {
    console.log(data);
  };

  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form
          method="dialog"
          className="modal-box"
          onSubmit={handleSubmit(handleHouseInfo)}
        >
          <h3 className="font-bold text-lg flex justify-center">
            Give house information below!
          </h3>
          {/* House information iput */}
          <div className=" my-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="House name"
                className="input input-bordered w-full"
                {...register("name", {
                  required: true,
                })}
              />
              {errors.name && (
                <div
                  role="alert"
                  className=" flex flex-row items-center gap-2 mt-1"
                >
                  <img
                    src={errorIcon}
                    alt="Last name is requires"
                    className="w-5"
                  />
                  <p className="text-xs text-[#c13515]">Name is required</p>
                </div>
              )}
            </div>
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="House address"
                className="input input-bordered w-full"
                {...register("address", {
                  required: true,
                })}
              />
              {errors.address && (
                <div
                  role="alert"
                  className=" flex flex-row items-center gap-2 mt-1"
                >
                  <img
                    src={errorIcon}
                    alt="Last name is requires"
                    className="w-5"
                  />
                  <p className="text-xs text-[#c13515]">Address is required</p>
                </div>
              )}
            </div>
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <input
                type="text"
                placeholder="City"
                className="input input-bordered w-full"
                {...register("city", {
                  required: true,
                })}
              />
              {errors.city && (
                <div
                  role="alert"
                  className=" flex flex-row items-center gap-2 mt-1"
                >
                  <img
                    src={errorIcon}
                    alt="Last name is requires"
                    className="w-5"
                  />
                  <p className="text-xs text-[#c13515]">City is required</p>
                </div>
              )}
            </div>
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text">Bedrooms</span>
              </label>
              <input
                type="text"
                placeholder="Bedrooms"
                className="input input-bordered w-full"
                {...register("bedrooms", {
                  required: true,
                })}
              />
              {errors.bedrooms && (
                <div
                  role="alert"
                  className=" flex flex-row items-center gap-2 mt-1"
                >
                  <img
                    src={errorIcon}
                    alt="Last name is requires"
                    className="w-5"
                  />
                  <p className="text-xs text-[#c13515]">Bedrooms is required</p>
                </div>
              )}
            </div>
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text">Bathrooms</span>
              </label>
              <input
                type="text"
                placeholder="Bathrooms"
                className="input input-bordered w-full"
                {...register("bathrooms", {
                  required: true,
                })}
              />
              {errors.bathrooms && (
                <div
                  role="alert"
                  className=" flex flex-row items-center gap-2 mt-1"
                >
                  <img
                    src={errorIcon}
                    alt="Last name is requires"
                    className="w-5"
                  />
                  <p className="text-xs text-[#c13515]">
                    Bathrooms is required
                  </p>
                </div>
              )}
            </div>
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text">Room size</span>
              </label>
              <input
                type="text"
                placeholder="Room size"
                className="input input-bordered w-full"
                {...register("roomSize", {
                  required: true,
                })}
              />
              {errors.roomSize && (
                <div
                  role="alert"
                  className=" flex flex-row items-center gap-2 mt-1"
                >
                  <img
                    src={errorIcon}
                    alt="Last name is requires"
                    className="w-5"
                  />
                  <p className="text-xs text-[#c13515]">This is required</p>
                </div>
              )}
            </div>
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text">Picture</span>
              </label>
              <input
                type="file"
                id="image-input"
                placeholder="House image"
                className=" hidden"
                {...register("houseImage", {
                  required: true,
                })}
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                accept=".jpg,.jpeg,.png,image/jpeg,image/jpg,image/png"
              />
              <div className=" w-full p-3 border border-[#d2d4d7] rounded-lg text-[#9ca3af]">
                <label
                  htmlFor="image-input"
                  className=" cursor-pointer block w-full"
                >
                  {image ? (
                    <p className=" text-textColor">{image?.name}</p>
                  ) : (
                    "Choose image"
                  )}
                </label>
              </div>
              {errors.houseImage && (
                <div
                  role="alert"
                  className=" flex flex-row items-center gap-2 mt-1"
                >
                  <img
                    src={errorIcon}
                    alt="Last name is requires"
                    className="w-5"
                  />
                  <p className="text-xs text-[#c13515]">This is required</p>
                </div>
              )}
            </div>
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text">Availablity date</span>
              </label>
              <input
                type="date"
                placeholder="Availablity date"
                className="input input-bordered w-full"
                {...register("availablityDate", {
                  required: true,
                })}
              />
              {errors.availablityDate && (
                <div
                  role="alert"
                  className=" flex flex-row items-center gap-2 mt-1"
                >
                  <img
                    src={errorIcon}
                    alt="Last name is requires"
                    className="w-5"
                  />
                  <p className="text-xs text-[#c13515]">This is required</p>
                </div>
              )}
            </div>
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text">Rent per month</span>
              </label>
              <input
                type="number"
                placeholder="Rent per month in tk"
                className="input input-bordered w-full"
                {...register("rentPerMonth", { required: true })}
              />
              {errors.rentPerMonth && (
                <div
                  role="alert"
                  className=" flex flex-row items-center gap-2 mt-1"
                >
                  <img
                    src={errorIcon}
                    alt="Last name is requires"
                    className="w-5"
                  />
                  <p className="text-xs text-[#c13515]">This is required</p>
                </div>
              )}
            </div>
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text">Phone number</span>
              </label>
              <input
                type="number"
                placeholder="Your phone number"
                className="input input-bordered w-full"
                {...register("phoneNumber", { required: true, maxLength: 11 })}
              />
              {errors.phoneNumber && (
                <div
                  role="alert"
                  className=" flex flex-row items-center gap-2 mt-1"
                >
                  <img
                    src={errorIcon}
                    alt="Last name is requires"
                    className="w-5"
                  />
                  <p className="text-xs text-[#c13515]">
                    Give a valid phone number
                  </p>
                </div>
              )}
            </div>
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Discription"
                className="input input-bordered w-full"
                {...register("discription", {
                  required: true,
                })}
              />
              {errors.discription && (
                <div
                  role="alert"
                  className=" flex flex-row items-center gap-2 mt-1"
                >
                  <img
                    src={errorIcon}
                    alt="Last name is requires"
                    className="w-5"
                  />
                  <p className="text-xs text-[#c13515]">This is required</p>
                </div>
              )}
            </div>
          </div>

          {/* submit button */}
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
        {/* close button */}
        <form
          method="dialog"
          className="modal-backdrop"
          onClick={() => {
            reset();
            setImage(null);
          }}
        >
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default NewHouseModal;
