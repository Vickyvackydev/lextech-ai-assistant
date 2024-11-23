/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { useQuery } from "react-query";

import { dummyMessage } from "@/fake_data";
import { GetAllNotificationApi } from "@/services/notification/notification.service";
import ButtonV2 from "@/shared/components/buttonV2";
import { MenuDropdown } from "@/shared/components/dropdown/MenuDropDown";
import NotificationBox from "@/shared/components/noticationbox";
import { INDICATOR, WHITE_PLUS } from "@/utils/Exports";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

interface HeaderTypes {
  onMenu?: () => void;
}

function Header(props: HeaderTypes) {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [openMessagePopup, setMessagePopUp] = useState(false);
  const [openFeedBackPopup, setFeedBackPopUp] = useState(false);

  const {
    data: notifications,
    isLoading,
    refetch,
  } = useQuery("notification", GetAllNotificationApi);

  const router = useRouter();

  return (
    <div className="w-full pt-6 bg-white px-4 12 lg:px-8 relative">
      <div>
        <div className="w-full flex justify-between items-start">
          <div className="flex justify-start gap-10">
            <div>
              <p className="text-brand text-2xl font-semibold">
                Dashboard Overview
              </p>
              <p className="text-gray-500 text-xs"> Welcome Admin</p>
            </div>
            <form>
              <div className="relative w-60">
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pl-3">
                  <BiSearch className="text-brand" />
                </div>
                <input
                  className="block h-[44px] w-full rounded-lg border border-[#E1EFFB] bg-white  p-4 pl-10 text-sm text-gray-900 focus:outline-none"
                  id="default-search"
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Type a keyword"
                  required
                  type="search"
                  value={search}
                />
              </div>
            </form>
          </div>

          <div className="flex justify-end items-center gap-4 relative">
            <div className="relative">
              <FaBell
                className="text-2xl text-brand cursor-pointer"
                onClick={() => {
                  setFeedBackPopUp((previous) => !previous);
                }}
              />
              {dummyMessage.length > 0 && (
                <Image
                  alt=""
                  className="absolute  right-0 -top-1 w-3 h-3"
                  src={INDICATOR}
                  width={20}
                  height={20}
                />
              )}
            </div>

            <div className="relative">
              <BsEnvelopeFill
                className="text-2xl text-brand cursor-pointer"
                onClick={() => {
                  setMessagePopUp((previous) => !previous);
                }}
              />
              {dummyMessage.length > 0 && (
                <>
                  <Image
                    alt=""
                    className="absolute  -right-3 -top-3 w-6 h-6"
                    src={INDICATOR}
                    width={100}
                    height={100}
                  />
                  <span className="text-[11.1px] text-white -top-2 -right-[5px] z-50 font-semibold absolute">
                    {dummyMessage.length}
                  </span>
                </>
              )}
            </div>
            <MenuDropdown />
          </div>
        </div>
        <NotificationBox
          data={dummyMessage}
          handleClick={() => {
            router.push("/notification-center");
            setMessagePopUp(false);
          }}
          newMessageLength="2"
          open={openMessagePopup}
          style="right-[9rem] z-40 "
          title="Feedback"
        />
        <NotificationBox
          data={dummyMessage}
          handleClick={() => {
            router.push("/notification-center");
            setFeedBackPopUp(false);
          }}
          newMessageLength="2"
          open={openFeedBackPopup}
          style="right-[11rem] z-40 "
          title="Notifcations"
        />

        <div className="">
          <AiOutlineMenu
            className="h-10 text-4xl lg:hidden"
            onClick={props.onMenu}
          />
        </div>
      </div>

      <div className="hidden h-16 items-center justify-between  border-b border-b-[#C2E0FF]   px-8 lg:flex">
        <div className="flex flex-row items-center gap-4 border-b">
          <Link
            className={`cursor-pointer px-3 py-5 text-base ${
              pathname === "/dashboard"
                ? "text-brand border-b-2 border-b-brand "
                : "text-gray-500"
            }`}
            href="/dashboard"
            type="button"
          >
            Home
          </Link>

          <Link
            className={`cursor-pointer px-3 py-5 text-base ${
              pathname === "/userslist" ||
              location.pathname === "/userslist/user-profile"
                ? "text-brand border-b-2 border-b-brand"
                : "text-gray-500 "
            }`}
            href="/userslist"
            type="button"
          >
            Users List
          </Link>

          <Link
            className={`cursor-pointer px-3 py-5 text-base ${
              pathname === "/content-management"
                ? "text-brand border-b-2 border-b-brand"
                : "text-gray-500"
            }`}
            href="/content-management"
            type="button"
          >
            Content Management
          </Link>

          <Link
            className={`cursor-pointer px-3 py-5 text-base ${
              pathname === "/referrals-system"
                ? "text-brand border-b-2 border-b-brand"
                : "text-gray-500"
            }`}
            href="/referrals-system"
            type="button"
          >
            Referrals System
          </Link>
        </div>
        {location.pathname === "/settings" ? (
          <div>
            <ButtonV2
              btnStyle="bg-brand flex gap-2 flex-row-reverse items-center py-2 px-2 rounded-md "
              handleClick={() => {}}
              image={WHITE_PLUS}
              textStyle="text-white text-xs"
              title="Add new"
            />
          </div>
        ) : (
          <div className="flex justify-end gap-10">
            <ButtonV2
              btnStyle=""
              handleClick={() => {}}
              textStyle="text-sm font-bold text-brand"
              title="+ Create task"
            />
            <ButtonV2
              btnStyle=""
              handleClick={() => {}}
              textStyle="text-sm font-bold text-brand"
              title="  + add new categories"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
