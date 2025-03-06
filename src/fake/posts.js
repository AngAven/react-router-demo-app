import {faker} from "@faker-js/faker";

const generatePost = () => {
    return {
        uid: faker.string.uuid(),
        title: faker.book.title(),
        slug: faker.lorem.slug(),
        content: faker.lorem.text(),
        author: faker.book.author(),
    }
}

const generatePosts = (number = 1) => {
    const posts = []

    for (let i = 0; i < number; i += 1){
        posts.push(generatePost())
    }

    return posts
}

export {
    generatePosts,
}