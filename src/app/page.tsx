import Image from "next/image";
import prisma from "../db";
import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";

export default async function Home() {
  const movies = await prisma.movie.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="p-4">
      <section className="space-y-2">
        <h1 className="font-bold text-xl">KMovies</h1>
        {/* 
        <VideoPlayer videoId="FOcZhvp4" /> */}

        <div className="grid grid-cols-3 gap-4">
          {movies.map((movie) => (
            <Link
              href={`/movie/${movie.id}`}
              className="w-full h-full rounded-xl  overflow-hidden bg-black text-center shadow-md"
              key={movie.id}
            >
              <Image
                src={movie.poster}
                alt={movie.title}
                width={300}
                height={450}
              />
              <h2 className="py-2 px-3 text-sm font-semibold">{movie.title}</h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
