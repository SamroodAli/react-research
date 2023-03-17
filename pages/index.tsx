import Head from "next/head";
import Link from "next/link";

const links = ["state-batching", "strict-mode-double-invocation"];

export default function Home() {
  return (
    <>
      <Head>
        <title>React Research</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-violet-200 h-screen">
        <h1 className="text-center p-4">Experiments and Exercises</h1>
        {links.sort().map((link, index) => (
          <Link
            key={link}
            href={`/experiments/${link}`}
            className="block m-2 underline"
          >
            {`${index + 1}. ${link}`}
          </Link>
        ))}
      </main>
    </>
  );
}
