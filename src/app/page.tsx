import prisma from "@/lib/prisma";
import { log } from "console";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1 className="text-2xl text-blue-500 mb-5">Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
