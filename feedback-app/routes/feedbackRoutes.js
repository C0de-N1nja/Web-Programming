app.get("/", function(req, res){
    // res.send("HELLO!")
    res.send("go the form page!")
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
    })

    if (!editedUser) {
        return res.send("User not found");
    }

    res.render("edituser", {user: editedUser});
})

app.post("/update", async function(req, res) {
    const updatedUser = await userModel.findOneAndUpdate({ 
        email: req.body.originalEmail
    },   
    {   
        name: req.body.name, 
        email: req.body.email, 
        message: req.body.message
    })

    if (!updatedUser) {
        return res.send("User not found or update failed.");
    }

    res.redirect("/users");
})

