import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
// import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h2>Aditya Gaikar</h2>
      <Button>Click me</Button>

      <UserButton/>
    </div>
  );
}