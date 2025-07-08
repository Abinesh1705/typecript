// STRING DATATYPE
var myName = "ABINESH";
console.log(myName);
// NUMBER DATATYPE
var no1 = 17174;
console.log(no1);
// BOOLEAN 
var cond = true;
console.log(cond);
// ARRAY DATATYPE
var courses = ["React", "Angular", "Java"];
console.log(courses[0]);
// TUPLE DATATYPE
var item = ["abinesh", 20];
console.log(item[0]);
// ENUM 
var days;
(function (days) {
    days[days["sun"] = 101] = "sun";
    days[days["mon"] = 102] = "mon";
    days[days["tue"] = 103] = "tue";
    days[days["wed"] = 104] = "wed";
    days[days["thu"] = 105] = "thu";
    days[days["fri"] = 106] = "fri";
    days[days["sat"] = 107] = "sat";
})(days || (days = {}));
;
var data1 = days.wed;
console.log(data1);
// UNION
var info = "changepond";
console.log(info);
// ANY 
var data = "ABINESH";
console.log(data);
