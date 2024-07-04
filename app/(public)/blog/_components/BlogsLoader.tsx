import { Skeleton } from "@/components/ui/skeleton";

export function BlogsLoader() {
  return (
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="w-full h-[250px]" />

      <div className="p-5 space-y-4">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-2 w-[200px]" />
        <div className="pb-3 space-y-1">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
        </div>
      </div>
    </div>
  );
}
