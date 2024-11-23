import { useAppDispatch, useAppSelector } from "@/hooks";
import ButtonV2 from "@/shared/components/buttonV2";
import {
  openModal,
  SelectOpenState,
  setChatStarted,
  setSearcModal,
  startChat,
} from "@/states/slices/globalReducer";
import {
  ADD_ICON,
  AI_PHOTO,
  CASE,
  CLOCK,
  DOC_ICON,
  DOTS,
  DRAFT,
  LARGE_SEARCH,
  LEGAL,
  MAP_CONNECTION,
  SENDER,
  SHARE_ICON,
  SMALL_SEARCH,
  STAR_ICON,
  WAVE,
} from "@/utils/image_exports";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import ModalV2 from "@/shared/components/modalV2";
import { FaClock } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

function ChatSection() {
  // const [chatStarted, setChatStarted] = useState(true);
  const dispatch = useAppDispatch();
  const chatStarted = useAppSelector(startChat);
  const open = useAppSelector(SelectOpenState);
  const modalIsOpen = useAppSelector(openModal);
  const text = "Can I help you with anything?";

  const letters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleControlKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "f") {
      event.preventDefault();
      dispatch(setSearcModal(true));
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleControlKeyDown);

    return () => window.removeEventListener("keydown", handleControlKeyDown);
  }, []);
  return (
    <div className="w-full pt-8 px-16">
      {chatStarted ? (
        <div className="border-t pt-7 h-[500px] max-h-[500px] overflow-y-auto">
          <div className="flex items-center justify-between">
            <span className="text-[18px] font-semibold text-black">
              Case Law Analysis
            </span>
            <div className="flex items-center gap-x-4">
              <Image src={STAR_ICON} className="w-[28px] h-[28px]" alt="" />
              <Image src={SHARE_ICON} className="w-[28px] h-[28px]" alt="" />
              <Image src={DOTS} className="w-[28px] h-[28px]" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-y-10 mt-8">
            <div className="w-full flex flex-col items-start gap-y-2">
              <div className="px-4 py-9 border border-[#E8ECEF] rounded-xl h-full">
                <span className="text-[18px] font-semibold text-[#6E6E6E]">
                  Write Detailed case for a simple welcome criminal suit and
                  form with 3 input fields and a dropdown with 2 buttons, cancel
                  and send, then run test with multiple parties.
                </span>
              </div>
              <span className="text-[18px] font-medium text-[#C9C9C9]">
                Just now
              </span>
            </div>
            <div className="w-full relative gap-y-2">
              <div className="px-4 py-9 bg-[#F3F5F7] rounded-xl h-full">
                <span className="text-[18px] font-semibold text-[#6E6E6E]">
                  Write Detailed case for a simple welcome criminal suit and
                  form with 3 input fields and a dropdown with 2 buttons, cancel
                  and send, then run test with multiple parties.
                </span>
              </div>
              <Image
                src={AI_PHOTO}
                className="w-[40px] h-[40px] absolute right-9 -bottom-6"
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Bounce>
            <div className="flex items-center justify-center flex-col gap-y-2">
              <Image src={WAVE} className="w-[53px] h-[53px] " alt="" />
              <span className="text-[#767676] font-semibold text-[36px] ">
                Hi Joseph
              </span>
              <span className="text-[13px] font-medium text-[#3F454D] text-center">
                Ready to assist you with anything you need, from answering
                questions <br />
                to providing recommendations. Let’s get started!
              </span>
            </div>
          </Bounce>
          <Bounce duration={1000}>
            <div className="w-full bg-[#E4F4FF] rounded-xl h-[199px] mt-10 p-10 flex flex-col items-start gap-y-7">
              <motion.div
                className="overflow-hidden inline-block text-[36px] font-bold text-gray-900"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.div>

              <ButtonV2
                title={"Take a tour"}
                btnStyle={
                  "bg-[#007AFF] rounded-3xl w-[180px] h-[51px] flex items-center justify-center gap-x-3 flex-row-reverse"
                }
                textStyle={"text-[#FEFEFE]"}
                image={MAP_CONNECTION}
                imageSize="w-[24px] h-[24px]"
                handleClick={function (
                  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          </Bounce>
          <Fade direction="up" duration={1000}>
            <div
              className={`w-full flex items-center ${
                open && "grid grid-cols-3 gap-y-2"
              }   gap-x-2 mt-8 `}
            >
              <div className="border-[#E8ECEF] px-4 pt-8 border gap-y-3 flex flex-col rounded-xl h-[195px] w-full">
                <Image src={CASE} className="w-[53px] h-[53px]" alt="" />
                <div className="flex flex-col">
                  <span className="text-[18px] font-semibold text-black">
                    Case Law Analysis
                  </span>
                  <span className="text-[#6E6E6E] leading-tight font-normal text-[15px]">
                    Analyze precedents and case outcomes
                  </span>
                </div>
              </div>
              <div className="border-[#E8ECEF] px-4 pt-8 border gap-y-3 flex flex-col rounded-xl h-[195px] w-full">
                <Image src={DOC_ICON} className="w-[53px] h-[53px]" alt="" />
                <div className="flex flex-col">
                  <span className="text-[18px] font-semibold text-black">
                    Document Review
                  </span>
                  <span className="text-[#6E6E6E] leading-tight font-normal text-[15px]">
                    Review and summarize legal documents
                  </span>
                </div>
              </div>
              <div className="border-[#E8ECEF] px-4 pt-8 border flex flex-col gap-y-3 rounded-xl h-[195px] w-full">
                <Image src={LEGAL} className="w-[53px] h-[53px]" alt="" />
                <div className="flex flex-col">
                  <span className="text-[18px] font-semibold text-black">
                    Legal research
                  </span>
                  <span className="text-[#6E6E6E] font-normal text-[15px] leading-tight">
                    Research specific legal topics
                  </span>
                </div>
              </div>
              <div className="border-[#E8ECEF] px-4 pt-8 border flex flex-col gap-y-3 rounded-xl h-[195px] w-full">
                <Image src={DRAFT} className="w-[53px] h-[53px]" alt="" />
                <div className="flex flex-col">
                  <span className="text-[18px] font-semibold text-black">
                    Draft Summary
                  </span>
                  <span className="text-[#6E6E6E] font-normal text-[15px]">
                    Create legal document summaries
                  </span>
                </div>
              </div>
            </div>
          </Fade>
        </>
      )}

      <Bounce>
        <div className="w-full border-2 py-2 overflow-hidden border-[#E8ECEF] rounded-lg flex items-center h-auto mt-16 px-3">
          <button>
            <Image
              src={ADD_ICON}
              className="w-[28px] h-[28px]"
              alt="Add Icon"
            />
          </button>

          <textarea
            name=""
            placeholder="Type a message..."
            rows={1}
            onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            className="w-full resize-none outline-none bg-transparent px-3 py-1"
          />

          <button type="button" onClick={() => dispatch(setChatStarted(true))}>
            <Image
              src={SENDER}
              className="w-[35px] h-[35px]"
              alt="Sender Icon"
            />
          </button>
        </div>
      </Bounce>
    </div>
  );
}

export default ChatSection;
