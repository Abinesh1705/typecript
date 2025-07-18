var Students = /** @class */ (function () {
    function Students(s_name, s_rno, s_m1, s_m2, s_m3) {
        this.grade = '';
        this.name = s_name;
        this.roll_no = s_rno;
        this.mark1 = s_m1;
        this.mark2 = s_m2;
        this.mark3 = s_m3;
    }
    Object.defineProperty(Students.prototype, "sname", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "sroll", {
        get: function () {
            return this.roll_no;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "smark1", {
        get: function () {
            return this.mark1;
        },
        set: function (val) {
            this.mark1 = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "smark2", {
        get: function () {
            return this.mark2;
        },
        set: function (val) {
            this.mark2 = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "smark3", {
        get: function () {
            return this.mark3;
        },
        set: function (val) {
            this.mark3 = val;
        },
        enumerable: false,
        configurable: true
    });
    Students.prototype.total = function () {
        return this.smark1 + this.smark2 + this.smark3;
    };
    Students.prototype.average = function () {
        return this.total() / 3;
    };
    Students.prototype.Grade = function () {
        if (this.average() >= 90) {
            this.grade = "A";
        }
        else if (this.average() >= 80) {
            this.grade = "B";
        }
        else if (this.average() >= 70) {
            this.grade = "C";
        }
        else if (this.average() >= 60) {
            this.grade = "D";
        }
        else {
            this.grade = "F";
        }
    };
    Students.prototype.displaydetails = function () {
        console.log(this.name);
        console.log(this.roll_no);
        console.log(this.mark1);
        console.log(this.mark2);
        console.log(this.mark3);
        console.log(this.total());
        console.log(this.average());
        this.Grade();
        console.log(this.grade);
    };
    return Students;
}());
var studentObj = new Students("Abinesh", 4720, 98, 89, 89);
studentObj.displaydetails();
studentObj.smark1 = 21;
studentObj.smark2 = 34;
studentObj.smark3 = 45;
studentObj.displaydetails();
