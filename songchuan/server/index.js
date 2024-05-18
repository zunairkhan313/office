const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const PORT = process.env.PORT || 8080

const app = express()
app.use(cors())
app.use(express.json({limit : "10mb"}))


const schema = new mongoose.Schema({
    image: String,
})
const ShemaModel = mongoose.model("topic", schema)


app.get("/", (req, res) => {
    res.json({ message: "Server is running" })
})


app.post("/upload", async (req, res) => {
    console.log(req.body);
    const topic = new ShemaModel({
        image: req.body.img,
    })
    await topic.save()
    res.send({ message: "Topic created" , success: true })
})

mongoose.connect("mongodb+srv://zunairkhan742:iO9rcT2am2u2emEg@cluster0.tjdkfnf.mongodb.net/products")
    .then(() => {
        console.log("connect to DB");
        app.listen(PORT, () => console.log("server is running at" + PORT))
    }).catch((err) => {
        console.log(err);
    })