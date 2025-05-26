const express = require("express")
const userModel = require("./models/userModel")

const app = express()

const PORT = 3000

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.listen(PORT, function(req, res){
    console.log(`Server is running on http://localhost:${PORT}`)
})

app.get("/", function(req, res){
    res.redirect("/form")
})

app.get("/form", function(req, res){
    res.render("form")
})

app.post("/submit", async function(req, res){
    const userCreated = await userModel.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })

    res.redirect("/form")
})

app.get("/users", async function(req, res){
    const allUsers = await userModel.find()

    res.render("allusers", {users: allUsers})
    // console.log(allUsers)
})

app.post("/delete", async function(req, res){
    const deletedUser = await userModel.findOneAndDelete({
        email: req.body.email
    })

    res.redirect("/users")
})

app.get("/search", async function(req, res){
    const userSearched = await userModel.find({
        name: req.query.name
    })

    // res.render("allusers", {users: userSearched ? [userSearched] : []})
    res.render("allusers", {users: userSearched})

})

app.get("/edit", async function(req, res) {
    const editedUser = await userModel.findOne({ 
        email: req.query.email
    });

    if (!editedUser) {
        return res.send("User not found");
    }

    res.render("edituser", {user: editedUser});
})

app.post("/update", async function(req, res) {
    const originalEmail = req.body.originalEmail;
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const editedUser = await userModel.findOneAndUpdate(
        { email: originalEmail },
        { name: name, email: email, message: message },
        { new: true }
    );

    if (!editedUser) {
        return res.send("User not found or update failed.");
    }

    res.redirect("/users");
});

