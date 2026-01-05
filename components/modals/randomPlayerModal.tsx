"use client";
import { getAllPlayers } from "@/app/actions/player";
import { getSessionByRoomCode } from "@/app/actions/session";
import { Divider, Modal } from "antd";
import { useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

interface IRandomPlayerModalProps {
  open: boolean;
  onClose: () => void;
}

const title = () => {
  return (
    <div className="flex justify-between mt-6 items-center w-full ">
      <div className="flex flex-col">
        <span className="text-xl">Match Results</span>
        <div className="flex gap-2">
          <span className="text-xs">2 Courts</span>
          <span className="text-xs">8 Players</span>
        </div>
      </div>
      <button className=" bg-[#00A385] rounded-md p-1 w-22 cursor-pointer hover:opacity-80 ">
        <span></span>
        <span className="text-white text-xs">Random All</span>
      </button>
    </div>
  );
};

const court = [1, 2, 3, 4, 5];

const RandomPlayerModal: FC<IRandomPlayerModalProps> = ({ open, onClose }) => {
  const [session, setSession] = useState<any>();
  const [players, setPlayers] = useState<any>();
  const search = useSearchParams();
  const code = search.get("code");

  const init = async () => {
    const session = await getSessionByRoomCode(code || "");

    if (!session) return;

    const allPlayers = await getAllPlayers(session.id);

    if (allPlayers.length === 0) return;

    setPlayers(allPlayers);
    setSession(session);
  };

  useEffect(() => {
    init();
  }, [code]);

  return (
    <Modal
      title={title()}
      open={open}
      onCancel={onClose}
      width={720}
      className="overflow-y-auto"
    >
      <div className="flex flex-col mt-4">
        {/* Card */}
        {Array.from({ length: Number(session?.courtCount || 0) }).map(
          (_, courtNumber) => (
            <div
              key={courtNumber}
              className="border border-green-300 rounded-md p-2 shadow-md mb-4"
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span>COURT</span>
                  <span>#{courtNumber + 1}</span>
                </div>
                <div className="flex gap-2">
                  <button className=" border border-[#DAB2FF] rounded-md p-1 w-22 cursor-pointer hover:opacity-80 hover:bg-[#F5E1FF]">
                    <span></span>
                    <span className="text-xs text-[#8200DA]">แก้ไข</span>
                  </button>

                  <button className="border border-[#5EEAB4] rounded-md p-1 w-22 cursor-pointer hover:bg-[#E0FFF6]">
                    <span></span>
                    <span className="text-[#007A55] text-xs">Shuffle</span>
                  </button>

                  <button className="border border-[#F64100] bg-[#F64100] rounded-md p-1 w-22 cursor-pointer hover:bg-[#d93800] hover:border-[#d93800]">
                    <span></span>
                    <span className="text-white text-xs">จบเกม</span>
                  </button>
                </div>
              </div>

              <Divider style={{ borderColor: "#94a3b8" }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                <div className="flex flex-col gap-2 w-full">
                  <span className="text-[#2473FF] font-bold">TEAM A</span>
                  <div className="border border-[#D2E6FF] bg-[#F0F6FF] p-2 rounded-md flex items-center gap-4 hover:border-[#2473FF] hover:shadow-md cursor-pointer">
                    <div className="rounded-full  w-6 h-6 flex items-center justify-center text-xs bg-[#1D6BFF]">
                      <span className="text-white">1</span>
                    </div>
                    <span>ช้อป</span>
                  </div>

                  <div className="border border-[#D2E6FF] bg-[#F0F6FF] p-2 rounded-md flex items-center gap-4 hover:border-[#2473FF] hover:shadow-md cursor-pointer">
                    <div className="rounded-full  w-6 h-6 flex items-center justify-center text-xs bg-[#1D6BFF]">
                      <span className="text-white">2</span>
                    </div>
                    <span>ช้อป</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <span className="text-[#C70036] font-bold">TEAM B</span>
                  <div className="border border-[#FFDCDF] bg-[#FEF1F2] p-2 rounded-md flex items-center gap-4 hover:border-[#2473FF] hover:shadow-md cursor-pointer">
                    <div className="rounded-full  w-6 h-6 flex items-center justify-center text-xs bg-[#F6004B]">
                      <span className="text-white">1</span>
                    </div>
                    <span>ช้อป</span>
                  </div>

                  <div className="border border-[#FFDCDF] bg-[#FEF1F2] p-2 rounded-md flex items-center gap-4 hover:border-[#2473FF] hover:shadow-md cursor-pointer">
                    <div className="rounded-full  w-6 h-6 flex items-center justify-center text-xs bg-[#F6004B]">
                      <span className="text-white">2</span>
                    </div>
                    <span>ช้อป</span>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
        {/* <div className="border border-green-300 rounded-md p-2 shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span>COURT</span>
              <span>#1</span>
            </div>
            <div className="flex gap-2">
              <button className=" border border-[#DAB2FF] rounded-md p-1 w-22 cursor-pointer hover:opacity-80 hover:bg-[#F5E1FF]">
                <span></span>
                <span className="text-xs text-[#8200DA]">แก้ไข</span>
              </button>

              <button className="border border-[#5EEAB4] rounded-md p-1 w-22 cursor-pointer hover:bg-[#E0FFF6]">
                <span></span>
                <span className="text-[#007A55] text-xs">Shuffle</span>
              </button>

              <button className="border border-[#F64100] bg-[#F64100] rounded-md p-1 w-22 cursor-pointer hover:bg-[#d93800] hover:border-[#d93800]">
                <span></span>
                <span className="text-white text-xs">จบเกม</span>
              </button>
            </div>
          </div>

          <Divider style={{ borderColor: "#94a3b8" }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#2473FF] font-bold">TEAM A</span>
              <div className="border border-[#D2E6FF] bg-[#F0F6FF] p-2 rounded-md flex items-center gap-4 hover:border-[#2473FF] hover:shadow-md cursor-pointer">
                <div className="rounded-full  w-6 h-6 flex items-center justify-center text-xs bg-[#1D6BFF]">
                  <span className="text-white">1</span>
                </div>
                <span>ช้อป</span>
              </div>

              <div className="border border-[#D2E6FF] bg-[#F0F6FF] p-2 rounded-md flex items-center gap-4 hover:border-[#2473FF] hover:shadow-md cursor-pointer">
                <div className="rounded-full  w-6 h-6 flex items-center justify-center text-xs bg-[#1D6BFF]">
                  <span className="text-white">2</span>
                </div>
                <span>ช้อป</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#C70036] font-bold">TEAM B</span>
              <div className="border border-[#FFDCDF] bg-[#FEF1F2] p-2 rounded-md flex items-center gap-4 hover:border-[#2473FF] hover:shadow-md cursor-pointer">
                <div className="rounded-full  w-6 h-6 flex items-center justify-center text-xs bg-[#F6004B]">
                  <span className="text-white">1</span>
                </div>
                <span>ช้อป</span>
              </div>

              <div className="border border-[#FFDCDF] bg-[#FEF1F2] p-2 rounded-md flex items-center gap-4 hover:border-[#2473FF] hover:shadow-md cursor-pointer">
                <div className="rounded-full  w-6 h-6 flex items-center justify-center text-xs bg-[#F6004B]">
                  <span className="text-white">2</span>
                </div>
                <span>ช้อป</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Modal>
  );
};

export default RandomPlayerModal;
