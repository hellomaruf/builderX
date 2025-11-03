"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/login");
    }
  }, [router]);
  // const session = getServerSession(authOptions);

  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome bro</h1>
    </div>
  );
};

export default DashboardPage;
