import { Input } from "antd";
import type { FC } from "react";

export interface TextBoxProps {
  name: string;
  label: string;
  placeholder?: string;
  width?: string;
}

export const TextBox: FC<TextBoxProps> = ({
  name,
  label,
  placeholder,
  width,
}) => {
  return (
    <div
      className={`flex flex-col gap-4 ${width ? `w-[${width}px]` : "w-full"}`}
    >
      <span className="text-2xl">{label}</span>
      <Input name={name} placeholder={placeholder} className="h-12 shadow-xl" />
    </div>
  );
};
