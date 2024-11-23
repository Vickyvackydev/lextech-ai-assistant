import { BLUE_ARROW_DOWN, BLUE_BARS } from "@/utils/Exports";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaBell } from "react-icons/fa";
import ButtonV2 from "../buttonV2";
import { Menu, MenuItems, Transition } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Notification from "@/features/notification";
import MessageBox from "@/features/messagebox";
import { useAppQuery } from "@/context/useContext";
import AddProduct from "@/features/Addproduct";
import { useMediaQuery } from "@/hooks";
import Modal from "../Modal";

function Mainheader({
  onMenu,
  sidebarOpen,
}: {
  onMenu: () => void;
  sidebarOpen: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { setState, state, setShowSearchBar, showSearchBar } = useAppQuery();

  const [notificationbox, setNotificationbox] = useState(false);
  const [messagebox, setMessagebox] = useState(false);

  const ismobilescreen = useMediaQuery("(max-width: 640px)");
  const [showlocationmodal, setShowlocationModal] = useState(false);

  return (
    <header
      className={`w-full h-full ${
        pathname.includes("/corporate-account")
          ? "pt-8 pb-0 border-b border-[#C2E0FF] px-5"
          : "py-8  px-10 "
      }`}
    >
      <div className="flex   justify-between items-center ">
        <div className="flex lg:w-[600px] w-full   justify-between items-center">
          {ismobilescreen && (
            <button
              type="button"
              className="text-brand font-semibold text-lg"
              onClick={onMenu}
            >
              <FaBars />
            </button>
          )}
          <div className="flex gap-10 items-center">
            <div className="relative">
              <Transition
                show={showSearchBar}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div
                  className="fixed bottom-0 left-0 top-0 z-20 w-full h-[115px] bg-gray-800/60"
                  onClick={() => setShowSearchBar(false)}
                />
              </Transition>
            </div>
            <div className="relative">
              <Transition
                as="div"
                show={showSearchBar}
                enter="transition-all duration-500"
                enterFrom="w-0 opacity-0"
                enterTo="w-[495px] opacity-100"
                leave="transition-all duration-500"
                leaveFrom="w-[495px] opacity-100"
                leaveTo="w-0 opacity-0"
                className={`absolute flex justify-between ${
                  showSearchBar && "lg:w-[495px] w-[300px] h-[44px]"
                }  px-4  z-20 lg:left-0 -left-[9.5rem] rounded-md border-[0.68px] border-[#061E48] bg-white`}
                style={{ overflow: "hidden" }} // Ensure that the input does not overflow during transition
              >
                <input
                  type="text"
                  className="bg-transparent outline-none flex-grow"
                />
                <Image
                  src="/svg/search-icon.svg"
                  width={20}
                  height={20}
                  alt="search icon"
                />
              </Transition>
            </div>
            <div
              className="w-[262px] lg:flex hidden h-[44px] border-[0.68px] border-[#E1EFFB]  justify-between px-3 rounded-lg"
              onClick={() => {
                setShowSearchBar(true);
                router.push("/searchproducts");
              }}
            >
              <input
                type="text"
                className="bg-transparent outline-none w-full"
                disabled={showSearchBar}
              />
              <Image
                src="/svg/search-icon.svg"
                width={20}
                height={20}
                alt="search icon"
              />
            </div>
            {/* <Link
              href={"/discover"}
              className="lg:flex flex-col gap-[1px] items-center hidden"
            >
              <Image
                src="/svg/discover.svg"
                width={17}
                height={15}
                alt="image"
              />
              <span className="text-[8px] text-bra font-bold">Discover</span>
            </Link> */}
            {/* <Link
              href={"/searchproducts"}
              onClick={() => setShowSearchBar(true)}
              className="lg:hidden flex-col gap-[1px] items-center flex"
            >
              <Image
                src="/svg/search-icon.svg"
                width={17}
                height={15}
                alt="image"
              />
              <span className="text-[8px] text-bra font-bold">Search</span>
            </Link> */}
            {/* <Link
              href={"/requests"}
              className="flex flex-col gap-[1px] items-center"
            >
              <Image
                src="/svg/user-blue.svg"
                width={17}
                height={15}
                alt="image"
              />
              <span className="text-[8px] text-bra font-bold">Request</span>
            </Link> */}
            {/* <Link
              href={"/wallet"}
              className="flex flex-col gap-[4px] items-center"
            >
              <Image
                src="/svg/blue-wallet.svg"
                width={17}
                height={15}
                alt="image"
              />
              <span className="text-[8px] text-bra font-bold">Wallet</span>
            </Link> */}
          </div>
        </div>
        <div className="lg:w-[500px] w-full  relative flex justify-between items-center">
          <div className="flex lg:gap-10 gap-5 items-center">
            {/* <Link
              href={"/searchproducts"}
              onClick={() => setShowSearchBar(true)}
              className="lg:hidden flex-col gap-[1px] items-center flex"
            >
              <Image
                src="/svg/search-icon.svg"
                width={17}
                height={15}
                alt="image"
              />
              <span className="text-[8px] text-bra font-bold">Search</span>
            </Link> */}
            <div
              className="flex items-center gap-2 cursor-pointer lg:hidden "
              onClick={() => {
                setShowSearchBar(true);
                router.push("/searchproducts");
              }}
            >
              <Image
                src="/svg/search-icon.svg"
                width={20}
                height={15}
                alt="image"
              />
              {/* <span className="text-[8px] text-brand font-bold">Search</span> */}
            </div>
            <div
              className="flex  cursor-pointer"
              onClick={() => setShowlocationModal(true)}
            >
              <Image src="/svg/target-icon.svg" width={20} height={20} alt="" />
            </div>

            <div
              className="relative cursor-pointer"
              onClick={() => setNotificationbox(true)}
            >
              <div className="flex justify-center items-center w-[9px] h-[9px] rounded-full bg-white absolute ml-2">
                <Image src="/svg/red-dot.svg" width={5.5} height={5.5} alt="" />
              </div>
              <FaBell className="text-lg text-brand" />
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setMessagebox(true)}
            >
              <Image
                src="/svg/blue-message-icon.svg"
                width={17}
                height={17}
                alt="message icon"
              />
              <span className="text-[10px] font-semibold lg:flex hidden">
                Messages
              </span>
            </div>
          </div>

          {/* <div>
            <ButtonV2
              title={"Add New"}
              btnStyle={
                "flex-row-reverse flex items-center gap-2 bg-brand h-[34px] w-[97px] justify-center rounded-md"
              }
              textStyle={"text-white font-bold text-[12px]"}
              handleClick={() => setAddProductModal(true)}
              image={"/svg/white-plus.svg"}
            />
          </div> */}
        </div>
      </div>
      {pathname.includes("/corporate-account") && (
        <div className="flex items-center lg:gap-7 gap-3 lg:ml-14 ml-0">
          <span
            className={`lg:text-[16px] text-xs font-normal lg:py-5 py-4 lg:px-8 px-3 cursor-pointer ${
              state === "home"
                ? "border-[#274B89] text-brand  border-b"
                : "text-[#929AA7] "
            } `}
            onClick={() => setState("home")}
          >
            Join
          </span>
          <span
            className={`lg:text-[16px] text-xs font-normal lg:py-5 py-4 lg:px-8 px-3 cursor-pointer ${
              state === "requests"
                ? "border-[#274B89] text-brand  border-b"
                : "text-[#929AA7] "
            } `}
            onClick={() => setState("requests")}
          >
            Memberships
          </span>
          {/* <span
            className={`lg:text-[16px] text-xs font-normal lg:py-5 py-4 lg:px-8 px-3 cursor-pointer ${
              state === "customers"
                ? "border-[#274B89] text-brand  border-b"
                : "text-[#929AA7] "
            } `}
            onClick={() => setState("customers")}
          >
            Customers
          </span>
          <div
            className={`flex items-center gap-2  lg:px-8 px-3 lg:py-5 py-3 cursor-pointer ${
              state === "requests" ? "border-b border-[#274B89]" : ""
            }`}
            onClick={() => setState("requests")}
          >
            <span
              className={`lg:text-[16px] text-xs font-normal  ${
                state === "requests" ? "text-brand" : "text-[#929AA7]"
              }`}
            >
              Requests
            </span>
            <span className="lg:text-xs text-[9px] font-bold text-[#1569FA]">
              54 new
            </span>
          </div> */}
        </div>
      )}
      <Notification
        show={notificationbox}
        onClose={() => setNotificationbox(false)}
      />
      <MessageBox show={messagebox} onClose={() => setMessagebox(false)} />
      <AddProduct />
      <Modal
        isOpen={showlocationmodal}
        isClose={() => setShowlocationModal(false)}
        maxWidth={"w-[500px]"}
        edges={"rounded-lg"}
      >
        <form action="" className="flex items-start flex-col gap-3">
          <label htmlFor="text" className="text-sm font-medium text-gray-400">
            Enter address
          </label>
          <input
            type="text"
            className="bg-[#F8F8F8] outline-none px-3 w-full h-[45px] rounded"
          />
        </form>
        <ButtonV2
          title={"Go"}
          btnStyle={
            "bg-brand w-full flex justify-center mt-5 rounded items-center h-[40px]"
          }
          textStyle={"text-white font-semibold "}
          handleClick={() => {}}
        />
      </Modal>
    </header>
  );
}

export default Mainheader;
