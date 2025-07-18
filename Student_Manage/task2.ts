interface StudentDetails{
        displaydetails();
}

class Students implements StudentDetails{
    
    private name :string ;
    private roll_no : number;
    private mark1: number;
    private mark2 : number;
    private mark3 : number;
    private grade : string = '';

    constructor(s_name : string, s_rno : number, s_m1:number, s_m2: number , s_m3 : number){
        this.name = s_name;
        this.roll_no = s_rno;
        this.mark1 = s_m1;
        this.mark2 = s_m2;
        this.mark3 = s_m3;
    }

    get sname(){
        return this.name;
    }
    get sroll(){
        return this.roll_no;
    }
    get smark1(){
        return this.mark1;
    }
    get smark2(){
        return this.mark2;
    }
    get smark3(){
        return this.mark3;
    }

    set smark1(val:any){
        this.mark1 = val;
    }
    set smark2(val:any){
        this.mark2 = val;
    }
    set smark3(val:any){
        this.mark3 = val;
    }


    total(){
        return this.smark1+this.smark2+this.smark3;
    }

    average(){
        return this.total()/3;
    }

    Grade(){
        if (this.average() >= 90) {
            this.grade = "A";
        } else if (this.average() >= 80) {
            this.grade = "B";
        } else if (this.average() >= 70) {
            this.grade = "C";
        } else if (this.average() >= 60) {
            this.grade = "D";
        } else {
            this.grade = "F";
        }
    }

    displaydetails() {
        console.log(this.name);
        console.log(this.roll_no);
        console.log(this.mark1);
        console.log(this.mark2);
        console.log(this.mark3);
        console.log(this.total());
        console.log(this.average());  
        this.Grade();
        console.log(this.grade);
        
        
    }
    
}

let studentObj = new Students("Abinesh",4720,98,89,89);
studentObj.displaydetails();
studentObj.smark1 = 21;
studentObj.smark2 = 34
studentObj.smark3 = 45;
studentObj.displaydetails();