"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div className="flex gap-2 cursor-pointer" onClick={() => router.push("/")}>
      <Image src="/images/codelogo.png" alt="logo" height={25} width={25} />
      <div>Jungsu Lee</div>
    </div>
  );
};

export default Logo;
