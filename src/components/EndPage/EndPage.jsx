import Header from "../Header/Header";

export const EndPage = () => {
  return (
    <>
      <Header />{" "}
      <div className=" m-15 p-10 min-h-screen flex flex-col justify-center ">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="px-5 py-7">
            <h1 className="font-bold  p-5 text-white text-lg mb-10 text-center">
              خوش آمدید!
            </h1>
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
