import { Divider } from "antd";

export default function Player() {
  const players = [
    { email: "user01@mail.com", name: "User 01" },
    { email: "user02@mail.com", name: "User 02" },
    { email: "user03@mail.com", name: "User 03" },
    { email: "user04@mail.com", name: "User 04" },
    { email: "user05@mail.com", name: "User 05" },
    { email: "user06@mail.com", name: "User 06" },
    { email: "user07@mail.com", name: "User 07" },
    { email: "user08@mail.com", name: "User 08" },
    { email: "user09@mail.com", name: "User 09" },
    { email: "user10@mail.com", name: "User 10" },
    { email: "user11@mail.com", name: "User 11" },
    { email: "user12@mail.com", name: "User 12" },
    { email: "user13@mail.com", name: "User 13" },
    { email: "user14@mail.com", name: "User 14" },
    { email: "user15@mail.com", name: "User 15" },
    { email: "user16@mail.com", name: "User 16" },
    { email: "user17@mail.com", name: "User 17" },
    { email: "user18@mail.com", name: "User 18" },
    { email: "user19@mail.com", name: "User 19" },
    { email: "user20@mail.com", name: "User 20" },
    { email: "user21@mail.com", name: "User 21" },
    { email: "user22@mail.com", name: "User 22" },
    { email: "user23@mail.com", name: "User 23" },
    { email: "user24@mail.com", name: "User 24" },
    { email: "user25@mail.com", name: "User 25" },
    { email: "user26@mail.com", name: "User 26" },
    { email: "user27@mail.com", name: "User 27" },
    { email: "user28@mail.com", name: "User 28" },
    { email: "user29@mail.com", name: "User 29" },
    { email: "user30@mail.com", name: "User 30" },
    { email: "user01@mail.com", name: "User 01" },
    { email: "user02@mail.com", name: "User 02" },
    { email: "user03@mail.com", name: "User 03" },
    { email: "user04@mail.com", name: "User 04" },
    { email: "user05@mail.com", name: "User 05" },
    { email: "user06@mail.com", name: "User 06" },
    { email: "user07@mail.com", name: "User 07" },
    { email: "user08@mail.com", name: "User 08" },
    { email: "user09@mail.com", name: "User 09" },
    { email: "user10@mail.com", name: "User 10" },
    { email: "user11@mail.com", name: "User 11" },
    { email: "user12@mail.com", name: "User 12" },
    { email: "user13@mail.com", name: "User 13" },
    { email: "user14@mail.com", name: "User 14" },
    { email: "user15@mail.com", name: "User 15" },
    { email: "user16@mail.com", name: "User 16" },
    { email: "user17@mail.com", name: "User 17" },
    { email: "user18@mail.com", name: "User 18" },
    { email: "user19@mail.com", name: "User 19" },
    { email: "user20@mail.com", name: "User 20" },
    { email: "user21@mail.com", name: "User 21" },
    { email: "user22@mail.com", name: "User 22" },
    { email: "user23@mail.com", name: "User 23" },
    { email: "user24@mail.com", name: "User 24" },
    { email: "user25@mail.com", name: "User 25" },
    { email: "user26@mail.com", name: "User 26" },
    { email: "user27@mail.com", name: "User 27" },
    { email: "user28@mail.com", name: "User 28" },
    { email: "user29@mail.com", name: "User 29" },
    { email: "user30@mail.com", name: "User 30" },
  ];

  const vs = [1, 2, 3, 4, 5];

  return (
    <div className="grid grid-cols-[3fr_1fr] h-full">
      <section className="rounded-xl border border-gray-200 flex flex-col gap-4 p-4 ">
        {vs.map((item) => (
          <div className="border border-1 border-gray-300 rounded-sm p-4 grid grid-cols-[1fr_20px_1fr] gap-2">
            <div className="flex flex-col items-center justify-center">
              <span>นาย A</span>
              <Divider
                className="border border-1"
                style={{ width: 24, minWidth: 300 }}
              />
              <span>นาย B</span>
            </div>
            <div className="flex items-center justify-center">VS</div>
            <div className="flex flex-col items-center justify-center">
              <span>นาย C</span>
              <Divider
                className="border border-1"
                style={{ width: 24, minWidth: 300 }}
              />
              <span>นาย D</span>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-gray-200 p-4 flex flex-col min-h-0">
        <span className="flex justify-start text-2xl shrink-0">
          รายชื่อผู้เล่น
        </span>

        <div className="overflow-y-auto">
          {players.map((item, index) => (
            <div
              key={index}
              className="p-2 border-b border-gray-300 last:border-0"
            >
              <span>
                {item.name} ({item.email})
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
