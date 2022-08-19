const express = require('express');

const {default: mongoose} = require('mongoose')
const cors = require('cors');
const Post = require("./models/post")

const app = express();
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));
app.use(cors());

app.use("/uploads", async (req, res, next) => {
  const body = req.body;
  console.log("doing")
  try {
    const newImage = await Post.create(body);
    newImage.save();
    res.status(201).json({message: "new image uploaded", createdPost: newImage});
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
})

 mongoose.connect('mongodb+srv://<username>:<password>@sandbox.ctkei.mongodb.net/', { useUnifiedTopology: true ,  useNewUrlParser: true, dbName: "user_db_test"})
.then(console.log('database connected'))
.catch(err => err)

const PORT = 8080;
app.listen(PORT, () => {
  console.log("listening at port " + PORT);
});