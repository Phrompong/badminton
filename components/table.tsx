import { FC } from "react";
import { Edit2, Trash2, CreditCard, Check } from "lucide-react";
import { updateOnlineStatus } from "@/app/actions/player";

const headers = [
  "สถานะ",
  "ชื่อ-นามสกุล",
  "ระดับ",
  "เกมที่เล่น",
  "การชำระเงิน",
  "จัดการ",
];

const rows = [
  {
    id: 1,
    status: "เช็คอิน",
    name: "สมชาย ใจดี",
    level: "กลาง",
    games: 10,
    payment: "ชำระแล้ว",
  },
  {
    id: 2,
    status: "เช็คอิน",
    name: "มะลิ ตั้งใจ",
    level: "เริ่มต้น",
    games: 5,
    payment: "ค้างชำระ",
  },
];

interface ITableProps {
  className?: string;
  handleUpdateOnlineStatus: (playerId: string, isOnline: boolean) => void;
  handleClickPayment: () => void;
  handleClickEditPlayer: () => void;
  data: any[];
}

const Table: FC<ITableProps> = ({
  data,
  className,
  handleClickPayment,
  handleClickEditPlayer,
  handleUpdateOnlineStatus,
}) => {
  return (
    <table
      className={`table-auto w-full ${className} border border-1 border-slate-200 rounded-xl`}
    >
      <thead className="bg-[#EBFDF5]">
        <tr>
          {headers.map((header) => (
            <th
              key={header}
              className="border-b border-slate-200 p-4 text-center align-middle font-medium"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr
            key={row.id}
            className="border-t border-slate-200 hover:bg-gray-50"
          >
            <td className="flex p-4 justify-center">
              <button
                onClick={() => handleUpdateOnlineStatus(row.id, !row.isOnline)}
                className={
                  !row.isOnline
                    ? "border border-slate-500 p-2 border-gray-100 rounded-md flex flex-row items-center gap-2  text-gray-600 hover:bg-gray-300 cursor-pointer"
                    : "border bg-[#00BBA0] p-2 border-gray-100 rounded-md flex flex-row items-center gap-2  text-gray-600 hover:bg-[#009E87] cursor-pointer"
                }
              >
                {!row.isOnline ? (
                  <>
                    <div className="rounded-full border border-1 p-2 w-2 h-2"></div>
                    <span>{row.isOnline ? "มาแล้ว" : "เช็คอิน"}</span>
                  </>
                ) : (
                  <>
                    <Check className="text-white" />
                    <span className="text-white">
                      {row.isOnline ? "มาแล้ว" : "เช็คอิน"}
                    </span>
                  </>
                )}
              </button>
            </td>
            <td className="p-4 text-center align-middle">{row.name}</td>
            <td className="p-4 text-center align-middle">{row.level}</td>
            <td className="p-4 text-center align-middle">{row.games}</td>
            <td className="p-4 text-center align-middle">
              {row.isPaid ? "ชำระแล้ว" : "ค้างชำระ"}
            </td>
            <td className="p-4 text-center flex justify-center align-middle flex gap-2">
              <button
                className="cursor-pointer p-1 hover:bg-[#EBFDF5] rounded-md"
                onClick={handleClickPayment}
              >
                <CreditCard className="text-[#007A55] hover:text-[#000]" />
              </button>

              <button
                className="cursor-pointer p-1 hover:bg-[#DDE6FF] rounded-md"
                onClick={handleClickEditPlayer}
              >
                <Edit2 className="text-[#5375EE] hover:text-[#000]" />
              </button>

              <button className="cursor-pointer p-1 hover:bg-[#FAD1D1] rounded-md">
                <Trash2 className="text-[#E7000B] hover:text-[#000]" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
