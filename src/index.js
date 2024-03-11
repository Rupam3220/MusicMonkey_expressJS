const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = 3000;

// if we want to change the dir name from 'views' to 'templates' or any other name

// const templatePath = path.join(__dirname, '../templates')
// app.set("views", templatePath)

// app.get("/", (req, res) => {
//     res.render("index")
// })

//import frontend with 'express.static' middleware
app.use(express.static(path.join(__dirname, '../public')));
const templatePath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, "../templates/partials");
// app.use(express.static(staticPath))

// template/view engine setup
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

//template engine route
// index.hbs route
app.get("/", (req, res) => {
    res.render("index", {
        namech: "Rupam",
    });
});

// 404 error page || "*" is considered as universal operator
app.get("/about/*", (req, res) => {
    res.render("404", {
        errorcomment: "Page not exists into about page!",
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        errorcomment: "Page not found!",
    });
});

// about.hbs route
app.get("/about", (req, res) => {
    res.render("about")
});


// app.get("/", (req, res) => {
//     res.send("")
// })



app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`)
})