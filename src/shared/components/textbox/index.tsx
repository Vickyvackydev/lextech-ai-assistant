/* eslint-disable react/jsx-sort-props */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";

import ButtonV2 from "@/shared/components/buttonV2";
import { MEDIA_ICON, SEND_ICON } from "@/utils/Exports";

interface Props {
  value: string;
  onChange: any;
  placeholder: string;
}
function TextBox(props: Props) {
  return (
    <div className="lg:w-[410px] w-[300px] h-[47px] rounded-3xl bg-[#F5F5F5] lg:ml-9 ml-4 flex justify-between items-center px-4">
      <div className="flex gap-3 lg:w-[320px] w-full">
        <ButtonV2
          btnStyle=""
          handleClick={() => {}}
          image={"/svg/media-icon.svg"}
          textStyle=""
          title=""
        />

        <textarea
          className="w-full placeholder:text-[#7E7E7E] h-full placeholder:text-sm bg-transparent resize-none overflow-auto focus:outline-none"
          onChange={props.onChange}
          placeholder={props.placeholder}
          value={props.value}
          // @ts-ignore
          rows="1"
        />
      </div>

      <div>
        <ButtonV2
          btnStyle=""
          handleClick={() => {}}
          image={"/svg/send-icon.svg"}
          textStyle=""
          title=""
        />
      </div>
    </div>
  );
}

export default TextBox;
