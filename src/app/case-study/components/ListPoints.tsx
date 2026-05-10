import React from "react";

interface ListPointsProps {
  title: string;
  challenges: string[];
}

function parseHighlight(text: string) {
  const parts = text.split(/(<highlight>.*?<\/highlight>)/g);

  return parts.map((part, index) => {
    const match = part.match(/<highlight>(.*?)<\/highlight>/);
    if (match) {
      return (
        <span key={index} className="font-semibold">
          {match[1]}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

function parsePoints(text: string) {
  const subpoints = Array.from(text.matchAll(/<point>(.*?)<\/point>/g)).map(
    (m) => m[1]
  );
  const mainText = text.replace(/<point>.*?<\/point>/g, "").trim();

  return { mainText, subpoints };
}

export default function ListPoints({ title, challenges }: ListPointsProps) {
  return (
    <div className="flex flex-col gap-16">
      <div className="h-1 bg-green-gradient w-30"></div>

      <div className="flex flex-col gap-10">
        <h3 className="text-2xl lg:text-[28px] 2xl:text-[32px] 5xl:text-[40px] font-semibold text-green-gradient">
          {title}
        </h3>

        <div className="flex flex-col gap-6">
          <ul className="pl-2 lg:pl-6 space-y-5 text-lg xl:text-xl">
            {challenges.map((text, index) => {
              const { mainText, subpoints } = parsePoints(text);

              return (
                <li key={index} className="flex flex-col gap-3">
                  {/* parent point */}
                  <div className="flex gap-4 lg:gap-8 items-start">
                    <span className="mt-2 w-3 h-3 min-w-[12px] rounded-full bg-green-gradient" />
                    <span>{parseHighlight(mainText)}</span>
                  </div>

                  {/* subpoints */}
                  {subpoints.length > 0 && (
                    <ul className="ml-8 space-y-2 text-base xl:text-lg">
                      {subpoints.map((sp, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="mt-2 w-2 h-2 min-w-[8px] rounded-full bg-black" />
                          <span>{parseHighlight(sp)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
