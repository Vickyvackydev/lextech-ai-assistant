/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */

"use client";

import { Transition } from "@headlessui/react";
import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { FaEye, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import { useAppDispatch, useAppSelector, useMediaQuery } from "@/hooks";
// import {
//   AD_SECTIONS,
//   BAR,
//   CATEGORIES,
//   CHAT_ICON,
//   DASHBOARD_WHITE,
//   LOGO,
//   OPPORTUNITY,
//   SETTINGS,
//   TASK,
//   TRANSACTIONS,
//   USERS,
// } from "@/utils/Exports";
import { getBackgroundColor } from "@/utils/functions/userDynamicColor";
import { selectUser } from "@/states/slices/authReducer";
import Button from "../button";
import { useAppQuery } from "@/context/useContext";
import {
  ADD_ICON,
  ARROW_ICON,
  BLUE_ICON,
  BUTTON,
  CHAT_ICON,
  CLOCK,
  DARK_STATUS,
  DOCUMENT_ICON,
  GRAY_ICON,
  IMAGE_TOGGLER,
  LARGE_SEARCH,
  LEXTECH_AI_LOGO,
  MAN,
  ORANGE_ICON,
  SEARCH_ICON,
  SETTINGS_ICON,
  SMALL_SEARCH,
  UPDATE_ICON,
} from "@/utils/image_exports";
import {
  openModal,
  SelectOpenState,
  setChatStarted,
  setOpen,
  setSearcModal,
} from "@/states/slices/globalReducer";
import { Fade } from "react-awesome-reveal";
import ButtonV2 from "../buttonV2";
import ModalV2 from "../modalV2";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  setOpen: any;
}

const Sidebar = (props: SidebarProps) => {
  const { onClose } = props;

  const dispatch = useAppDispatch();
  const open = useAppSelector(SelectOpenState);
  const modalIsOpen = useAppSelector(openModal);
  const [lists, setLists] = useState(false);

  const {
    setSelectedLog,
    setShowtransactionlayout,
    setAddProductModal,
    addproductModal,
  } = useAppQuery();
  const Menus = [
    { title: "Saved", src: "/svg/saved.svg", path: "/saved-listings" },
    { title: "Discover", src: "/svg/brand.svg", path: "/discover" },

    { title: "Requests", src: "/svg/corporate.svg", path: "/requests" },
    { title: "Orders", src: "/svg/order.svg", path: "/orders" },
    {
      title: "Manage Listings",
      src: "/svg/opportunities.svg",
      path: "/manage-listings",
    },
    {
      title: "Join Corporate",
      src: "/svg/corporate.svg",
      path: "/corporate-account",
    },
    {
      title: "Wallet",
      src: "/svg/light-wallet.svg",
      path: "/wallet",
    },
    { title: "Referal", src: "/svg/refer.svg", path: "/refer&earn" },
    { title: "Settings", src: "/svg/setting_1.svg", path: "/settings" },
  ];

  const isMobileView = useMediaQuery("(max-width: 640px)");
  const isTabletView = useMediaQuery("(max-width: 840px)");
  const currentUser = useAppSelector(selectUser);
  const colors = getBackgroundColor("Abraham");
  const pathname = usePathname();
  const router = useRouter();

  const handleSetTarget = (path: string) => {
    if (path === "/wallet") {
      setSelectedLog("fiat-wallet");
      setShowtransactionlayout(true);
    }
  };

  console.log(open);

  return (
    <>
      {isMobileView || isTabletView ? (
        <Transition
          as="div"
          className="fixed z-30 h-full w-56 flex-none bg-brand-light lg:static"
          enter="transition-all ease-in duration-300"
          enterFrom="transform -translate-x-full"
          enterTo="transform -translate-x-0"
          leave="transition-all ease-out duration-300"
          leaveFrom="transform -translate-x-0"
          leaveTo="transform -translate-x-full"
          show={props.open}
        >
          <div className="h-screen">
            <div className="w-full bg-brand-light h-screen pt-8 relative duration-300">
              <div
                className="flex gap-x-4 px-5 pt-2 cursor-pointer"
                onClick={() => router.push("/dashboard")}
              >
                <Image
                  alt=""
                  className="cursor-pointer duration-500 rotate-[360deg]"
                  src={""}
                />
                <h1 className="text-brand font-bold origin-left text-xl duration-200">
                  Spottr
                </h1>
              </div>
              <ul className="pt-6">
                <li
                  className={`flex flex-row px-5 rounded-md mt-2 p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
                    addproductModal ? "bg-brand text-white" : "text-gray-600"
                  }`}
                  onClick={() => {
                    setAddProductModal(true);
                    props.onClose();
                  }}
                >
                  <img alt="" className="w-5 h-5" src="/svg/light-plus.svg" />
                  <span className="origin-left duration-200">Add Product</span>
                </li>
                {Menus.map((Menu) => (
                  <li
                    className={`flex flex-row px-5 rounded-md mt-2 p-2 cursor-pointer hover:bg-light-white text-gray-600 text-sm items-center gap-x-4 ${
                      pathname === Menu?.path
                        ? "bg-brand text-white"
                        : "text-gray-600"
                    }`}
                    key={Menu.title}
                    onClick={() => {
                      router.push(Menu.path);
                    }}
                  >
                    <img alt="" className="w-5 h-5" src={Menu.src} />
                    <span className="origin-left duration-200">
                      {Menu.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Transition>
      ) : (
        <div className="flex h-screen">
          <div
            className={` ${
              open ? "w-[320px]" : "w-[85px]"
            } bg-[#141718] h-screen pt-8  relative duration-300 transition-all`}
          >
            <div className="flex gap-x-4 px-7 pt-2">
              <Image
                alt=""
                className={`cursor-pointer duration-500 ${
                  open && "rotate-[360deg]"
                } ${open && "scale-0 hidden"}`}
                onClick={() => dispatch(setOpen(true))}
                src={IMAGE_TOGGLER}
              />
              <Image
                alt=""
                onClick={() => {
                  dispatch(setChatStarted(false));
                  dispatch(setOpen(false));
                }}
                className={`cursor-pointer duration-500 ${
                  open && "rotate-[360deg]"
                } ${!open && "scale-0"}`}
                src={LEXTECH_AI_LOGO}
              />
              <Image
                alt=""
                className={`cursor-pointer duration-500 ${
                  open && "rotate-[360deg]"
                } ${open || (!open && "scale-0 hidden")}`}
                onClick={() => dispatch(setOpen(false))}
                src={IMAGE_TOGGLER}
              />
            </div>
            <ul
              className={`pt-6 w-full ${
                open ? "px-7 mt-7" : ""
              } flex flex-col gap-y-4`}
            >
              <li
                onClick={() => {
                  router.push("/lextech-ai");
                  dispatch(setChatStarted(false));
                  dispatch(setOpen(false));
                }}
                className={`flex items-center rounded-lg p-3 cursor-pointer ${
                  !open && "justify-center"
                } justify-start gap-x-5 hover:bg-gradient-to-r hover:from-[#323337] hover:via-[#323337] hover:to-[rgba(70,_79,_111,_0.3)]`}
              >
                <Image src={CHAT_ICON} className="w-[24px] h-[24px]" alt="" />
                {open && (
                  <span className="text-[#E8ECEFBF] text-sm font-semibold">
                    Chats
                  </span>
                )}
              </li>
              <li
                onClick={() => dispatch(setSearcModal(true))}
                className={`flex items-center cursor-pointer rounded-lg p-3  ${
                  !open && "justify-center"
                } justify-between hover:bg-gradient-to-r hover:from-[#323337] hover:via-[#323337] hover:to-[rgba(70,_79,_111,_0.3)]`}
              >
                <div
                  className={`flex items-center ${
                    !open && "justify-center"
                  } gap-x-5`}
                >
                  <Image
                    src={SEARCH_ICON}
                    className={`  w-[24px] h-[24px]  ${
                      !open && "flex items-center justify-center ml-5"
                    }`}
                    alt=""
                  />
                  {open && (
                    <span className="text-[#E8ECEFBF] text-sm font-semibold">
                      Search
                    </span>
                  )}
                </div>
                {open && (
                  <Image src={BUTTON} className="w-[38px] h-[20px]" alt="" />
                )}
              </li>

              <li
                onClick={() => {
                  router.push("/documents");
                  dispatch(setOpen(false));
                }}
                className={`flex items-center p-3 rounded-lg cursor-pointer ${
                  !open && "justify-center"
                } justify-start gap-x-5 hover:bg-gradient-to-r hover:from-[#323337] hover:via-[#323337] hover:to-[rgba(70,_79,_111,_0.3)]`}
              >
                <Image
                  src={DOCUMENT_ICON}
                  className="w-[24px] h-[24px]"
                  alt=""
                />
                {open && (
                  <span className="text-[#E8ECEFBF] text-sm font-semibold">
                    Documents
                  </span>
                )}
              </li>
              <li
                className={`flex items-center p-3 cursor-pointer rounded-lg ${
                  !open && "justify-center"
                } justify-start gap-x-5 hover:bg-gradient-to-r hover:from-[#323337] hover:via-[#323337] hover:to-[rgba(70,_79,_111,_0.3)]`}
              >
                <Image src={UPDATE_ICON} className="w-[24px] h-[24px]" alt="" />
                {open && (
                  <span className="text-[#E8ECEFBF] text-sm font-semibold">
                    Updates and FAQs
                  </span>
                )}
              </li>
              <li
                className={`flex items-center cursor-pointer rounded-lg p-3 ${
                  !open && "justify-center"
                } justify-start gap-x-5 hover:bg-gradient-to-r hover:from-[#323337] hover:via-[#323337] hover:to-[rgba(70,_79,_111,_0.3)]`}
              >
                <Image
                  src={SETTINGS_ICON}
                  className="w-[24px] h-[24px]"
                  alt=""
                />
                {open && (
                  <span className="text-[#E8ECEFBF] text-sm font-semibold">
                    Settings
                  </span>
                )}
              </li>
            </ul>
            <div className="border-t relative cursor-pointer py-5 border-[#232627] px-7 mt-7 h-[220px] max-h-[400px] overflow-y-scroll">
              <div
                className={`flex items-center ${
                  !open && "justify-center"
                } gap-x-5`}
                onClick={() => setLists((prev) => !prev)}
              >
                <Image
                  src={ARROW_ICON}
                  className={`w-[24px] h-[24px] ${
                    !lists ? "rotate-180" : ""
                  } transition-all duration-200`}
                  alt=""
                />

                {open && (
                  <span className="text-[#E8ECEFBF] text-sm font-semibold">
                    Chat list
                  </span>
                )}
              </div>
              {lists && (
                <Fade direction="down" duration={900}>
                  <ul
                    className={`pt-6 ${
                      open ? "px-0" : ""
                    } flex flex-col gap-y-6 overflow-auto`}
                  >
                    <li className="flex pl-2 items-center justify-between gap-x-5">
                      <div
                        className={`flex  items-center ${
                          open && "justify-center"
                        } justify-start gap-x-5`}
                      >
                        {open ? (
                          <>
                            <Image
                              src={GRAY_ICON}
                              className="w-[14px] h-[14px]"
                              alt=""
                            />

                            <span className="text-[#E8ECEFBF] text-sm font-semibold">
                              Welcome
                            </span>
                          </>
                        ) : (
                          <Image
                            src={GRAY_ICON}
                            className="w-[14px] h-[14px]"
                            alt=""
                          />
                        )}
                      </div>
                      {open && (
                        <div className="w-[35px] h-[24px] rounded-md flex items-center justify-center bg-[#232627]">
                          <span className="text-[#6C7275]">48</span>
                        </div>
                      )}
                    </li>
                    <li className="flex pl-2 items-center justify-between gap-x-5">
                      <div
                        className={`flex  items-center ${
                          open && "justify-center"
                        } justify-start gap-x-5`}
                      >
                        {open ? (
                          <>
                            <Image
                              src={BLUE_ICON}
                              className="w-[14px] h-[14px]"
                              alt=""
                            />

                            <span className="text-[#E8ECEFBF] text-sm font-semibold">
                              Favorites
                            </span>
                          </>
                        ) : (
                          <Image
                            src={BLUE_ICON}
                            className="w-[14px] h-[14px]"
                            alt=""
                          />
                        )}
                      </div>
                      {open && (
                        <div className="w-[35px] h-[24px] rounded-md flex items-center justify-center bg-[#232627]">
                          <span className="text-[#6C7275]">18</span>
                        </div>
                      )}
                    </li>
                    <li className="flex pl-2 items-center justify-between gap-x-5">
                      <div
                        className={`flex  items-center ${
                          open && "justify-center"
                        } justify-start gap-x-5`}
                      >
                        {open ? (
                          <>
                            <Image
                              src={ORANGE_ICON}
                              className="w-[14px] h-[14px]"
                              alt=""
                            />

                            <span className="text-[#E8ECEFBF] text-sm font-semibold">
                              Archived
                            </span>
                          </>
                        ) : (
                          <Image
                            src={ORANGE_ICON}
                            className="w-[14px] h-[14px]"
                            alt=""
                          />
                        )}
                      </div>
                      {open && (
                        <div className="w-[35px] h-[24px] rounded-md flex items-center justify-center bg-[#232627]">
                          <span className="text-[#6C7275]">128</span>
                        </div>
                      )}
                    </li>
                    <li
                      className={`flex items-center ${
                        !open && "justify-center"
                      } justify-start gap-x-5`}
                    >
                      <Image
                        src={ADD_ICON}
                        className="w-[24px] h-[24px]"
                        alt=""
                      />
                      {open && (
                        <span className="text-[#E8ECEFBF] text-sm font-semibold">
                          New list
                        </span>
                      )}
                    </li>
                  </ul>
                </Fade>
              )}
              {open ? (
                <div className="w-full h-[148px] p-5 gap-y-6 shadow-dropShadow mt-6 flex flex-col items-center justify-center rounded-xl bg-[#FFFFFF01]">
                  <div className="flex items-center justify-between  w-full">
                    <div className="relative">
                      <Image
                        src={MAN}
                        className="w-[40px] h-[40px] rounded-full"
                        alt="image"
                      />
                      <Image
                        src={DARK_STATUS}
                        className="w-[18px] h-[18px] rounded-full absolute -right-1 top-7"
                        alt="image"
                      />
                    </div>

                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold text-[#FEFEFE]">
                        Tran Mau Tri Tam
                      </span>
                      <span className="text-[#E8ECEF80] font-semibold text-xs">
                        trans@gmail.com
                      </span>
                    </div>
                    <span className="bg-[#3FDD78] text-[#141718] font-bold text-xs flex items-center justify-center rounded-lg px-2 py-1">
                      Free
                    </span>
                  </div>
                  <ButtonV2
                    title="Upgrade to pro"
                    btnStyle="border-2 border-[#343839] rounded-xl w-full py-3"
                    handleClick={() => {}}
                    textStyle="text-[#FEFEFE] font-semibold text-sm"
                  />
                </div>
              ) : (
                <div className=" w-[63px] top-[250px] h-full bg-[#FFFFFF01] rounded-xl absolute bottom-0">
                  <div className="relative ">
                    <Image
                      src={MAN}
                      className="w-[40px] h-[40px] rounded-full"
                      alt="image"
                    />
                    <Image
                      src={DARK_STATUS}
                      className="w-[18px] h-[18px] rounded-full absolute right-5 top-7"
                      alt="image"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <ModalV2
        isOpen={modalIsOpen}
        isClose={() => dispatch(setSearcModal(false))}
        maxWidth="w-[723px]"
        edges="rounded-2xl"
        closeBtnColor=""
      >
        <div className="border-b py-3 flex items-center justify-start px-7 gap-x-3">
          <Image src={LARGE_SEARCH} className="w-[48px] h-[48px]" alt="" />
          <span className="text-[#A1A1A1] font-normal text-3xl">
            Search ...
          </span>
        </div>
        <div className=" py-3 px-7">
          <div className="flex items-center  justify-start gap-x-4">
            <div className="flex items-center gap-x-2 p-3 border border-[#E8ECEF] rounded-3xl">
              <Image src={SMALL_SEARCH} className="w-[24px] h-[24px]" alt="" />
              <input
                type="text"
                placeholder="Search ..."
                className="text-[17px] placeholder:text-[17px] placeholder:text-[#8A8A8A] font-normal w-full bg-transparent outline-none"
              />
            </div>
            <div className="flex items-center gap-x-2 p-3 border border-[#E8ECEF] rounded-3xl">
              <Image src={CLOCK} className="w-[24px] h-[24px]" alt="" />
              <input
                type="date"
                defaultValue={"Date"}
                placeholder=""
                className="text-[17px] placeholder:text-[17px] placeholder:text-[#8A8A8A] font-normal w-full bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="border-b pb-5">
            <div className="flex items-end gap-x-3 my-5">
              <span className="text-2xl font-semibold text-black">Today</span>
              <span className="text-[#A5A5A5] font-medium text-sm">
                Thu 16 Feb
              </span>
            </div>
            <div className="flex flex-col gap-y-7 mt-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_) => (
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-start">
                    <span className="text-[18px] font-semibold text-[#141718]">
                      Was There a Breach of Contract?
                    </span>
                    <span className="text-[#8E8E93] font-medium text-xs">
                      Defendant failed to deliver goods as agreed upon in the
                      contract....
                    </span>
                  </div>
                  <span className="text-[#8E8E93] font-medium text-xs">
                    1 min ago
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-b pb-5">
            <div className="flex items-end gap-x-3 my-5">
              <span className="text-2xl font-semibold text-black">March</span>
              <span className="text-[#A5A5A5] font-medium text-sm">
                Thu 16 Feb
              </span>
            </div>
            <div className="flex flex-col gap-y-7 mt-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_) => (
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-start">
                    <span className="text-[18px] font-semibold text-[#141718]">
                      Was There a Breach of Contract?
                    </span>
                    <span className="text-[#8E8E93] font-medium text-xs">
                      Defendant failed to deliver goods as agreed upon in the
                      contract....
                    </span>
                  </div>
                  <span className="text-[#8E8E93] font-medium text-xs">
                    1 min ago
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ModalV2>
    </>
  );
};

export default Sidebar;
