import EnterSessionModal from "@/components/modals/enterSessionModal";
import SessionModal from "@/components/modals/sessionFormModal";
import { KeyRound, Plus, Sparkles } from "lucide-react";
import { useState } from "react";

const Session = () => {
  const [isSessionModalOpen, setIsSessionModalOpen] = useState<boolean>(false);
  const [isEnterSessionModalOpen, setIsEnterSessionModalOpen] =
    useState<boolean>(false);
  const [isTestModalOpen, setIsTestModalOpen] = useState<boolean>(false);

  const handleClickCreateSession = () => {
    setIsSessionModalOpen(true);
  };

  const handleClickEnterSession = () => {
    setIsEnterSessionModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-12 mt-32">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-6 shadow-xl shadow-emerald-500/20">
          <Sparkles className="w-10 h-10 text-white" />
        </div>

        <span className="text-5xl text-white">เริ่มต้นเซสชันใหม่</span>
        <span className="text-2xl text-white text-center">
          สร้างเซสชันเพื่อเริ่มจัดการการเล่นแบดมินตัน
        </span>

        <div className="flex gap-4 justify-center ">
          <button
            onClick={handleClickCreateSession}
            className="w-40 h-20 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg p-2 gap-2 cursor-pointer hover:from-emerald-600 hover:to-teal-700 shadow-xl transition"
          >
            <Plus className="w-5 h-5 text-white" />
            <span className="text-white text-md">สร้างเซสชันใหม่</span>
          </button>
          <button
            onClick={handleClickEnterSession}
            className="w-40 h-20 flex items-center justify-center p-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition gap-2 cursor-pointer"
          >
            <KeyRound className="w-5 h-5" />
            <span className="text-md">เข้าสู่เซสชันที</span>
          </button>
        </div>

        <button
          onClick={() => setIsTestModalOpen(true)}
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
        >
          Open Modal
        </button>

        {isTestModalOpen && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsTestModalOpen(false);
              }
            }}
            className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
          >
            <div
              className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
                Its a simple Modal
              </div>
              <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </div>
              <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
                <button
                  onClick={() => setIsTestModalOpen(false)}
                  className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // ทำอะไรบางอย่างตอน confirm
                    setIsTestModalOpen(false);
                  }}
                  className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                  type="button"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
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
