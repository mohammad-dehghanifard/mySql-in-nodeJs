const db = require("../config/db")
class Post {
    constructor(title,content) {
        this.title = title
        this.content = content
    }

    async save () {
        let d = new Date()
        let yyyy = d.getFullYear()
        let mm = d.getMonth()
        let dd = d.getDay()

        let createdAt = `${yyyy}-${mm}-${dd}`

        const insertQuery = `INSERT INTO posts(title,content,created_at) VALUES ('${this.title}','${this.content}',${createdAt})`

        const newPost = await db.execute(insertQuery)

        return newPost;
    }

    static async getAll() {
        const query = "SELECT * FROM posts"
        const postList = await db.execute(query)
        return postList
    }

    static async getPostById(id) {
        const query =  "SELECT * FROM posts WHERE id = ${id}"
        const post = await  db.execute(query)
        return post
    }
}

module.exports = Post