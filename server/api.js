var mongoClient=require("mongodb").MongoClient;
var express=require("express");
var cors=require("cors");
var bodyParser=require("body-parser");

var app=express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json());

var url="mongodb://127.0.0.1:27017";
app.get("/getproducts",function(req,res){
    mongoClient.connect(url,function(err,server){
        if(!err){
            var database=server.db("angular8");
            database.collection("tblProducts").find({}).toArray(function(err,documents){
                res.send(documents);
            })
        }
    })
})
app.post("/addproducts",function(req,res){
    mongoClient.connect(url,function(err,server){
        if(!err){
            var database=server.db("angular8");
    data={
        productId:req.body.productId,
        name:req.body.name,
        price:req.body.price,
        IsInStock:req.body.IsInStock,
        photo:req.body.photo
    }
    database.collection("tblProducts").insert(data,function(err,documents){
        if(!err){
            console.log("record inserted");
        }
    })
}
})
})

app.post("/deleteproducts",function(req,res){
   mongoClient.connect(url,function(err,server){
       if(!err)
       {
           var database=server.db("angular8");
           data={
               productId:req.body.productId
           }
           database.collection("tblProducts").remove(data,function(err,documents){
               if(!err){
                   console.log("deleted successfully");
               }
           })
       }
   })
})
app.post("/updateproducts",function(req,res){
    mongoClient.connect(url,function(err,server){
        if(!err){
          var database=server.db("angular8") ; 
          data={
               productId:req.body.productId,
               name:req.body.name,
               price:req.body.price,
               IsInStock:req.body.IsInStock,
               photo:req.body.photo
          }
          database.collection("tblProducts").updateOne(data,function(err,documents){
              if(!err){
                  console.log("updated successfully")
              }
              if(err){
                  console.log("error in update")
              }
          })
        }
    })
})
app.listen(8080)
console.log("server connected successfully");