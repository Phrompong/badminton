import { Card, Form, Input, Typography } from "antd";
import { Formik } from "formik";
import { TextBox } from "./textBox";
import { CustomDatePicker } from "./datePicker";

const OrganizerForm = () => {
  return (
    <Card
      title="ผู้จัดการแข่งขัน"
      variant="borderless"
      className="border-1 md:w-124 sm:w-96  p-12"
      size="default"
    >
      <Formik
        initialValues={{ groupName: "", organizerName: "" }}
        onSubmit={() => {}}
      >
        <div className="flex flex-col gap-8">
          <TextBox
            name="groupName"
            label="ชื่อก๊วน"
            placeholder="กรุณากรอกชื่อก๊วน"
          />

          <TextBox
            name="organizerName"
            label="ชื่อผู้จัดการแข่งขัน"
            placeholder="กรุณากรอกชื่อผู้จัดการแข่งขัน"
          />

          <CustomDatePicker name="date" label="วันที่" />
        </div>
      </Formik>
    </Card>
  );
};

export default OrganizerForm;
