"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

interface Member {
  id: number;
  name: string;
  logo: string;
}

const fakeAPI = async (query: string): Promise<Member[]> => {
  // Giả lập dữ liệu API
  const allMembers: Member[] = [
    { id: 1, name: "CSE ITS Pte Ltd", logo: "/logos/cse.png" },
    { id: 2, name: "Curium", logo: "/logos/curium.png" },
    { id: 3, name: "D'Crypt Pte Ltd", logo: "/logos/dcrypt.png" },
    { id: 4, name: "Continental Automotive Singapore Pte Ltd", logo: "/logos/continental.png" },
    { id: 5, name: "CSE ITS Pte Ltd", logo: "/logos/cse.png" },
    { id: 6, name: "Curium", logo: "/logos/curium.png" },
    { id: 7, name: "D'Crypt Pte Ltd", logo: "/logos/dcrypt.png" },
    { id: 8, name: "Continental Automotive Singapore Pte Ltd", logo: "/logos/continental.png" },
    { id: 9, name: "CSE ITS Pte Ltd", logo: "/logos/cse.png" },
    { id: 10, name: "Curium", logo: "/logos/curium.png" },
    { id: 11, name: "D'Crypt Pte Ltd", logo: "/logos/dcrypt.png" },
    { id: 12, name: "Continental Automotive Singapore Pte Ltd", logo: "/logos/continental.png" },

  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allMembers.filter((m) => m.name.toLowerCase().includes(query.toLowerCase())));
    }, 500);
  });
};

export default function MemberList() {
  const [search, setSearch] = useState("");
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fakeAPI(search);
      setMembers(data);
    };

    fetchData();
  }, [search]);

  return (
    <section className="w-full max-w-[1400px] mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Thanh tìm kiếm */}
      <div className="relative w-full mb-6">
        <input
          type="text"
          placeholder="Search Member..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="absolute right-4 top-3 text-gray-500" />
      </div>

      {/* Danh sách thành viên */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.length > 0 ? (
          members.map((member) => (
            <div key={member.id} className="flex flex-col items-center space-y-2 p-4 border rounded-lg shadow-md transition hover:scale-105">
              <Image src={member.logo} alt={member.name} width={100} height={50} className="h-16 object-contain" />
              <p className="text-gray-700 text-center font-medium">{member.name}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No members found.</p>
        )}
      </div>
    </section>
  );
}
