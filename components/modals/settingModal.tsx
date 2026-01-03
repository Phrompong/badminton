"use client";

import { getSessionByRoomCode, patchSession } from "@/app/actions/session";
import { Divider, Form, FormInstance, Input, message, Modal } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
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

const footer = (form: FormInstance) => {
  return (
    <div className="flex gap-2">
      <button className="border border-1 p-1 rounded-md w-full border-gray-400 hover:bg-gray-100">
        ยกเลิก
      </button>
      <button
        onClick={() => {
          form.submit();
        }}
        className="border border-1 p-1 rounded-md w-full bg-[#00986E] text-white hover:bg-[#007a53]"
      >
        บันทึกการตั้งค่า
      </button>
    </div>
  );
};

const formItemStyle = { marginBottom: 8 };

const SettingModal: FC<ISettingModalProps> = ({ open = false, onCancel }) => {
  const [form] = Form.useForm();
  const search = useSearchParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = search.get("code");
  const [sessionData, setSessionData] = useState<any>();

  const handleSubmitForm = async (values: any) => {
    await patchSession({
      sessionId: sessionData.id,
      courtCount: Number(values.courtCount),
      amountPerGame: Number(values.amountPerGame),
    });

    message.success("บันทึกการตั้งค่าเรียบร้อยแล้ว");
    onCancel?.();
  };

  const handleClickNewSession = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("code", "");

    router.replace(`?${params.toString()}`);

    onCancel?.();
  };

  const init = async () => {
    const session = await getSessionByRoomCode(code || "");

    if (!session) return;

    form.setFieldsValue({
      courtCount: session.courtCount,
      amountPerGame: session.amountPerGame,
    });

    setSessionData(session);
  };

  useEffect(() => {
    if (!open) return;

    init();
  }, [open, form]);

  return (
    <Modal
      title={title()}
      open={open}
      onCancel={onCancel}
      footer={footer(form)}
      className="overflow-y-auto"
    >
      <Form form={form} layout="vertical" onFinish={handleSubmitForm}>
        <div className="flex flex-col gap-4 mt-6">
          <span className="text-xl">Game Setting</span>

          <div className="flex flex-col">
            <Form.Item<number>
              label="จำนวนสนาม"
              name="courtCount"
              style={formItemStyle}
              rules={[
                {
                  required: true,
                  message: "Please input the number of courts!",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item<number>
              label="ค่าเล่นต่อเกม (บาท)"
              name="amountPerGame"
              style={formItemStyle}
              rules={[
                {
                  required: true,
                  message: "Please input your amount per game!",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>

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
