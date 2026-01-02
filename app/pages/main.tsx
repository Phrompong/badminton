import { TextInput } from "@/components/textInput";
import { Copy, Users } from "lucide-react";
import Card from "@/components/card";

const cards = [
  { title: "Total Players", total: 120 },
  { title: "Present", total: 85 },
  { title: "Paid", total: 15 },
  { title: "Unpaid", total: 3 },
  { title: "Courts", total: 10 },
];

const Main = () => {
  return (
    <>
      <div className="flex justify-center h-[56px]">
        <TextInput className="w-[50%]" />
      </div>
      <div className="flex justify-center">
        <div className="flex items-center gap-4 flex border border-slate-200 border-2 p-2 rounded-xl hover:shadow-lg">
          <div className="flex gap-2 items-center">
            <Users className="w-4 h-4 text-slate-500" />
            <span className="text-[#62748E]">0/0</span>
          </div>
          <span className="text-[#62748E]">|</span>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <span className="text-[#62748E]">#</span>
              <span className="text-[#62748E]">xxx</span>
            </div>
            <Copy className="w-3.5 h-3.5 text-slate-500 hover:text-slate-700" />
          </div>
        </div>
      </div>
      <section className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8 justify-stretch">
        {cards.map(({ title, total }) => (
          <Card key={title} title={title} total={total} />
        ))}
      </section>
      {/* Table Section */}
      {/* <Table
        data={data}
        className="hidden lg:table"
        handleClickPayment={handleClickPayment}
        handleClickEditPlayer={handleClickEditPlayer}
      />
      <TableMobile
        data={data}
        className="block lg:hidden"
        handleClickPayment={handleClickPayment}
        handleClickEditPlayer={handleClickEditPlayer}
      /> */}
    </>
  );
};

export default Main;
