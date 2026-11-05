// এখানে internName, age এবং isSelected হলো variable-এর নাম।

let internName = "Rafi"; // string
let age = 21; // number
let isSelected = false; // boolean

// Variable-কে একটি নামযুক্ত reference হিসেবে ভাবতে পারো, যার মাধ্যমে কোডে data ব্যবহার ও পরিবর্তন করা যায়।

var city = "Dhaka";
let score = 23;
const country = "Bangladesh";

// Reassign মানে একই variable-এ নতুন value দেওয়া। Redeclare মানে একই scope-এ একই নামে আবার declaration করা।

let score = 23;
score = 54; // valid -> reassign

const country = "Bangladesh";
country = "India"; // TypeError -> reassign

var city = "Dhaka";
var city = "Khulna"; // valid -> redeclare
