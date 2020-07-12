var mongoose        =require('mongoose');

//=====================||
//------Schema--------=||
//=====================||
//creating the blog app schema
var orderSchema=new mongoose.Schema(
    {   created : {type:Date,default:Date.now},  
        dueDate:{type:Date,default: new Date(+new Date() + 7*24*60*60*1000)},
        title:{type:String},
        capacity:{type:Number},
       units:{type:Number,default:1},
       moc:{type:String,default:"S8"},
        remarks:{
            type:String
        },
        mainframe :{
                material:{type:String},
                quantity:{type:Number},
                thickness:{type:Number},
                width:{type:Number}

        },
   housing:{
    material:{type:String},
    quantity:{type:Number},
    thickness:{type:Number},
    weight:{type:Number},
    width:{type:Number}
   },
   shaft:{
    material:{type:String},
    quantity:{type:Number},
    diameter:{type:Number},
   },
   blade:{
    material:{type:String},
    quantity:{type:Number},
    thickness:{type:Number},
    width:{type:Number}
   },
   fastners:{
    title:{type:String},
    quantity:{type:Number},
    thickness:{type:Number},
    width:{type:Number}
   },
   feedpipe:{
    material:{type:String},
    quantity:{type:Number},
    diameter:{type:Number},
    length:{type:Number}
   },
   inventory:{
    mainframe:{type:Number,default:0},
    housing:{type:Number,default:0},
    shaft:{type:Number,default:0},
    blade:{type:Number,default:0},
    fastners:{type:Number,default:0},
    feedpipe:{type:Number,default:0},
    motor:{type:Number,default:0},
   
               
   },
   supplier:{type:String,default:"Not updated yet!"},
   purOrder:{type: String,default:"Order NOT PLACED"},
      motor:{
        power: {type: Number},
        quantity:{type:Number}
      },
      currentStatus:{type:String ,default: "UNKNOWN"},
      shortage:{
        mainframe:{type:Number,default:0},
        housing:{type:Number,default:0},
        shaft:{type:Number,default:0},
        blade:{type:Number,default:0},
        fastners:{type:Number,default:0},
        feedpipe:{type:Number,default:0},
        motor:{type:Number,default:0}

      },
      testing:{
          type:String,default:"NOT TESTED YET"
      }
    }

);
//creating model for our Blog-App
module.exports=mongoose.model("order",orderSchema);
