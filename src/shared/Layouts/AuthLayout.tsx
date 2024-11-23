import React from "react";
import { BsArrowRight } from "react-icons/bs";

import { AWARD, BELL, SEARCH, SPOTTR_BG, STAR } from "@/utils/Exports";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const handlenavigation = () => {
    if (pathname.includes("/sign-up")) {
      router.push("/");
    } else {
      router.push("/sign-up");
    }
  };
  const b = "/svg/spottr_bg.svg";
  return (
    <div className="bg-white lg:bg-brand h-screen w-screen">
      <div className="lg:flex gap-5 max-md:flex-col max-md:gap-0 h-full">
        <div className="lg:flex flex-col hidden w-full lg:w-[55%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
            <div className="flex overflow-hidden relative flex-col items-center pt-12 pb-2.5 pl-20 w-full  max-md:pl-5 max-md:max-w-full">
              <img
                // width={400}
                // height={400}
                alt=""
                className="object-cover absolute inset-0 size-full"
                loading="lazy"
                src={"/svg/spottr_bg.svg"}
              />
              <div className="relative  text-3xl text-center text-white mt-10 max-md:text-4xl">
                Welcome to
              </div>
              <div className="relative   text-7xl font-semibold text-white mt-6 max-md:text-4xl">
                Spottr
              </div>
              <div className="relative self-end mt-12 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex relative flex-col text-lg  text-blue-50 max-md:mt-6">
                      <div className="flex gap-3.5">
                        <img
                          alt=""
                          className="shrink-0 w-6 aspect-square"
                          src={"/svg/award.svg"}
                        />
                        <div className="flex-auto my-auto font-bold">
                          Discover Opportunities
                        </div>
                      </div>
                      <div className="mt-4 text-sm leading-6 text-blue-200">
                        Discover the amazing world of opportunities around you
                        in the spottR AI powered ecosystem.
                      </div>
                      <div className="flex gap-3.5 mt-8">
                        <img
                          alt=""
                          className="shrink-0 w-6 aspect-square"
                          src={"/svg/star.svg"}
                        />
                        <div className="flex-auto my-auto font-bold">
                          Search Opportunities
                        </div>
                      </div>
                      <div className="mt-3.5 text-sm leading-6 text-blue-200">
                        Advanced searched algprithms present the best way to
                        find anything of value
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex relative flex-col grow text-lg text-blue-50 max-md:mt-6">
                      <div className="flex gap-3.5">
                        <img
                          alt=""
                          className="shrink-0 w-6 aspect-square"
                          src={"/svg/bell.svg"}
                        />
                        <div className="flex-auto my-auto font-bold">
                          In-app search notifications
                        </div>
                      </div>
                      <div className="mt-4 text-sm leading-6 text-blue-200">
                        Never miss a thing. get notified when someone is
                        interested in you.
                      </div>
                      <div className="flex gap-3.5 mt-7">
                        <img
                          alt=""
                          className="shrink-0 w-6 aspect-square"
                          src={"/svg/search.svg"}
                        />
                        <div className="flex-auto my-auto font-bold">
                          Search Response
                        </div>
                      </div>
                      <div className="mt-4 text-sm leading-6 text-blue-200">
                        Stay ahead of the competition with a custom qoute, reply
                        to searches. One of the ways businesses win with spottR
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 self-center mt-16 text-center">
              <div className="flex flex-auto gap-1.5 px-5 my-auto text-base font-medium leading-6 text-white">
                <div className="grow">
                  {pathname.includes("/sign-up") || !pathname.includes("/")
                    ? "Already have an account?"
                    : "Open your own account"}
                </div>
                <BsArrowRight className="text-white my-auto" />
              </div>
              <div
                className="justify-center px-9 py-4 text-sm text-blue-900 whitespace-nowrap bg-white rounded-3xl max-md:px-5 cursor-pointer"
                onClick={handlenavigation}
              >
                {pathname.includes("/sign-up") || !pathname.includes("/")
                  ? "Login"
                  : "Sign up"}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-full h-full lg:w-[45%] max-md:ml-0 max-md:w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
