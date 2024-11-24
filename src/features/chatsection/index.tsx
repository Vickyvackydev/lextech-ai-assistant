import { useAppDispatch, useAppSelector } from "@/hooks";
import ButtonV2 from "@/shared/components/buttonV2";
import {
  getMessages,
  openModal,
  SelectOpenState,
  setChatStarted,
  setMessage,
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

import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { File } from "buffer";

function ChatSection() {
  // const [chatStarted, setChatStarted] = useState(true);
  const [messages, setMessages] = useState([
    {
      message: "",
      uploaded_files: [],
    },
  ]);
  const [selectedFiles, setSelectedFiles] = useState<any>([]);
  const [inputMessage, setInputMessage] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const chatStarted = useAppSelector(startChat);
  const open = useAppSelector(SelectOpenState);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const modalIsOpen = useAppSelector(openModal);
  const text = "Can I help you with anything?";
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 3) {
      toast.error("you can only upload maximum of 3 files");
    }
    if (files) {
      const selectedFiles = Array.from(files).slice(0, 3); // selects up to 3 images
      const validFiles = selectedFiles.filter((file) => file.size <= 1000000); // filter image larger than 3mb

      const uploadedFiles = validFiles.map((file) => ({
        ...file,
        preview: URL.createObjectURL(file),
      }));
      setSelectedFiles(uploadedFiles);
    }
  };

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

  const handleSend = () => {
    if (selectedFiles.length > 0) {
      setMessages([
        ...messages,
        {
          message: inputMessage,
          uploaded_files: selectedFiles,
        },
      ]);
    } else {
      setMessages([...messages, { message: inputMessage, uploaded_files: [] }]);
    }
    setInputMessage("");
    setSelectedFiles([]);
  };

  // const handleStartChat = () => {
  //   const chatId = uuidv4();
  //   dispatch(setChatStarted(true));
  //   router.replace(`/lextech-ai/chat/${chatId}`);
  //   handleSend();
  // };

  const handleEnterMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents a new line in the textarea
      handleSend();
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  useEffect(() => {
    window.addEventListener("keydown", handleControlKeyDown);

    return () => window.removeEventListener("keydown", handleControlKeyDown);
  }, []);
  return (
    <div className="w-full pt-8 px-16">
      <div
        ref={chatContainerRef}
        className="border-t pt-7 h-[500px] max-h-[500px] overflow-y-auto"
      >
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
        {messages.map((mess) => (
          <div className="flex flex-col gap-y-10 mt-8">
            <div className="w-full flex flex-col items-end justify-end gap-y-2">
              <div className="flex items-center gap-x-1">
                {mess.uploaded_files.length > 0 &&
                  mess.uploaded_files.map((file: any) => (
                    <Image
                      src={file.preview}
                      width={100}
                      height={100}
                      className=" object-contain rounded-lg"
                      alt=""
                    />
                  ))}
              </div>

              <div className="px-4 py-5 border border-[#E8ECEF] rounded-xl h-full w-fit text-wrap">
                <span className="text-[18px] font-semibold text-[#6E6E6E] ">
                  {/* Write Detailed case for a simple welcome criminal suit and
                 form with 3 input fields and a dropdown with 2 buttons, cancel
                 and send, then run test with multiple parties. */}
                  {mess.message}
                </span>
              </div>
              <span className="text-sm font-medium text-[#C9C9C9]">
                Just now
              </span>
            </div>
            <div className="w-full relative gap-y-2">
              <div className="px-4 py-5 bg-[#F3F5F7] rounded-xl h-full">
                <span className="text-[18px] font-semibold text-[#6E6E6E]">
                  Write Detailed case for a simple welcome criminal suit and
                  form with 3 input fields and a dropdown with 2 buttons, cancel
                  and send, then run test with multiple parties.
                </span>
              </div>
              <Image
                src={AI_PHOTO}
                className="w-[30px] h-[30px] absolute right-9 -bottom-4"
                alt=""
              />
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <Bounce className="flex flex-col">
        <div className="flex items-center gap-x-2 -mb-[4rem]">
          {selectedFiles.length > 0 &&
            selectedFiles?.map((file: any) => (
              <img
                src={file.preview}
                className="w-[50px] h-[50px] object-contain rounded-lg"
                alt=""
              />
            ))}
        </div>
        <div className="w-full relative border-2 py-2 overflow-hidden border-[#E8ECEF] rounded-2xl flex flex-col items-center h-auto mt-16 px-3">
          <textarea
            name=""
            placeholder="Type a message..."
            rows={1}
            onKeyDown={handleEnterMessage}
            value={inputMessage}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setInputMessage(e.target.value)
            }
            onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            className="w-full resize-none outline-none bg-transparent px-3 py-1"
          />

          <div className="w-full flex items-center justify-between">
            <button
              // @ts-ignore
              onClick={() => document.querySelector(".file_upload")?.click()}
            >
              <Image
                src={ADD_ICON}
                className="w-[28px] h-[28px] "
                alt="Add Icon"
              />
            </button>
            <input
              type="file"
              accept=""
              multiple
              onChange={handleFileChange}
              className="file_upload sr-only"
            />

            <button type="button" onClick={handleSend}>
              <Image
                src={SENDER}
                className={`w-[35px] h-[35px] ${
                  !inputMessage.trim() && "opacity-50"
                }`}
                alt="Sender Icon"
              />
            </button>
          </div>
        </div>
      </Bounce>
    </div>
  );
}

export default ChatSection;
