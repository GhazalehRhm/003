import { useRef, useState } from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const ref = useRef();



  const random = Math.floor(Math.random() * 100000);
  const navigate = useNavigate();
  const gotToNewPage = () => {
    navigate("/otp", { state: { mobileNumber, random } });
  };

  const handleClick = () => {
    if (
      /^\d*$/.test(ref.current.value) &&
      ref.current.value.length === 11 &&
      ref.current.value.startsWith("09")
    ) {
      console.log(random);
      
      gotToNewPage();
    } else {
      setMessage("عبارت وارد شده معتبر نمیباشد");
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      setMobileNumber(value);
      // Regular expression to match exactly 10 digits
      const regex = /^\d{11}$/;
      if (value.length === 0 || regex.test(value)) {
        setMessage(value.length === 11 ? " " : "");
      } else {
        setMessage("مقدار وارد شده صحیح نمیباشد");
      }
    } else {
      setMessage("عبارت وارد شده معتبر نمیباشد");
    }
  };

  return (
    <>
      <Header />{" "}
      <div className=" m-15 p-10  flex flex-col justify-center ">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <h1 className="font-bold p-5 text-gray-900 text-lg mb-10">
                ورود یا ثبت نام
              </h1>

              <label className=" text-sm mb-5 text-gray-600  pb-1 block">
                برای دریافت مشاوره شماره موبایل خود را وارد کنید
              </label>
              <input
                type="text"
                value={mobileNumber}
                ref={ref}
                onChange={handleInputChange}
                placeholder="شماره تماس"
                className="border-2 mb-2 border-blue-800  rounded-md px-3 py-2 mt-1 align-middle text-sm w-80 "
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
                onClick={handleClick}
                type="button"
                className="transition  mt-10 bg-blue-800 hover:bg-blue-600 focus:bg-blue-700  text-white w-80 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span>دریافت کد تایید</span>
              </button>
            </div>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
