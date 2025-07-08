"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var add_1 = require("./add");
console.log(data_1.myname);
var pobj = new data_1.person("Abinesh", 4720);
console.log(pobj.pdetails());
console.log((0, add_1.add)(20, 30));
