'use client";';
import {
  DatePicker,
  Divider,
  Form,
  FormInstance,
  Input,
  Modal,
  TimePicker,
} from "antd";
import { useRouter, useSearchParams } from "next/navigation";

const title = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xl">สร้างเซสชันใหม่</span>
      <span className="text-xs">กรอกรายละเอียดการเล่นแบดมินตัน</span>
    </div>
  );
};

const footer = (form: FormInstance, onCancel: () => void) => {
  return (
    <>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="border border-1 p-1 rounded-md w-full border-gray-400 hover:bg-gray-100"
        >
          ยกเลิก
        </button>
        <button
          type="button"
          onClick={() => {
            form.submit();
          }}
          className="border border-1 p-1 rounded-md w-full bg-[#00986E] text-white hover:bg-[#007a53]"
        >
          สร้างเซสชัน
        </button>
      </div>
    </>
  );
};

const formItemStyle = { marginBottom: 16 };

interface ISessionModalProps {
  open: boolean;
  onCancel: () => void;
}

const SessionModal = ({ open, onCancel }: ISessionModalProps) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmitForm = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("code", "xxxx");

    router.replace(`?${params.toString()}`);
  };

  return (
    <Modal
      title={title()}
      open={open}
      onCancel={onCancel}
      footer={footer(form, onCancel)}
    >
      <div className="flex flex-col">
        <Divider />

        <Form form={form} layout="vertical" onFinish={handleSubmitForm}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <Form.Item<string>
                label="ชื่อเซสชัน"
                name="sessionName"
                style={formItemStyle}
              >
                <Input />
              </Form.Item>
              <div className="flex gap-2">
                <Form.Item<string>
                  label="วันที่"
                  name="date"
                  className="w-full"
                  style={formItemStyle}
                >
                  <DatePicker className="w-full" />
                </Form.Item>

                <Form.Item<string>
                  label="เวลา"
                  name="time"
                  className="w-full"
                  style={formItemStyle}
                >
                  <TimePicker className="w-full" />
                </Form.Item>
              </div>

              <Form.Item<string>
                label="สถานีที่"
                name="station"
                style={formItemStyle}
              >
                <Input />
              </Form.Item>

              <div className="flex gap-2">
                <Form.Item<string>
                  label="จำนวนผู้เล่น"
                  name="date"
                  className="w-full"
                  style={formItemStyle}
                >
                  <Input className="w-full" />
                </Form.Item>

                <Form.Item<string>
                  label="จำนวนสนาม"
                  name="time"
                  className="w-full"
                  style={formItemStyle}
                >
                  <Input className="w-full" />
                </Form.Item>
              </div>

              <Form.Item<string>
                label="Room Code"
                name="roomCode"
                style={formItemStyle}
              >
                <Input />
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default SessionModal;
