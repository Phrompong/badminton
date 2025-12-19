import { Button, Card } from "antd";
import { Formik } from "formik";
import { TextBox } from "~/components/textBox";

const UserForm = () => {
  const handleSubmit = () => {};

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex items-center justify-center w-full mt-[20%]">
      <div className="flex flex-col gap-2">
        <TextBox
          label="รหัสเข้าก๊วน"
          name="search"
          placeholder="ค้นหาก๊วน"
          width="300"
        />
        <section className="w-full flex justify-end">
          <button className="ml-4  mr-2 border border-gray-300 p-2 rounded cursor-pointer hover:bg-green-500">
            เข้าร่วม
          </button>
        </section>
      </div>
    </div>
  );
};

export default UserForm;
