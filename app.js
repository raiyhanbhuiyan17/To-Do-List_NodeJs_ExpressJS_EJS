const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");//bound export our date module
 // console.log(date());

const app = express();

let items =["Buy Food","Cook Food","Eat Food"];//adding some by default value
let workItems =[];
let dueItems =[];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function (req,res){
    // res.send("Hello");
    // let day = date.getDate();
    const day = date.getDate(); //parenthesis; by calling that function  that means we activated date function

     res.render("list",{listTitle:day,newListItems: items});
    // res.render("list",{workList:day,newListItems: items});

});

app.post("/",function (req,res){
    console.log(req.body);
    // var item = req.body.newItem;
    const item = req.body.newItem;
    if(req.body.list==="Work")
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else if(req.body.list==="Due")
    {
        dueItems.push(item);
        res.redirect("/due");
    }
    else {
        items.push(item);
        res.redirect("/"); //this going to redirect home route
    }


});
app.get("/work", function (req,res){
    res.render("list",{listTitle:"Work List", newListItems:workItems})
});

// app.post("/work", function (req,res){
//
//
//     workItems.push(item);
//     res.redirect("/work");
// });
app.get("/due",function (req,res){
    console.log(req.body);
    res.render("list",{listTitle:"Due List", newListItems: dueItems});
});
// app.post("/due",function (req,res){
//    console.log(req.body);
//     dueItems.push(item);
//     res.redirect("/due");
// });
app.get("/about",function (req,res){
    res.render("about");
});

app.listen(3000,function (){
    console.log("Server started on port 3000");
});