import { useUser } from "../../App.jsx";

const Header = () => {
  const { state } = useUser();
  return (
    <>
      <nav className="bg-white ">
        <div className="max-w-screen-xl flex flex-wrap mx-auto items-center p-4">
          <a href="#" className="flex items-center ">
            <img src="../images/headerLogo.png" className="h-12" />
          </a>

          <div
            className="hidden w-full md:block  md:w-auto"
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium text-center  items-center  md:space-x-10 md:flex-row  ">
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center p-10  dark:text-gray-500 md:dark:hover:text-gray-700"
                >
                  کشورهای مهاجرت تحصیلی{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar"
                  className="z-10 font-normal bg-white divide-y divide-gray-100 dark:bg-gray-700  ndark:divide-gray-600"
                >
                  <ul
                    className="py-0  text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownLargeButton"
                  ></ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  dark:text-gray-500 md:dark:hover:text-gray-700"
                >
                  خدمات
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex  items-center dark:text-gray-500 md:dark:hover:text-gray-700"
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center dark:text-gray-500 md:dark:hover:text-gray-700"
                >
                  تماس با ما
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center dark:text-gray-500 md:dark:hover:text-gray-700"
                >
                  بلاگ
                </a>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="py-2.5 px-5 text-sm font-medium  rounded-lg border border-blue-800 hover:border-blue-900 dark:focus:ring-blue-800 dark:text-blue-700 dark:border-blue-700  "
          >
            {state || "ورود / ثبت نام"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
