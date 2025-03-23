import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        className={`flex justify-center w-full pl-[24px] py-12 xl:pl-0 ${
          isOpen ? "fixed z-60 top-0" : "static"
        }`}
        data-aos={`${isOpen ? "" : "fade-down"}`}
        data-aos-offset="300"
      >
        <div
          id="nav-main"
          className="bg-base border-2 border-primary xl:rounded-[12px] rounded-[8px] xl:w-[1228px] w-[calc(100%-40px)] xl:h-[79px] h-[64px] absolute z-30 xl:-ml-7 -ml-[24px] flex justify-between items-center xl:px-[48px] px-[28px]"
        >
          <div className="flex items-center xl:gap-[16px] gap-[10px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="50"
              viewBox="0 0 49 53"
              fill="none"
              className="fill-secondary -mt-[6px] xl:w-[49px] xl:h-[53px] w-[calc(49px/100*70)] h-[calc(53px/100*70)]"
            >
              <path d="M18.4453 11.8192C17.8201 11.6995 17.2162 12.1092 17.0965 12.7344C16.9768 13.3596 17.3866 13.9634 18.0118 14.0832L18.4453 11.8192ZM24.5054 20.6059L23.5575 21.2616L25.658 24.2984V20.6059H24.5054ZM24.4798 20.5689L25.4277 19.9133L25.4277 19.9133L24.4798 20.5689ZM26.5728 21.5245L25.5006 21.9474L26.582 24.6888L27.6474 21.9412L26.5728 21.5245ZM27.7975 10.6548L26.8621 9.98149L26.8388 10.0138L26.8179 10.0476L27.7975 10.6548ZM35.7585 3L36.7149 2.35681L35.509 0.563727L34.6916 2.56399L35.7585 3ZM35.7585 12.3388L34.7743 11.739L34.7743 11.739L35.7585 12.3388ZM28.0272 17.7737L27.8979 16.6284L27.2047 16.7067L26.9526 17.357L28.0272 17.7737ZM33.3683 11.373C33.765 10.8752 33.683 10.1501 33.1852 9.75339C32.6874 9.3567 31.9623 9.43867 31.5656 9.93649L33.3683 11.373ZM13.8954 20.1461C14.5292 20.0869 14.9951 19.5252 14.9359 18.8914C14.8767 18.2576 14.315 17.7918 13.6812 17.851L13.8954 20.1461ZM2 21.5246L1.01276 20.9298L0.841399 21.2143L0.847646 21.5463L2 21.5246ZM14.7069 24.5865L14.6195 25.7357L14.6292 25.7365L14.639 25.7371L14.7069 24.5865ZM42.0347 23.6679L42.1713 24.8124L42.2249 24.806L42.2777 24.7946L42.0347 23.6679ZM36.8916 17.8477C36.256 17.8132 35.7128 18.3005 35.6783 18.9361C35.6438 19.5717 36.1311 20.1149 36.7667 20.1494L36.8916 17.8477ZM42.0344 40.9677L42.9447 41.6746L42.9852 41.6225L43.0195 41.5661L42.0344 40.9677ZM8.96583 43.5703L8.09639 44.3269L8.10188 44.3332L8.10745 44.3395L8.96583 43.5703ZM18.0118 14.0832C21.0981 14.6742 23.3529 17.057 23.3529 20.6059H25.658C25.658 15.8878 22.5544 12.606 18.4453 11.8192L18.0118 14.0832ZM25.4533 19.9503L25.4277 19.9133L23.5319 21.2245L23.5575 21.2616L25.4533 19.9503ZM25.4277 19.9133C24.3084 18.295 23.753 17.4815 22.5576 16.5001L21.0949 18.2818C22.0069 19.0304 22.3965 19.5831 23.5319 21.2246L25.4277 19.9133ZM26.5728 21.5245C27.6449 21.1016 27.6451 21.102 27.6453 21.1025C27.6453 21.1026 27.6455 21.103 27.6456 21.1032C27.6457 21.1037 27.6459 21.104 27.646 21.1043C27.6462 21.1049 27.6463 21.1051 27.6463 21.1051C27.6462 21.105 27.6457 21.1036 27.6447 21.1009C27.6427 21.0956 27.6388 21.0853 27.6333 21.0701C27.6224 21.0397 27.6049 20.99 27.5828 20.9223C27.5384 20.7868 27.4756 20.5796 27.4087 20.3113C27.2745 19.7736 27.1253 18.997 27.0727 18.0629C26.9674 16.1956 27.2481 13.7289 28.7772 11.262L26.8179 10.0476C24.9783 13.0155 24.6467 15.9837 24.7712 18.1926C24.8334 19.2965 25.0097 20.2183 25.1722 20.8695C25.2536 21.1956 25.3319 21.4556 25.3917 21.6384C25.4216 21.7299 25.4469 21.8023 25.4657 21.8542C25.4751 21.8802 25.4828 21.901 25.4887 21.9166C25.4917 21.9244 25.4942 21.9309 25.4962 21.936C25.4972 21.9386 25.498 21.9409 25.4988 21.9428C25.4991 21.9437 25.4995 21.9446 25.4998 21.9454C25.4999 21.9457 25.5001 21.9463 25.5002 21.9465C25.5004 21.947 25.5006 21.9474 26.5728 21.5245ZM28.733 11.328C28.9712 10.9971 29.4368 10.5725 30.143 10.0214C30.8761 9.44931 31.5916 8.94527 32.4926 8.25505C34.1231 7.00599 36.022 5.40193 36.8254 3.43601L34.6916 2.56399C34.1542 3.87902 32.7612 5.14549 31.0908 6.42516C30.3413 6.99929 29.404 7.67416 28.7249 8.20409C28.0188 8.75505 27.3126 9.35558 26.8621 9.98149L28.733 11.328ZM35.7585 3C34.8021 3.64319 34.8018 3.64275 34.8015 3.64233C34.8014 3.64221 34.8011 3.6418 34.801 3.64156C34.8007 3.64109 34.8004 3.64068 34.8002 3.64033C34.7997 3.63964 34.7994 3.63921 34.7993 3.63904C34.7991 3.63869 34.7995 3.63938 34.8006 3.64108C34.8029 3.64448 34.8077 3.65194 34.8148 3.66333C34.8291 3.68614 34.8527 3.72459 34.8834 3.77774C34.9451 3.88419 35.0349 4.04861 35.1366 4.26338C35.3407 4.6946 35.5875 5.31861 35.7517 6.07635C36.0774 7.57925 36.0797 9.59705 34.7743 11.739L36.7427 12.9386C38.423 10.1815 38.4253 7.52992 38.0046 5.58817C37.7955 4.62359 37.4825 3.83147 37.2201 3.27714C37.0885 2.99914 36.9684 2.77843 36.8784 2.62294C36.8334 2.54512 36.7957 2.48341 36.7678 2.43878C36.7538 2.41646 36.7422 2.39839 36.7333 2.38469C36.7288 2.37784 36.725 2.37209 36.722 2.36744C36.7204 2.36511 36.7191 2.36306 36.7179 2.36129C36.7173 2.36041 36.7167 2.35959 36.7162 2.35884C36.716 2.35847 36.7157 2.35796 36.7155 2.35778C36.7152 2.35729 36.7149 2.35681 35.7585 3ZM34.7743 11.739C33.4196 13.9618 31.6757 15.1838 30.2756 15.8537C29.5735 16.1897 28.9589 16.3861 28.5275 16.4974C28.3121 16.5529 28.1436 16.587 28.0342 16.6065C27.9796 16.6163 27.9399 16.6224 27.9166 16.6257C27.9049 16.6274 27.8974 16.6284 27.8942 16.6288C27.8927 16.629 27.8921 16.6291 27.8927 16.629C27.893 16.629 27.8936 16.6289 27.8945 16.6288C27.8949 16.6288 27.8954 16.6287 27.8959 16.6286C27.8962 16.6286 27.8967 16.6285 27.8968 16.6285C27.8973 16.6285 27.8979 16.6284 28.0272 17.7737C28.1565 18.919 28.157 18.9189 28.1576 18.9188C28.1578 18.9188 28.1584 18.9188 28.1588 18.9187C28.1597 18.9186 28.1606 18.9185 28.1616 18.9184C28.1636 18.9181 28.1659 18.9179 28.1685 18.9176C28.1737 18.9169 28.18 18.9162 28.1875 18.9152C28.2025 18.9133 28.222 18.9107 28.2458 18.9072C28.2935 18.9003 28.3586 18.8902 28.4396 18.8757C28.6014 18.8468 28.827 18.8007 29.1032 18.7295C29.6548 18.5872 30.4132 18.3434 31.2707 17.933C32.9898 17.1103 35.1116 15.6149 36.7427 12.9386L34.7743 11.739ZM26.9526 17.357L25.4982 21.1078L27.6474 21.9412L29.1018 18.1904L26.9526 17.357ZM31.5656 9.93649C28.1644 14.2046 26.8804 16.7192 25.4736 21.1777L27.6719 21.8713C28.9908 17.6914 30.1377 15.4272 33.3683 11.373L31.5656 9.93649ZM13.6812 17.851C10.873 18.1131 8.12391 18.2792 5.98953 18.6149C4.9135 18.7841 3.9155 19.0066 3.08773 19.3372C2.27206 19.663 1.48383 20.1479 1.01276 20.9298L2.98724 22.1194C3.08576 21.9558 3.33826 21.7193 3.94271 21.4779C4.53505 21.2413 5.33654 21.051 6.3476 20.892C8.38741 20.5713 10.9629 20.4198 13.8954 20.1461L13.6812 17.851ZM1.07222 22.2084C1.51371 22.8074 2.21433 23.2478 2.97158 23.591C3.7537 23.9455 4.72517 24.253 5.84681 24.521C8.09251 25.0576 11.0684 25.4655 14.6195 25.7357L14.7944 23.4373C11.3033 23.1716 8.46175 22.7758 6.38251 22.279C5.34167 22.0303 4.52381 21.7637 3.92321 21.4915C3.29775 21.208 3.02227 20.969 2.92778 20.8408L1.07222 22.2084ZM14.639 25.7371C25.4244 26.3736 31.4194 26.0954 42.1713 24.8124L41.8981 22.5235C31.2631 23.7926 25.4061 24.0634 14.7748 23.436L14.639 25.7371ZM42.2777 24.7946C44.3279 24.3524 45.685 23.7786 46.5568 23.282C46.9926 23.0337 47.3055 22.8056 47.5215 22.6248C47.6293 22.5345 47.7126 22.4563 47.7747 22.3938C47.8057 22.3625 47.8314 22.3352 47.8521 22.3122C47.8624 22.3008 47.8716 22.2904 47.8795 22.2812C47.8835 22.2766 47.8871 22.2723 47.8905 22.2683C47.8922 22.2663 47.8938 22.2644 47.8954 22.2625C47.8961 22.2616 47.8969 22.2607 47.8976 22.2598C47.898 22.2593 47.8985 22.2587 47.8987 22.2585C47.8993 22.2578 47.8998 22.2572 47.01 21.5246C46.1202 20.792 46.1207 20.7914 46.1212 20.7908C46.1214 20.7906 46.1219 20.79 46.1223 20.7895C46.1229 20.7887 46.1236 20.7879 46.1242 20.7872C46.1255 20.7856 46.1267 20.7842 46.1279 20.7828C46.1302 20.78 46.1323 20.7776 46.1341 20.7755C46.1378 20.7713 46.1404 20.7683 46.1419 20.7666C46.1451 20.7632 46.1439 20.7646 46.138 20.7706C46.1262 20.7825 46.0953 20.8125 46.0417 20.8573C45.9348 20.9469 45.7358 21.0967 45.4158 21.2791C44.7759 21.6436 43.6454 22.1415 41.7917 22.5413L42.2777 24.7946ZM48.1196 21.8363C48.2412 21.4034 48.1202 21.0226 47.9708 20.7715C47.8333 20.5406 47.6521 20.3781 47.516 20.273C47.2406 20.0604 46.8907 19.8879 46.5525 19.7462C45.8541 19.4535 44.899 19.1683 43.8499 18.9133C41.7427 18.4011 39.0678 17.9658 36.8916 17.8477L36.7667 20.1494C38.7772 20.2585 41.3101 20.6682 43.3054 21.1532C44.3076 21.3968 45.1274 21.6483 45.6617 21.8722C45.9398 21.9887 46.0707 22.0694 46.1074 22.0977C46.1273 22.1131 46.0599 22.068 45.99 21.9505C45.908 21.8127 45.8081 21.5413 45.9004 21.2129L48.1196 21.8363ZM47.01 21.5246C45.8574 21.5246 45.8574 21.5244 45.8574 21.5242C45.8574 21.5242 45.8574 21.5241 45.8574 21.5241C45.8574 21.5241 45.8574 21.5243 45.8574 21.5247C45.8574 21.5254 45.8574 21.5267 45.8574 21.5288C45.8574 21.5329 45.8574 21.5396 45.8573 21.549C45.8572 21.5678 45.8569 21.5971 45.8563 21.6364C45.8552 21.7151 45.8529 21.8339 45.8482 21.9895C45.8389 22.3008 45.8201 22.7586 45.7822 23.3352C45.7063 24.4892 45.5544 26.1147 45.2503 27.9903C44.6392 31.7606 43.427 36.4554 41.0494 40.3693L43.0195 41.5661C45.6174 37.2894 46.893 32.2627 47.5258 28.3591C47.8437 26.3978 48.0027 24.6981 48.0823 23.4864C48.1222 22.8801 48.1422 22.3948 48.1523 22.0587C48.1574 21.8906 48.1599 21.7597 48.1612 21.6696C48.1619 21.6245 48.1622 21.5896 48.1624 21.5653C48.1625 21.5531 48.1625 21.5436 48.1625 21.5368C48.1625 21.5334 48.1626 21.5307 48.1626 21.5287C48.1626 21.5276 48.1626 21.5268 48.1626 21.5261C48.1626 21.5258 48.1626 21.5254 48.1626 21.5252C48.1626 21.5249 48.1626 21.5246 47.01 21.5246ZM41.1241 40.2608C35.9709 46.897 30.1493 49.7187 24.699 49.8432C19.2298 49.9681 13.9294 47.3827 9.82422 42.8012L8.10745 44.3395C12.5759 49.3264 18.4898 52.2907 24.7516 52.1477C31.0322 52.0043 37.458 48.7404 42.9447 41.6746L41.1241 40.2608ZM9.83528 42.8137C4.56549 36.758 3.32438 30.6458 3.15235 21.5029L0.847646 21.5463C1.02393 30.9154 2.30834 37.6757 8.09639 44.3269L9.83528 42.8137Z" />
            </svg>
            <h4 className="xl:text-[18px] text-[12px] text-secondary font-syncopate font-bold mt-[6px] leading-[1.0]">
              Fresh<br></br>bite
            </h4>
          </div>
          <ul className="hidden xl:flex items-center gap-[36px]">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-[18px] text-primary font-poppins font-medium ${
                    isActive ? "underline" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `text-[18px] text-primary font-poppins font-medium ${
                    isActive ? "underline" : ""
                  }`
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-[18px] text-primary font-poppins font-medium ${
                    isActive ? "underline" : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          >
            <span
              className={`block h-[2px] w-7 bg-secondary transform transition-transform duration-300 ease-in-out origin-top-left ${
                isOpen ? "rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block h-[2px] w-7 bg-secondary transition-all duration-300 ease-in-out ${
                isOpen ? "scale-0" : "scale-100"
              }`}
            ></span>
            <span
              className={`block h-[2px] w-7 bg-secondary transform transition-transform duration-300 ease-in-out origin-bottom-left ${
                isOpen ? "-rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>
        <div
          id="nav-shadow"
          className="bg-primary border-2 border-primary xl:rounded-[12px] rounded-[8px] xl:w-[1228px] w-[calc(100%-40px)] xl:h-[79px] h-[64px] absolute -ml-3 z-20 mt-2"
        ></div>
      </nav>
      <ul
        id="menu-mb"
        className={`w-screen xl:hidden h-screen bg-base fixed z-50 top-0 left-0 flex flex-col items-center justify-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block w-screen font-poppins font-medium text-center py-4 ${
                isActive
                  ? "bg-gradient-to-r from-primary/50 via-primary to-primary/50 text-base"
                  : "bg-none text-primary"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `block w-screen font-poppins font-medium text-center py-4 ${
                isActive
                  ? "bg-gradient-to-r from-primary/50 via-primary to-primary/50 text-base"
                  : "bg-none text-primary"
              }`
            }
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block w-screen font-poppins font-medium text-center py-4 ${
                isActive
                  ? "bg-gradient-to-r from-primary/50 via-primary to-primary/50 text-base"
                  : "bg-none text-primary"
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
