import { useNavigate } from "react-router";

const marginLeft = "ml-16";
const marginRight = "mr-16";

export const Header = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <div
      className={`container-header flex items-center justify-between h-16 shadow-xl/20 `}
    >
      <button
        className={`bg-transparent border-0 p-0 cursor-pointer`}
        onClick={handleClickHome}
      >
        HOME
      </button>
      <div>X</div>
    </div>
  );
};
