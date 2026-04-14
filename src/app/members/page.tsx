"use client";

import { useEffect, useState } from "react";

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("https://railwayhosting144backend-production.up.railway.app/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
        📋 Members List
      </h1>

      <div className="grid gap-4 max-w-2xl mx-auto">
        {members.map((m: any) => (
          <div
            key={m.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold text-lg">{m.name}</h2>
              <p className="text-gray-500">{m.phone}</p>
            </div>

            <span className="text-green-600 font-bold">Active</span>
          </div>
        ))}
      </div>

    </div>
  );
}