const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/Feedback")

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res){
//   res.send("Go to /form");
    res.redirect("/form")
})

// Use the user routes
app.use("/", userRoutes);

app.listen(PORT, function(){
  console.log(`Server is running on http://localhost:${PORT}`);
});
