"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
      <Image src="/icon.ico" alt="logo" height={30} width={30} />
      <div>Jungsu Lee</div>
    </div>
  );
};

export default Logo;
