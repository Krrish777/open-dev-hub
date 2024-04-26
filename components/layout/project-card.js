import Link from "next/link";
import { CardSpotlight } from "../CardSpotlight";
import NextImage from "../NextImage";
import { Star } from "lucide-react";
import { Badge } from "../ui/badge";

export default async function ProjectCard({ data }) {
  return (
    <div className="flex animate_in  flex-col gap-4">
      {data.map((el) => (
        <CardSpotlight key={el?.id} hoverEffect>
          <div className="flex flex-col gap-2" href={`/project/${el?.slug}`}>
            <div className="flex items-center gap-4 justify-between">
              <div className="flex items-center gap-4 ">
                <NextImage
                  src={el?.logo}
                  alt={el?.name}
                  height={30}
                  width={30}
                  className="rounded-full"
                />
                <Link href={`/project/${el?.slug}`}>
                  <p className="text-gray-300 font-semibold  text-lg capitalize">
                    {el?.name}
                  </p>
                </Link>
              </div>
              <Badge>
                <a
                  className="flex items-center gap-2"
                  href={el?.repo}
                  target="_blank"
                >
                  <Star className="h-4 w-4 text-gray-200" />
                  <p>{el?.stars.toLocaleString()}</p>
                </a>
              </Badge>
            </div>

            <p className="text-lg font-bold text-gradient">{el?.title}</p>
            <p className="text-gray-200">{el?.description}</p>
          </div>
        </CardSpotlight>
      ))}

      {data.length === 0 && (
        <div className="flex justify-center items-center h-[40vh]">
          <p className="text-gradient">No Projects Found</p>
        </div>
      )}
    </div>
  );
}