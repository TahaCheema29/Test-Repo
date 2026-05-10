export function JobRoleSectionSkeleton() {
  return (
    <div className="flex flex-col gap-20 animate-pulse">
      <div className="h-8 w-1/2 mx-auto bg-gray-300 rounded-lg" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 xl:gap-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="p-8 lg:px-4 xl:px-8 bg-[#F3F3F3] flex flex-col gap-8 rounded-2xl h-fit"
          >
            {/* top badges */}
            <div className="flex justify-end gap-4">
              <div className="bg-white h-8 w-20 rounded-lg" />
              <div className="bg-white h-8 w-20 rounded-lg" />
            </div>

            {/* role + company */}
            <div className="flex flex-col gap-3">
              <div className="h-6 w-40 bg-gray-300 rounded-md" />
              <div className="flex justify-between items-center">
                <div className="h-6 w-32 bg-gray-300 rounded-md" />
                <div className="h-5 w-24 bg-gray-300 rounded-md" />
              </div>
            </div>

            {/* description placeholder */}
            <div className="h-20 w-full bg-gray-200 rounded-md" />

            {/* button */}
            <div className="h-10 w-32 bg-gray-400 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
