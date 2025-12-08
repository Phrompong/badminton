import { useNavigate } from "react-router";

export const Detail = () => {
  const navigate = useNavigate();

  const onClickOrganizer = () => {
    navigate("/organizer");
  };

  return (
    <div>
      <div className="flex flex-wrap gap-24 items-center justify-center">
        <button
          className="w-50 h-50 rounded-full px-4 py-2 border-1 rounded hover:bg-blue-700 rounded-full transition"
          onClick={onClickOrganizer}
        >
          ผู้จัด
        </button>
        <button className="w-50 h-50 rounded-full px-4 py-2 border-1 rounded hover:bg-blue-700 transition">
          ผู้เล่น
        </button>
      </div>
    </div>
  );
};
