import { Divider, Form, FormInstance, Input, Modal } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";
interface ISettingModalProps {
  open?: boolean;
  onCancel?: () => void;
}

const title = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-2xl font-semibold text-gray-900">Settings</span>
      <span className="text-xs text-gray-600">
        จัดการการตั้งค่าและข้อมูลของระบบ
      </span>
    </div>
  );
};

const footer = () => {
  return (
    <div className="flex gap-2">
      <button className="border border-1 p-1 rounded-md w-full border-gray-400 hover:bg-gray-100">
        ยกเลิก
      </button>
      <button className="border border-1 p-1 rounded-md w-full bg-[#00986E] text-white hover:bg-[#007a53]">
        บันทึกการตั้งค่า
      </button>
    </div>
  );
};

const formItemStyle = { marginBottom: 8 };

const SettingModal: FC<ISettingModalProps> = ({ open = false, onCancel }) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmitForm = () => {};

  const handleClickNewSession = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("code", "");

    router.replace(`?${params.toString()}`);

    onCancel?.();
  };

  return (
    <Modal
      title={title()}
      open={open}
      onCancel={onCancel}
      footer={footer()}
      className="overflow-y-auto"
    >
      <Form layout="vertical" onFinish={handleSubmitForm}>
        <div className="flex flex-col gap-4 mt-6">
          <span className="text-xl">Game Setting</span>

          <div className="flex flex-col">
            <Form.Item<string>
              label="จำนวนสนาม"
              name="numberOfCourts"
              style={formItemStyle}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<string>
              label="ค่าเล่นต่อเกม (บาท)"
              name="amountPerGame"
              style={formItemStyle}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<string>
              label="ค่าลูกขนไก่ (บาท)"
              name="shuttlecockPrice"
              style={formItemStyle}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <div className="border border-green-400 rounded-md bg-green-50 p-4 flex flex-col gap-2">
              <span>สรุปค่าใช้จ่ายต่อเกม</span>
              <div className="flex justify-between">
                <span>ค่าเล่น</span>
                <span>100 บาท</span>
              </div>

              <div className="flex justify-between">
                <span>ค่าลูกขนไก่</span>
                <span>100 บาท</span>
              </div>

              <div className="border border-green-200"></div>

              <div className="flex justify-between">
                <span>รวมทั้งหมด</span>
                <span>150 บาท</span>
              </div>
            </div>

            <Divider style={{ borderColor: "#94a3b8" }} />

            <div className="flex flex-col gap-4">
              <span className="text-xl text-[#82181A]">Danger Zone</span>

              <div className="border border-[#FFCACA] rounded-md bg-[#FFF3F0] p-4 flex flex-col gap-4">
                <span className="text-[#82181A] font-bold">
                  เริ่มเซสชันใหม่
                </span>
                <span className="text-[#DB6362] text-xs">
                  การดำเนินการนี้จะลบข้อมูลทั้งหมด รวมถึงรายชื่อผู้เล่น,
                  การเช็คอิน, ข้อมูลการชำระเงิน และผลการแข่งขันทั้งหมด
                  ไม่สามารถกู้คืนได้
                </span>

                <button
                  onClick={handleClickNewSession}
                  className="w-full p-2 border border-[#DB6362] rounded-md hover:bg-[#FFEBEB] transition cursor-pointer"
                >
                  <span className="text-[#DB6362] font-bold">
                    เริ่มเซสชันใหม่
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default SettingModal;
