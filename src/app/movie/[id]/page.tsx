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
      <div className="w-full h-[285px]">
        <video
          className="w-full h-full bg-black"
          autoPlay
          muted
          loop
          controls
          preload="none"
          poster={movie?.poster}
        >
          <source
            // src="https://res.cloudinary.com/dkvbk9jnb/video/upload/v1722610948/B_mpldwe.mp4"
            src="https://firebasestorage.googleapis.com/v0/b/kmovie-178ce.appspot.com/o/1.mp4?alt=media&token=b6f55293-ae9b-429c-8c87-7e9128072a81"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="mx-4 flex gap-4 bg-gray-900 rounded-xl shadow-md p-4">
        {movie && (
          <Image
            src={movie.poster}
            alt="Poster"
            width={200}
            height={250}
            className="rounded-xl h-[280px]"
          />
        )}
        <div className="space-y-2  text-center content-center">
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
