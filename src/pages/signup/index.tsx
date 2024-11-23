import ButtonV2 from "@/shared/components/buttonV2";
import { LOGO_V2 } from "@/utils/image_exports";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { FaEye } from "react-icons/fa";

function Login() {
  const router = useRouter();
  return (
    <div className="flex items-start w-full">
      <div className="w-full flex flex-col items-center justify-center p-10 h-[700px] max-h-[700px] overflow-y-scroll">
        <Fade direction="down" className="w-full">
          <Image src={LOGO_V2} className="w-[221px] h-[41px]" alt="" />
        </Fade>
        <Bounce className="w-full">
          <div className="w-full px-16 mt-10">
            <span className="text-black text-[32px] font-medium">
              Get Started Now
            </span>
            <form action="" className="flex flex-col gap-y-3 mt-2">
              <div className="flex items-start gap-y-1 flex-col">
                <span>First Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="text-xs placeholder:text-[12px] placeholder:font-medium font-medium placeholder:text-[#D9D9D9] w-full rounded-lg border border-[#D9D9D9] p-3 outline-none"
                />
              </div>
              <div className="flex items-start gap-y-1 flex-col">
                <span>Last Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="text-xs placeholder:text-[12px] placeholder:font-medium font-medium placeholder:text-[#D9D9D9] w-full rounded-lg border border-[#D9D9D9] p-3 outline-none"
                />
              </div>
              <div className="flex items-start gap-y-1 flex-col">
                <span>Email address</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-xs placeholder:text-[12px] placeholder:font-medium font-medium placeholder:text-[#D9D9D9] w-full rounded-lg border border-[#D9D9D9] p-3 outline-none"
                />
              </div>
              <div className="flex items-start gap-y-1 flex-col">
                <span>Password</span>
                <div className="flex justify-between items-center w-full rounded-lg border  border-[#D9D9D9] p-3">
                  <input
                    type="password"
                    placeholder="........."
                    className="text-xs placeholder:text-[12px] placeholder:font-medium font-medium placeholder:text-[#D9D9D9] w-full outline-none"
                  />
                  <FaEye size={15} className="text-gray-300" />
                </div>
              </div>
              <div className="flex items-start gap-y-1 flex-col">
                <span>Confirm Password</span>
                <div className="flex justify-between items-center w-full rounded-lg border  border-[#D9D9D9] p-3">
                  <input
                    type="password"
                    placeholder="........."
                    className="text-xs placeholder:text-[12px] placeholder:font-medium font-medium placeholder:text-[#D9D9D9] w-full outline-none"
                  />
                  <FaEye size={15} className="text-gray-300" />
                </div>
              </div>
              <div className="flex items-center gap-x-2 mt-4">
                <div className="flex items-center border border-black justify-center w-[12px] h-[12px] rounded"></div>
                <span className="text-xs font-medium text-black">
                  I agree to the terms & policy
                </span>
              </div>
            </form>
            <div className="flex items-center mt-4 flex-col gap-y-3 w-full">
              <ButtonV2
                title="Signup"
                btnStyle="bg-[#141718] w-full rounded-lg py-3"
                textStyle="text-white font-medium text-sm"
                handleClick={() => {}}
              />
              <span className="text-sm font-medium">
                Have an account?{" "}
                <span
                  className="text-[#0F3DDE] cursor-pointer"
                  onClick={() => router.push("/login")}
                >
                  Sign in
                </span>
              </span>
            </div>
          </div>
        </Bounce>
      </div>
      <Fade direction="right" className="w-full">
        <div className="bg-[#E4F4FF] bg-court w-full h-screen bg-contain bg-no-repeat bg-center rounded-tl-3xl rounded-bl-3xl"></div>
      </Fade>
    </div>
  );
}

export default Login;
