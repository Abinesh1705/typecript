class User{
    private userid:string = "raj1@gmail.com";
    private upass:string ="raj@123";

    get _userid(){
        return this.userid;
    }

    set _userid(val:any){
        this.userid=val;
    }

    get _upass(){
        return this.upass;
    }

    set _upass(val:any){
        this.upass=val;
    }

    userdetails(){
        return `USERID : ${this.userid} PASSWORK : ${this.upass}`
    }

}

let uobj = new User();
console.log(uobj.userdetails());
uobj._userid="abi1714@gmail.com";
uobj._upass="abi@1234";
console.log(uobj._userid);
console.log(uobj._upass);


