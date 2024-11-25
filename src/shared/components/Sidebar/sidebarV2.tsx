/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */

"use client";

import { Transition } from "@headlessui/react";
import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { FaCheck, FaEye, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import { useAppSelector, useMediaQuery } from "@/hooks";
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

import { MAN, ONLINE_STATUS, RING, STATUS, TRASH } from "@/utils/image_exports";
import ButtonV2 from "../buttonV2";
import { Bounce, Fade } from "react-awesome-reveal";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  setOpen: any;
}

const SidebarV2 = (props: SidebarProps) => {
  const { open, onClose, setOpen } = props;

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
          {/* mobile screen section */}
          <div className="h-screen"></div>
        </Transition>
      ) : (
        <div
          className="flex h-screen z-20 flex-col py-7 w-[650px] bg-[#FEFEFE]"
          style={{ boxShadow: "inset 0 4px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="w-full h-[72px]  border-b border-[#E8ECEF] flex items-center justify-end gap-x-8 pr-6 pb-4">
            <div className="relative">
              <Image src={RING} className="w-[24px] h-[24px]" alt="" />
              <Image
                src={STATUS}
                className="w-[8px] h-[8px] absolute top-0 right-0"
                alt=""
              />
            </div>
            <div className="relative">
              <Image
                src={MAN}
                className="w-[40px] h-[40px] rounded-full"
                alt="image"
              />
              <Image
                src={ONLINE_STATUS}
                className="w-[18px] h-[18px] rounded-full absolute -right-1 top-7"
                alt="image"
              />
            </div>

            <ButtonV2
              title="Share"
              btnStyle="bg-[#007AFF] rounded-lg w-[87px] h-[40px]"
              textStyle="text-[#FEFEFE] font-semibold"
              handleClick={() => {}}
            />
          </div>
          <div className="h-full  inset-0 px-5 mt-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <span className="text-[#6C7275BF] font-semibold text-sm">
                  Chat history
                </span>
                <div className="w-[55px] h-[20px] rounded-xl bg-[#E8ECEF] flex items-center shadow-md justify-center text-xs font-medium text-[#6C7275]">
                  10/100
                </div>
              </div>
              <Image src={TRASH} className="w-[20px] h-[20px]" alt="" />
            </div>
            <Fade direction="up" duration={1000}>
              <div className="mt-16 flex flex-col gap-y-8">
                {[1, 2, 3, 4].map((_) => (
                  <div className="flex items-start justify-start gap-x-2">
                    <div className="w-[20px] h-[20px] rounded-md border-2 border-[#6C727580] mt-2 flex items-center justify-center">
                      <FaCheck size={12} color="#6C727580" />
                    </div>
                    <div className="flex flex-col items-end gap-y-2 ">
                      <div className="flex flex-col">
                        <span className="text--[#141718] text-[16px] font-semibold">
                          Brainwave AI UI Kit
                        </span>
                        <span className="text-xs font-medium text-[#6C7275] ">
                          Analyze precedents and case outcomes
                        </span>
                      </div>
                      <span className="text-[#6C7275BF] font-medium text-[11px]">
                        Just now
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarV2;
