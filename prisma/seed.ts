import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    // DB Cleanup
    await prisma.user.deleteMany();
    await prisma.post.deleteMany();

    const hashedPassword = await bcrypt.hash("password", 12);

    // Dammy Image
    const dummyImage = [
        "https://picsum.photos/seed/post1/600/400",
        "https://picsum.photos/seed/post2/600/400"
    ];

    // Create User
    const user = await prisma.user.create({
        data: {
            email: "test01@example.com",
            name: "test01",
            password: hashedPassword,
            posts: {
                create: [
                    {
                        title: "First Post",
                        content: "This is my first post.",
                        topImage: dummyImage[0],
                        published: true
                    },
                    {
                        title: "Second Post",
                        content: "This is my second post.",
                        topImage: dummyImage[1],
                        published: true
                    }
                ]
            }
        }
    });

    console.log({ user });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });