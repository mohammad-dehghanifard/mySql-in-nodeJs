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
}

module.exports = Post