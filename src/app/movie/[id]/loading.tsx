import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[36vh] w-full rounded-xl" />
      <div className="mx-4 flex gap-2">
        <Skeleton className="w-[200px] h-[250px] rounded-xl" />
        <div className="space-y-2 flex flex-col items-center">
          <Skeleton className="h-10 w-[400px]" />
          <Skeleton className="h-25 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </div>
  );
}
