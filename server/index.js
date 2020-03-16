if (process.env.NODE_ENV === `test` || process.env.NODE_ENV === `development`) {
    require(`dotenv`).config()
}
const express = require(`express`)
const app = express()
const port = process.env.PORT || 3000
const cors = require(`cors`)

const router = require(`./routes`)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get(`/`, router)


app.listen(port, () => console.log(`Jamming in Port ${port}`))

module.exports = app