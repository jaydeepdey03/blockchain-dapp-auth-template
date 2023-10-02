"use client";
import {useRouter} from "next/navigation";
import {Button} from "../components/ui/button";
export default function Home() {
  const router = useRouter();
  return (
    <div
      className="h-screen w-screen flex justify-center items-center flex-col"
      suppressHydrationWarning
    >
      <p className="font-bold text-6xl m-4">Thirdweb Auth</p>
      <Button onClick={() => router.push("/connectwallet")}>Get Started</Button>
    </div>
  );
}
