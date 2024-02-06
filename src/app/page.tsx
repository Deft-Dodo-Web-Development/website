import { Button } from "@/components";

export default function Home() {
  return (
    <main className="">
      <Button />
      <div className="flex gap-10 p-10">
        <div className="size-20 bg-primary"></div>
        <div className="size-20 bg-dark"></div>
      </div>
    </main>
  );
}
