const userModel = require("../models/userModel")

exports.getform = ("/form", function(req, res){
    res.render("form")
})

exports.submitform = ("/submit", async function(req, res){
    const userCreated = await userModel.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })

    res.redirect("/form")
})

exports.allusers = ("/users", async function(req, res){
    const allUsers = await userModel.find()

    res.render("allusers", {users: allUsers})
    // console.log(allUsers)
})

exports.deleteuser = ("/delete", async function(req, res){
    const deletedUser = await userModel.findOneAndDelete({
        email: req.body.email
    })

    res.redirect("/users")
})

exports.searchuser = ("/search", async function(req, res){
    const userSearched = await userModel.find({
        name: req.query.name
    })

    // res.render("allusers", {users: userSearched ? [userSearched] : []})
    res.render("allusers", {users: userSearched})

})

exports.edituser = ("/edit", async function(req, res) {
    const editedUser = await userModel.findOne({ 
        email: req.query.email
    });

    if (!editedUser) {
        return res.send("User not found");
    }

    res.render("edituser", {user: editedUser});
})

exports.updateuser = ("/update", async function(req, res) {
    const editedUser = await userModel.findOneAndUpdate({
        email: req.body.originalEmail
    },
    
    {   
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    if (!editedUser) {
        return res.send("User not found or update failed.");
    }

    res.redirect("/users");
});