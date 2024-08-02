import prisma from "@/db";
import Image from "next/image";
import { MovieType } from "../../../../type";

const MovieId = async ({ params }: { params: { id: string } }) => {
  const movie = await prisma.movie.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <main className="space-y-4">
      <div className="w-full h-[36vh] bg-black">
        <iframe
          className="w-full h-full"
          width="1280"
          src={`https://www.youtube.com/embed/${movie?.trailer}`}
          title="Single in Seoul | Official Main Trailer | INTL"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        {/* <video src={movie?.trailer}></video> */}
      </div>

      <div className="mx-4 flex gap-2">
        {movie && (
          <Image
            src={movie.poster}
            alt="Poster"
            width={200}
            height={350}
            className="rounded-xl"
          />
        )}
        <div className="space-y-2  text-center">
          <h2 className="text-2xl font-bold">{movie?.title}</h2>
          <p className="text-sm font-semibold">{movie?.overview}</p>
          <p className="text-md font-semibold">
            {movie?.createdAt.toLocaleDateString()}
          </p>
        </div>
      </div>
    </main>
  );
};

export default MovieId;
