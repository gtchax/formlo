import Header from "@/components/header.component";

export default async function Home() {
  return (
    <>
      <section className="">
        <div className="ml-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            Formlo | Build Beautiful Forms
          </h1>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            And own your data
          </h1>
        </div>
        <div className="mt-8 ml-24">
          <div className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Simple form builder and form analytics
          </div>
        </div>
      </section>
    </>
  );
}
