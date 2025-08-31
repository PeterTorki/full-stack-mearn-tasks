db.instructors.find({salary: {$gt: 4000}}, {firstName: 1, salary: 1})

db.instructors.find({age: {$lte: 25}})

db.instructors.find()

db.instructors.find({"address.city": "mansoura", "address.street": {$in: [10, 14]}}, {firstName: 1, address: 1, salary: 1})

db.instructors.find({courses: {$all: ["js", "jquery"]}})

db.instructors.find({ courses: {$exists: true }}).forEach(instructor => print(`First Name: ${instructor.firstName} - No. courses: ${instructor.courses.length}`))

db.instructors.find({ firstName: "ebtesam" })


////////////////
let newInstructors = []

db.instructors.find({ firstName: {$exists:true}, lastName: {$exists:true} })
.sort({ firstName: 1, lastName: -1 })
.forEach(instructor => newInstructors.push({...instructor, fullName: `${instructor.firstName} ${instructor.lastName}`}))

print(newInstructors)

db.createCollection("instructorsData")

db.instructorsData.insertMany(newInstructors)
db.instructorsData.find()

db.instructorsData.find({ "fullName": /mohammed/i })

db.instructorsData.insertOne({
    "firstName" : "ebtesam",
    "lastName" : "hesham",
    "age" : NumberInt(21),
    "salary" : NumberInt(7500),
    "address" : {
        "city" : "mansoura",
        "street" : NumberInt(14),
        "building" : NumberInt(3)
    },
    "courses" : [
        "js",
        "html5",
        "signalR",
        "expressjs",
        "bootstrap"
    ]
})
db.instructorsData.find({ firstName: "ebtesam" })


db.instructorsData.deleteOne({firstName: "ebtesam", courses: {$size: 4}})

db.instructorsData.updateOne({fullName: "mazen mohammed", courses: "EF" }, { $set: { "courses.$": "jquery" } })
db.instructorsData.updateOne({fullName: "noha hesham"}, { $addToSet: { courses: "jquery" } })

db.instructorsData.deleteOne({fullName: "ahmed mohammed"}, { courses: "" })

db.instructorsData.updateMany({courses: { $size: 3 }}, { $inc: { salary: -500 } } )


db.instructorsData.updateMany({}, { $rename: { address: "fullAddress" } });

db.instructorsData.find()

db.instructorsData.updateOne({fullName: "noha hesham"}, { $set: { "fullAddress.street": 20 } })



db.instructorsData.find({ firstName: "ebtesam" }, { firstName: 1, courses: { $slice: 2 } })

db.instructorsData.insertOne({
    "firstName" : "peter",
    "lastName" : "joseph",
    "age" : NumberInt(23),
    "salary" : NumberInt(25000),
    "address" : {
        "city" : "ismaiia",
        "street" : NumberInt(14),
        "building" : NumberInt(3)
    },
    "courses" : [
        "js",
        "html5",
        "signalR",
        "expressjs",
        "bootstrap"
    ], {$position: 0}
})