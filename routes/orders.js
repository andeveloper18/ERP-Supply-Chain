var express= require("express");
var router=express.Router();
var Order=require("../models/orders");

//================================
//---ROUTES FOR THE WEB APP----
//===============================

//ROUTE for home page
router.get("/form",function(req,res){
   
    res.render("form");
});
router.get("/",function(req,res){
   
    res.redirect("/form");
});
router.get("/testing",function(req,res){
   
    Order.find({},function(err,order){
        if(err){ console.log(err)}
        else{
            res.render("testing",{orders:order});  //index.ejs 
        }
    });});
    router.get("/dispatch",function(req,res){
   
    res.render("dispatch");
});
router.get("/orders",function(req,res){
   
    Order.find({},function(err,order){
        if(err){ console.log(err)}
        else{
         res.render("orders",{orders:order});        //index.ejs 
        }
    });});
    router.delete("/orders/:id",function(req,res){
        //delete some blog
        //ten redirect somewhere
        Order.findByIdAndRemove(req.params.id,function(err){
            if(err){console.log(err); res.redirect("/orders");}
            else{
                res.redirect("/orders");
            }
    
        });});


//CREATE-RESTful route
router.post("/form",function(req,res){
   
    Order.create(req.body.Order,function(err,newOrder){
        if(err){console.log(err);}
        else{
            //doing something with data vars
            //to rrirect to blog page
            res.redirect("design");
          console.log(newOrder);
        }
    })
    });

  
    router.get("/design",function(req,res){
        Order.find({},function(err,order){
            if(err){ console.log(err)}
            else{
             res.render("design",{orders:order});        //index.ejs 
            }
        });});
        //UPDATE-RESTful route 
        router.put("/design/:id",function(req,res){
   
    Order.findByIdAndUpdate(req.params.id,req.body.Order,function(err,updateOrder){
            if(err){console.log(err); res.redirect("/");}
            else{
                res.redirect("/store");
            }
    })
});
    // EDIT-RESTful routes
    router.get("/design/:id/bom",function(req,res){
    Order.findById(req.params.id,function(err,oldOrder){
        if(err){console.log(err); res.redirect("/orders");}
        else{
            res.render("bom",{oldOrder:oldOrder});
        }
    })

});

router.get("/store",function(req,res){
   
    Order.find({},function(err,order){
        if(err){ console.log(err)}
        else{
            res.render("store",{orders:order});  //index.ejs 
        }
    });});
//UPDATE-RESTful route 
router.put("/store/:id",function(req,res){
   
    Order.findByIdAndUpdate(req.params.id,req.body.Order,function(err,updateOrder){
            if(err){console.log(err); res.redirect("/");}
            else{
                console.log(updateOrder);
               
                res.redirect("/purchase");
            }
    })
});
router.put("/purchase/supplier/:id",function(req,res){
   
    Order.findByIdAndUpdate(req.params.id,req.body.Order,function(err,updateOrder){
            if(err){console.log(err); res.redirect("/");}
            else{
                console.log(updateOrder);
                res.redirect("/purchase");
            }
    })
});
router.get("/purchase",function(req,res){
    Order.find({},function(err,order){
        if(err){ console.log(err)}
        else{
         res.render("purchase",{orders:order});        //index.ejs 
        }
    });});
    //DELETE-RESTFul route


    router.get("/production",function(req,res){
        Order.find({},function(err,order){
            if(err){ console.log(err)}
            else{
             res.render("production",{orders:order});        //index.ejs 
            }
        });});


        router.put("/testing/:id",function(req,res){
   
        Order.findByIdAndUpdate(req.params.id,req.body.Order,function(err,updateOrder){
                if(err){console.log(err); res.redirect("/testing");}
                else{
                    res.redirect("/testing");
                }
        })
    });
module.exports=router;