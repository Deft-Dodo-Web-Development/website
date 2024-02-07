import { Button } from "@/modules/common/components/button";

export default function Home() {
  return (
    <div className="space-y-8 pt-5">
      <section className="space-y-3">
        <h2 className="text-3xl font-semibold">Buttons</h2>
        <div className="flex gap-4">
          <Button className="flex justify-center gap-2">
            <span>default</span>
          </Button>
          <Button className="flex justify-center gap-2" variant="outline">
            <span>outline</span>
          </Button>
          <Button icon="ArrowUpRight">
            <span>Wih Icon</span>
          </Button>
        </div>
      </section>
      <section className="space-y-2">
        <h2 className="text-3xl font-semibold">Colors</h2>
        <div className="flex gap-10">
          <article className="text-center">
            <div className="size-20 bg-primary border-[3px]"></div>
            <span>Primary</span>
          </article>
          <article className="text-center">
            <div className="size-20 bg-dark border-[3px]"></div>
            <span>Dark</span>
          </article>
          <article className="text-center">
            <div className="size-20 bg-white-8 border-[3px]"></div>
            <span>White 8</span>
          </article>
          <article className="text-center">
            <div className="size-20 bg-white-16 border-[3px]"></div>
            <span>White 16</span>
          </article>
          <article className="text-center">
            <div className="size-20 bg-white-56 border-[3px]"></div>
            <span>White 56</span>
          </article>
        </div>
      </section>
      <section className="space-y-2">
        <div className="flex items-end gap-5">
          <h2 className="text-3xl font-semibold">Fonts</h2>
          <p>
            <strong>Family:</strong> Inter
          </p>
        </div>
        <div>
          <p className="text-[80px] font-normal leading-[80px]">
            Big Shoulders Display (80px)
          </p>
          <p className="text-[72px] font-normal leading-[72px]">
            Secondary Title (72px)
          </p>
          <p className="text-[32px] font-normal leading-[38px]">Title (32px)</p>
          <p className="text-[24px] font-normal leading-[38px]">
            Subtitle (24px)
          </p>
          <p className="text-[16px] text-primary">Text</p>
          <p className="text-[16px] text-white-56">Muted</p>
        </div>
      </section>
    </div>
  );
}
