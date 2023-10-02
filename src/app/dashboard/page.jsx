"use client";

import {ModeToggle} from "@/components/Toggletheme";
import {Button} from "@/components/ui/button";
import {
  useAddress,
  useChain,
  useDisconnect,
  useNetworkMismatch,
} from "@thirdweb-dev/react";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {toast} from "@/components/ui/use-toast";

export default function Dashboard() {
  const chain = useChain();
  const router = useRouter();
  const address = useAddress();
  const isMismatch = useNetworkMismatch();
  const disconnect = useDisconnect();

  useEffect(() => {
    if (!address) {
      router.push("/connectwallet");
    }
    if (address && isMismatch) {
      router.push("/switchnetwork");
    }
  }, [address, isMismatch, router]);

  const Disconnect = async () => {
    await disconnect();
    router.push("/connectwallet");
    toast({
      title: "Disconnected",
      description: "Wallet disconnected successfully",
    });
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <div className="absolute top-5 right-10">
        <div className="flex space-x-5">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">
                {address && address.slice(0, 5) + "...." + address.slice(-4)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={Disconnect}>
                <p className="text-red-400">Disconnect</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>
      <div>{chain && chain.name}</div>
    </div>
  );
}
