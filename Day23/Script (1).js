// Rev Schema Validation 
use Library
db.getCollectionInfos({ name: "books" })
db.books.runCommand("collMod", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["title", "author", "genre", "published_year", "price", "ratings", "tags", "publisher"],
            additionalProperties: false,
            properties: {
                _id: {
                    bsonType: "number"
                },
                "title": {
                    bsonType: "string"
                },
                "author": {
                    bsonType: "string"
                },
                "genre": {
                    bsonType: "string"
                },
                "published_year": {
                    bsonType: "number"
                },
                "price": {
                    bsonType: "number"
                },
                "ratings": {
                    bsonType: "array",
                    items: {
                        bsonType: "number"
                    }
                },
                "tags": {
                    bsonType: "array",
                    items: {
                        bsonType: "string"
                    }
                },
                "publisher": {
                    bsonType: "object",
                    properties: {
                        name: {
                            bsonType: "string"
                        },
                        location: {
                            bsonType: "string"
                        }
                    }
                },

            }
        }
    },
    validationAction : "error",
    // error  -> default
    // warn -> insert / update
    validationLevel : "moderate"
    // strict 
    // off
    // moderate
    
    
})
db.books.insertOne({
    _id: 9,
 
  "title": "Learning MongoDB",
  "author": "John Doe",
  "genre": "bhhhh",
  "price": 20000,
  "published_year": 2025,
  "publisher": {
    "name": "jjj",
    "location": "kikjkk"
  },
  "ratings": [
    1,
    5,
    6,
    3
  ],
  "tags": [
    "ggg"
  ]

})
db.books.updateOne({
    _id: 6
} , { $set : {
    price : "ddddd",
    tags : ["ggg"],
    publisher :{
        name : "jjj",
        location : "kikjkk"
    }
}})
db.adminCommand({getLog : "global"}).log.forEach(l=> {
    if(l.includes("validation")) print(l)
})
db.books.find()
////////////////////////indexing//////////////////////////////

///////////////////////data model (relationships)////////////
//////////////////////atlas/////////////////////////////////
/////////////////////aggregation pipeline//////////////////
db.courses.find()
db.books.aggregate([
 {$unwind : "$ratings"}
])
   
//}
//
////{$sort :  { price : 1}},
////{$limit : 5},
////{$skip : 1},
//{$project : {
////    in_stock : 1,
////    priceAvg : {$avg : "$price"}
////}}
//
//])
//////////////////////redis/////////////////////////////////
//
//
//
//
//
//
