import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="p-2 space-y-2">
        <h1 className="text-4xl font-bold">DNDSuite</h1>
        <p>A modern toolset for the world's greatest roleplaying game.</p>
        <p>
          This site is still under construction. Please check back later or
          follow the development progress on{" "}
          <a
            href="https://github.com/zuedev/dndsuite.zue.dev"
            className="underline text-blue-500 hover:text-blue-700"
          >
            GitHub
          </a>
          .
        </p>
      </main>
    </>
  );
}
