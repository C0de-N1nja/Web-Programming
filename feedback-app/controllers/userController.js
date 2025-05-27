const userModel = require("../models/userModel");

exports.getForm = function(req, res){
    res.render("form");
};

exports.submitForm = async function(req, res){
    await userModel.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    res.redirect("/form");
};

exports.getUsers = async function(req, res){
    const allUsers = await userModel.find();
    res.render("allusers", { users: allUsers });
};

exports.deleteUser = async function(req, res){
    await userModel.findOneAndDelete({
        email: req.body.email
    });
    res.redirect("/users");
};

exports.searchUser = async function(req, res){
    const userSearched = await userModel.find({
        name: req.query.name
    });
    res.render("allusers", { users: userSearched });
};

exports.getEditUser = async function(req, res){
    const editedUser = await userModel.findOne({
        email: req.query.email
    });
    res.render("edituser", { user: editedUser });
}

exports.updateUser = async function(req, res){
    await userModel.findOneAndUpdate({
        email: req.body.originalEmail
    },
    {
        name: req.body.name, 
        email: req.body.email, 
        message: req.body.message 
    })
    res.redirect("/users");
}