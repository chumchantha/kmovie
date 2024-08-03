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
      <div className="w-full h-[36vh]">
        {/* <iframe
          className="w-full h-full"
          width="1280"
          // src={`https://www.youtube.com/embed/${movie?.trailer}`}
          src={`https://streamable.com/e/q72dfk`}
          title="Single in Seoul | Official Main Trailer | INTL"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe> */}
        <iframe
          src="https://streamable.com/e/q72dfk?quality=highest"
          frameBorder="0"
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>

        {/* <video
          className="w-full h-full bg-gray-900"
          autoPlay
          muted
          loop
          controls
          preload="none"
        >
          <source
            // src="https://res.cloudinary.com/dkvbk9jnb/video/upload/v1722610948/B_mpldwe.mp4"
            // src="https://firebasestorage.googleapis.com/v0/b/kmovie-178ce.appspot.com/o/B.mp4?alt=media&token=0aeca2f2-b34c-4616-a364-cdc39d912439"
            type="video/mp4"
          />
        </video> */}
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
