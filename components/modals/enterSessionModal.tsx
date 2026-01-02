import { Form, Input, Modal } from "antd";
import { FC } from "react";

const title = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xl">เข้าสู่เซสชัน</span>
      <span className="text-xs">
        เข้าสู่เซสชัน กรอก Session Key เพื่อกลับเข้าสู่เซสชันของคุณ
      </span>
    </div>
  );
};

const footer = () => {
  return (
    <>
      <div className="flex gap-2">
        <button className="border border-1 p-1 rounded-md w-full border-gray-400 hover:bg-gray-100">
          ยกเลิก
        </button>
        <button className="border border-1 p-1 rounded-md w-full bg-[#00986E] text-white hover:bg-[#007a53]">
          เข้าสู่เซสชัน
        </button>
      </div>
    </>
  );
};

interface IEnterSessionModalProps {
  open: boolean;
  onCancel: () => void;
}

const EnterSessionModal: FC<IEnterSessionModalProps> = ({ open, onCancel }) => {
  return (
    <Modal title={title()} open={open} onCancel={onCancel} footer={footer()}>
      <div className="flex mt-12 w-full ">
        <Form
          className="w-full"
          layout="vertical"
          onFinish={() => {
            alert("Ok");
          }}
        >
          <Form.Item<string>
            label="Session Key"
            name="sessionKey"
            rules={[
              { required: true, message: "Please input your session key!" },
            ]}
          >
            <Input className="w-full" />
            <span className="text-xs text-gray-500">
              ใส่ key 6 ตัวอักษรที่ได้ตอนสร้างเซสชัน
            </span>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default EnterSessionModal;
