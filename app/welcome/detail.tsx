import { useNavigate } from "react-router";

export const Detail = () => {
  const navigate = useNavigate();

  const onClickOrganizer = () => {
    navigate("/organizer");
  };

  const onClickUser = () => {
    navigate("/users");
  };

  return (
    <div className="">
      <div className="flex flex-wrap gap-24 items-center justify-center">
        <button
          className="w-100 h-100 px-4 py-2 border border-gray-300 hover:bg-green-100 transition cursor-pointer rounded-xl"
          onClick={onClickOrganizer}
        >
          ผู้จัด
        </button>
        <button
          className="w-100 h-100 px-4 py-2 border border-gray-300 hover:bg-green-100 transition cursor-pointer rounded-xl"
          onClick={onClickUser}
        >
          ผู้เล่น
        </button>
      </div>
    </div>
  );
};
