const defineSchema = (properties) => {
  const newProperties = {};
  properties.forEach((proper) => {
    newProperties[proper.name] = {
      bsonType: proper.type,
    };
  });
  return { ...newProperties };
};

//////////////////////////////St/////////////////////////////////////
db.createCollection("Student");
const studentSchema = [
  { name: "FirstName", type: "string" },
  { name: "LastName", type: "string" },
  { name: "IsFired", type: "boolean" },
  { name: "FacultyID", type: "boolean" },
];

db.Student.runCommand("collMod", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        ...defineSchema(studentSchema),
        courses: {
          bsonType: "array",
          items: {
            bsonType: "object",
          },
        },
      },
    },
  },
});
db.getCollectionInfos({ name: "Student" });

const dataStudents = [
  {
    FirstName: "Alice",
    LastName: "Johnson",
    IsFired: false,
    FacultyID: 1,
    Courses: [
      { CourseID: "BUS101", Grade: 60 },
      { CourseID: "MATH201", Grade: 72 },
    ],
  },
  {
    FirstName: "Brian",
    LastName: "Smith",
    IsFired: true,
    FacultyID: 2,
    Courses: [
      { CourseID: "BUS101", Grade: 60 },
      { CourseID: "MATH201", Grade: 72 },
    ],
  },
  {
    FirstName: "Clara",
    LastName: "Williams",
    IsFired: false,
    FacultyID: 3,
    Courses: [
      { CourseID: "BUS101", Grade: 60 },
      { CourseID: "MATH201", Grade: 72 },
    ],
  },
  {
    FirstName: "David",
    LastName: "Brown",
    IsFired: false,
    FacultyID: 1,
    Courses: [
      { CourseID: "BUS101", Grade: 60 },
      { CourseID: "MATH201", Grade: 72 },
    ],
  },
  {
    FirstName: "Emma",
    LastName: "Davis",
    IsFired: true,
    FacultyID: 2,
    Courses: [
      { CourseID: "BUS101", Grade: 60 },
      { CourseID: "MATH201", Grade: 72 },
    ],
  },
];

db.Students.insertMany(dataStudents);
db.Students.find({});

//////////////////////////////Faculty/////////////////////////////////////
db.createCollection("Faculty");
const facultySchema = [
  { name: "FacultyName", type: "string" },
  { name: "Fddress", type: "string" },
];

db.Faculty.runCommand("collMod", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: defineSchema(facultySchema),
    },
  },
});

db.getCollectionInfos({ name: "Faculty" });

const dataFaculty = [
  {
    FacultyID: 1,
    FacultyName: "Engineering",
    Address: "123 Innovation St, Tech City",
  },
  {
    FacultyID: 2,
    FacultyName: "Business Administration",
    Address: "45 Market Ave, Downtown",
  },
  {
    FacultyID: 3,
    FacultyName: "Arts & Humanities",
    Address: "67 Culture Rd, Old Town",
  },
];

db.Faculty.insertMany(dataFaculty);
db.Faculty.find({});

//////////////////////////////Course/////////////////////////////////////
db.createCollection("Course");

const courseSchema = [
  { name: "CourseName", type: "string" },
  { name: "FinalMark", type: "number" },
];

db.Course.runCommand("collMod", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: defineSchema(courseSchema),
    },
  },
});

db.getCollectionInfos({ name: "Course" });

const dataCourses = [
  {
    CourseID: "ENG101",
    CourseName: "Introduction to Engineering",
    FinalMark: 100,
  },
  {
    CourseID: "MATH201",
    CourseName: "Calculus II",
    FinalMark: 100,
  },
  {
    CourseID: "BUS101",
    CourseName: "Principles of Management",
    FinalMark: 100,
  },
  {
    CourseID: "HUX101",
    CourseName: "Principles of Math",
    FinalMark: 80,
  },
  {
    CourseID: "BUX101",
    CourseName: "Principles of science",
    FinalMark: 80,
  },
];

db.Courses.insertMany(dataCourses);
db.Courses.find({});

// TASk 2
db.Students.aggregate([
  {
    $project: {
      FullName: { $concat: ["$FirstName", " ", "$LastName"] },
      avgGrade: { $avg: "$Courses.Grade" },
    },
  },
]);

db.Courses.aggregate([
  {
    $group: {
      _id: "$FinalMark",
      sumOfFinalMarks: { $sum: "$FinalMark" },
    },
  },
]);

db.Students.aggregate([
  {
    $lookup: {
      from: "Courses",
      localField: "CourseId",
      foreignField: "CourseID.CourseID",
      as: "StudentsCourses",
    },
  },
  {
    $project: {
      StudentsCourses: 1,
    },
  },
]);

db.Students.aggregate([
  {
    $match: { FirstName: "Alice" },
  },
  {
    $lookup: {
      from: "Faculty",
      localField: "FacultyID",
      foreignField: "FacultyID",
      as: "StudentFaculty",
    },
  },
  {
    $project: {
      StudentFaculty: 1,
    },
  },
]);

/**
 * 📌 MongoDB Aggregation
 *
 * "Aggregate" = to collect / summarize data
 *
 * The Aggregation Framework allows you to:
 *
 * 1. Aggregate data → count, sum, avg, etc.
 * 2. Filter data → similar to WHERE
 * 3. Group data → like SQL GROUP BY
 * 4. Sort and project → choose specific fields
 * 5. Perform joins → using $lookup
 * 6. Transform data → reshape documents as needed
 */

// to use count it should be used withing the aggregate function
db.Students.aggregate([
  {
    $count: "totalStudents",
  },
]);

// count cannot be used inside $group because it's a pipeline itself, and at $group there's no $count operator unlike $sum and so on

db.Students.aggregate([
  {
    $group: {
      _id: null,
      totalStudents: { $sum: 1 },
    },
  },
]);
