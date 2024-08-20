import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header.jsx";
import { useRef, useState } from "react";
import { useUser } from "../../App.jsx";


const Otp = () => {
  const { setState } = useUser();
  const [message, setMessage] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  const gotToNewPage = () => {
    navigate("/");
  };
  const gotToEndPage = () => {
    navigate("/endPage");
  };

  const ref = useRef();

  const handleEndClick = () => {
    if (ref.current.value == state.random) {
      setState(state.mobileNumber);
      gotToEndPage();

    } else setMessage("مقدار وارد شده صحیح نمیباشد");
  };
  const handleClick = () => {
    gotToNewPage();
  };

  return (
    <>
      <Header />{" "}
      <div className=" m-15 p-10 min-h-screen flex flex-col justify-center ">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <h1 className="font-bold  p-5 text-gray-900 text-lg mb-10">
                کد تایید را وارد کنید
              </h1>
              <label className=" text-sm mb-5 text-gray-600  pb-1 block">
                کد تایید پیامک شده به شماره {state.mobileNumber} را وارد کنید.{" "}
              </label>
              <label
                onClick={handleClick}
                className=" text-sm mb-5 text-blue-800  pb-1 block"
              >
                ویرایش شماره{" "}
              </label>
              <input
                type="text"
                className="border-2 mb-10 border-blue-800  rounded-md px-3 py-2 mt-1 align-middle text-sm w-80"
                placeholder="کد تایید"
                ref={ref}
              />
              {message && (
                <p
                  className="mb-20 text-sm"
                  style={{
                    color: message === " " ? "green" : "red",
                  }}
                >
                  {message}
                </p>
              )}
              <button
                onClick={handleEndClick}
                type="button"
                className="transition bg-blue-800 hover:bg-blue-600 focus:bg-blue-700  text-white w-80 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span>تایید</span>
              </button>
            </div>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
