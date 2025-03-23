import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
import { ProjectCardProps } from "@/types/project"
import Link from "next/link"
  
export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div>
            <Card className="h-[350px] p-[0] overflow-hidden border-2 border-gray transition-all duration-200 hover:border-gray-200 hover:shadow-lg">
                <Link href={`/projects/${project.id}`} className="flex h-full flex-col">
                {project.topImage && (
                    <div className="relative h-40 w-full overflow-hidden sm:h-48 md:h-[200px]">
                    <Image
                        src={project.topImage}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-md object-cover transition-transform duration-300 group-hover:scale-105"
                        priority
                    />
                    {!project.published && (
                        <div className="absolute right-2 top-2 rounded-md bg-amber-500 px-2 py-1 text-xs font-medium text-white">
                        非公開
                        </div>
                    )}
                    </div>
                )}
                <CardHeader className="pb-2 pt-2 ">
                    <CardTitle className="line-clamp-1 text-lg sm:text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="line-clamp-3 text-xs text-gray-600 sm:text-sm">{project.description}</p>
                </CardContent>
                <div className="px-6 pb-4">
                    <div className="flex justify-between text-xs text-gray-500">
                    <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>
                </Link>
            </Card>
        </div>
    )
}
  