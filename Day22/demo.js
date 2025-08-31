//operators
//1-comparison operators
//2-logical operators
//3-Array
//4-element
//5-embeded obj

//embeded obj
db.instructors.find();
db.instructors.find({ age: 21 }); //age==21
db.instructors.find({ address: { city: "cairo", street: 20, building: 8 } }); //address=={city:"cairo"}
db.instructors.find({ "address.city": "cairo" });
db.instructors.find({}, { "address.city": 1 });
db.instructors.find({}, { address: { city: 1 } });

//comparison operators
db.instructors.find({ age: { $gte: 21 }, firstName: "noha" });
db.instructors.find({ age: 30, age: 25 });
db.instructors.find({ age: { $in: [25, 30] } });

//logical operator
db.instructors.find({ $and: [{ age: 21 }, { lastName: "hesham" }] });
db.instructors.find({ $and: [{ age: { $gt: 21 } }, { lastName: "hesham" }] });
db.instructors.insert({ id: 15, firstName: "Ahmed", salary: "hello" });
db.instructors.find();
//element
db.instructors.find().forEach((ins) => {
  print(`Name :${ins.firstName} , courses :${ins.courses?.length}`);
});

//1-exists
db.instructors.find({ courses: { $exists: true } }).forEach((ins) => {
  print(`Name :${ins.firstName} , courses :${ins.courses.length}`);
});
//2-type
db.instructors.find({ salary: { $type: "number" } });

//-Array
db.instructors.find({ courses: "js", courses: "mvc" });
db.instructors.find({ $and: [{ courses: "js" }, { courses: "mvc" }] });
//all
db.instructors.find({ courses: { $all: ["js", "mvc"] } });

//size
db.instructors.find({ courses: { $size: 5 } });

db.employees.find();
db.employees.deleteMany({});

//update("condition" ,"updateCommand" ,"options")
//1-change field value
db.instructors.updateMany({ firstName: "ebtesam" }, { $set: { salary: 9000 } });
//2-add field
db.instructors.updateMany({ firstName: "Ahmed" }, { $set: { age: 30, address: { city: "Mansoura", street: 40 } } });
//3-remove field
db.instructors.updateMany({ firstName: "Ahmed" }, { $unset: { age: "" } });
//4-rename
db.instructors.updateMany({}, { $set: { Gender: "M" } });
db.instructors.updateMany({}, { $rename: { Gender: "gender" } });
db.instructors.updateMany({ firstName: "mira", _id: 20 }, { $set: { lastName: "Ahmed" } }, { upsert: true });

//object
//1-change value
db.instructors.updateMany({ _id: 7 }, { $set: { "address.street": 10 } });
//2-add field
db.instructors.updateMany({ _id: 7 }, { $set: { "address.floor": 5 } });
//3-remove
db.instructors.updateMany({ _id: 7 }, { $unset: { "address.building": 4 } });
//rename
db.instructors.updateMany({ _id: 7 }, { $rename: { "address.floor": "address.floorNum" } });

//Array
//change value
db.instructors.updateOne({ _id: 6 }, { $set: { courses: "es6" } });
//a-change value for specified index
db.instructors.updateOne({ _id: 7 }, { $set: { "courses.0": "js" } });
//b-anonymouse
db.instructors.updateOne({ _id: 7, courses: "mvc" }, { $set: { "courses.$": "mongodb" } });

//push new element
db.instructors.updateOne({ _id: 7 }, { $push: { courses: "nodeJS" } });
db.instructors.updateOne({ _id: 7 }, { $addToSet: { courses: "html" } });

//remove
//specified elem
db.instructors.updateOne({ _id: 7 }, { $pull: { courses: "nodeJS" } });
db.instructors.updateOne({ _id: 7 }, { $pop: { courses: -1 } });
db.instructors.updateOne({ _id: 8, courses: "mvc" }, { $unset: { "courses.$": 4 } });
db.instructors.find({});

// pullAll $[]
// $every $position $slice
// $unSet==> null with array and $

//validation
//db.students.insert({})
db.createCollection("students", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["firstName", "lastName"],
      properties: {
        firstName: { bsonType: "string" },
        lastName: { bsonType: "string" },
        age: { bsonType: "number", maximum: 15 },
      },
    },
  },
});

db.getCollectionInfos({ name: "students" });
//update schema after creation
db.students.runCommand("collMod", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["firstName", "lastName"],
      additionalProperties: false,
      properties: {
        _id: { bsonType: "number" },
        firstName: {
          bsonType: "string",
        },
        lastName: {
          bsonType: "string",
        },
        age: {
          bsonType: "number",
          maximum: 15.0,
        }, //age
      }, //properties
    }, //jsonschema
  }, //validator
});
db.students.insert({
  firstName: "Omar",
  lastName: "Mohamed",
  age: 10,
  salary: 5000,
});
db.students.insert({ firstName: "nada", lastName: "Ahmed" });
db.students.find();
