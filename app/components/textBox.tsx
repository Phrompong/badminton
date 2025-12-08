import { Input } from "antd";
import type { FC } from "react";

export interface TextBoxProps {
  name: string;
  label: string;
  placeholder?: string;
}

export const TextBox: FC<TextBoxProps> = ({ name, label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="text-lg">{label}</span>
      <Input name={name} placeholder={placeholder} className="h-12" />
    </div>
  );
};
