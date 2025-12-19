import { Button, Card } from "antd";
import { TextBox } from "~/components/textBox";

const OrganizerForm = () => {
  const handleSubmit = () => {};

  return (
    <div className="flex flex-col justify-center gap-8 p-2">
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

      <TextBox name="map" label="แผนที่" placeholder="แผนที่" />

      <TextBox
        name="password"
        label="รหัสผ่าน"
        placeholder="กรุณากรอกรหัสผ่าน"
      />
    </div>
  );
};

export default OrganizerForm;
