import Image from "next/image";
import prisma from "../db";
import Link from "next/link";
import CustomVideoPlayer from "@/components/CustomVideoPlayer";

export default async function Home() {
  const movies = await prisma.movie.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="p-4">
      <section className="space-y-2">
        <h1 className="font-bold text-xl">KMovies</h1>
        <CustomVideoPlayer
          src="https://firebasestorage.googleapis.com/v0/b/kmovie-178ce.appspot.com/o/1.mp4?alt=media&token=b6f55293-ae9b-429c-8c87-7e9128072a81"
          poster="https://image.tmdb.org/t/p/original/vUVPHEo4ayCO4kkNV4k0PbWPmZS.jpg"
        />
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
