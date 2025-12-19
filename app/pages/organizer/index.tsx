import { Button, Divider, Modal } from "antd";
import { useState } from "react";
import OrganizerForm from "./organizerForm";
import { useNavigate } from "react-router";
import ElectricBorder from "~/components/ElectricBorder";

export default function Organizer() {
  const navigate = useNavigate();
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleCreateCompetition = () => {
    setIsModal(true);
  };

  const handleClickCard = () => {
    navigate("/organizer/player");
  };

  return (
    <>
      <div className="flex flex-col flex-wrap justify-center gap-4">
        <span className="flex justify-end">
          <Button type="primary" size="large" onClick={handleCreateCompetition}>
            สร้างการแข่งขันใหม่
          </Button>
        </span>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 justify-center gap-4">
          {values.map((value) => (
            <div
              onClick={handleClickCard}
              className="flex flex-col gap-6 border border-gray-300 rounded-lg p-4 shadow-xl w-full h-100 hover:scale-105 cursor-pointer transition-transform"
            >
              <section className="flex justify-end items-center gap-12">
                <img
                  src={
                    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXdzdzBrbzl5bXIzOHUzdDllb21pYWlmZm9tbm13enU5NjBmMXhjOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J47crA9L0GpTBsLMVK/giphy.gif"
                  }
                  alt="Cute Bear"
                  className="w-8 h-8 rounded-full"
                />
              </section>

              <section className="flex flex-col justify-start items-center mt-12 gap-12">
                <span className="text-5xl">Cute Bearer</span>
                <div className="flex gap-2">
                  <span className="text-2xl">Time</span>
                </div>
                <span className="text-md">Code</span>
              </section>
            </div>
          ))}
        </section>
      </div>

      <Modal
        title={
          <section>
            <span className="text-3xl">สร้างการแข่งขันใหม่</span>
            <Divider className="border-2 border-gray-100" />
          </section>
        }
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModal}
        onOk={() => {}}
        onCancel={() => setIsModal(false)}
      >
        <OrganizerForm />
      </Modal>
    </>
  );
}
