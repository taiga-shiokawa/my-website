export type Project = {
    id: string,
    title: string,
    description: string,
    url: string,
    topImage: string | null,
    createdAt: Date,
    author: {
        name: string
    }
}

export type ProjectCardProps  = { project: Project }