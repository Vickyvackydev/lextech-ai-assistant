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
        <Bounce className="w-full px-16 mt-10">
          <div className="flex flex-col gap-y-3">
            <span className="text-black text-[32px] font-medium">
              Welcome back!
            </span>
            <span className="text-black text-[16px] font-medium">
              Enter your Credentials to access your account
            </span>
          </div>
          <form action="" className="flex flex-col gap-y-5 mt-16">
            <div className="flex items-start gap-y-1 flex-col">
              <span>Email address</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="text-xs placeholder:text-sm placeholder:font-medium font-medium placeholder:text-[#D9D9D9] w-full rounded-lg border border-[#D9D9D9] p-3 outline-none"
              />
            </div>
            <div className="flex items-start gap-y-1 flex-col">
              <span>Password</span>
              <div className="flex justify-between items-center w-full rounded-lg border  border-[#D9D9D9] p-3">
                <input
                  type="password"
                  placeholder="........."
                  className="text-xs placeholder:text-sm placeholder:font-medium font-medium placeholder:text-[#D9D9D9] w-full outline-none"
                />
                <FaEye size={15} className="text-gray-300" />
              </div>
            </div>
          </form>
          <div className="flex items-center mt-4 flex-col gap-y-6 w-full">
            <ButtonV2
              title="Login"
              btnStyle="bg-[#141718] w-full rounded-lg py-3"
              textStyle="text-white font-medium text-sm"
              handleClick={() => router.push("/welcome")}
            />
            <span className="text-sm font-medium">
              Don't an account?{" "}
              <span
                className="text-[#0F3DDE] cursor-pointer"
                onClick={() => router.push("/signup")}
              >
                Sign up
              </span>
            </span>
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
