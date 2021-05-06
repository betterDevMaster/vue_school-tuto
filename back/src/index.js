import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import morgan from "morgan"
import httpError from "http-errors"
import routes from "./routes"
import errorHandler from "./middleware/ErrorHandler"
import config from "./config/app"
import path from "path"

const app = express()

if (process.env.NODE_ENV === "production") {
	// Set static folder
	// All the javascript and css files will be read and served from this folder
	app.use(express.static(path.join(__dirname, "build")))
	// index.html file for all page routes
	app.get("/*", function (req, res) {
		res.sendFile(path.join(__dirname, "build", "index.html"))
	})
}

const morganFormat = config.isDev ? "dev" : "combined"
app.use(morgan(morganFormat))

mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }).catch((err) => console.log("Connect Error::: ", err))

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/api", ...routes)

app.use((req, res, next) => {
	next(httpError(404))
})

app.use(errorHandler)

app.listen(config.port, () => {
	console.log(`Server started ${config.host}:${config.port} with ${morganFormat} method.`)
})
