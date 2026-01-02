import EnterSessionModal from "@/components/modals/enterSessionModal";
import SessionModal from "@/components/modals/sessionFormModal";
import { KeyRound, Plus, Sparkles } from "lucide-react";
import { useState } from "react";

const Session = () => {
  const [isSessionModalOpen, setIsSessionModalOpen] = useState<boolean>(false);
  const [isEnterSessionModalOpen, setIsEnterSessionModalOpen] =
    useState<boolean>(false);

  const handleClickCreateSession = () => {
    setIsSessionModalOpen(true);
  };

  const handleClickEnterSession = () => {
    setIsEnterSessionModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-12 gap-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-6 shadow-xl shadow-emerald-500/20">
          <Sparkles className="w-10 h-10 text-white" />
        </div>

        <span className="text-4xl">เริ่มต้นเซสชันใหม่</span>
        <span>สร้างเซสชันเพื่อเริ่มจัดการการเล่นแบดมินตัน</span>

        <div className="flex gap-2">
          <button
            onClick={handleClickCreateSession}
            className="flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg p-6 gap-2 w-46 cursor-pointer "
          >
            <Plus className="w-5 h-5 text-white" />
            <span className="text-white">สร้างเซสชันใหม่</span>
          </button>
          <button
            onClick={handleClickEnterSession}
            className="flex items-center justify-center px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition w-46 gap-2 cursor-pointer"
          >
            <KeyRound className="w-5 h-5" />
            <span>เข้าสู่เซสชันที</span>
          </button>
        </div>
      </div>

      <SessionModal
        open={isSessionModalOpen}
        onCancel={() => setIsSessionModalOpen(false)}
      />

      <EnterSessionModal
        open={isEnterSessionModalOpen}
        onCancel={() => setIsEnterSessionModalOpen(false)}
      />
    </>
  );
};

export default Session;
