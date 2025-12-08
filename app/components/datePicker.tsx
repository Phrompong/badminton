import type { FC } from "react";
import { DatePicker } from "antd";

interface IDatePickerProps {
  name: string;
  label: string;
}

export const CustomDatePicker: FC<IDatePickerProps> = ({ name, label }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="text-lg">{label}</span>
      <DatePicker className="h-12" />
    </div>
  );
};
