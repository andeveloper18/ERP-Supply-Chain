var express         =require("express");
var app             =express();
var mongoose        =require('mongoose');
var overrideMethod  =require('method-override');
var bodyParser      =require("body-parser");
var Order=require("./models/orders");
var orderRoutes=require("./routes/orders");
//connect database to mongo namong the db to "blog_app"
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

mongoose.connect("mongodb://localhost:27017/order",{ useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended:true}));
app.use(overrideMethod("_method"));
app.set("view engine","ejs");

app.use(orderRoutes);



//app is listning 
app.listen(3000,process.env.IP,function(){
    console.log("Server is On!");
});