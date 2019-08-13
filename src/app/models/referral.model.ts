export class Referral {
    
    constructor(){
        let maximum = 4;
        let minimum = 1;
        this.name = "Andrew Weber";
        this.referralId = 54292;
        this.positionId = 1672;
        this.positionName = "Designer (m/f/x)";
        this.appliedOn = new Date().getTime();
        this.status = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        this.referredEmpId = 899232;
    }

    name : String;
    referralId : Number;
    positionId : Number;
    positionName: String;
    appliedOn: Number;
    status: Number;
    referredEmpId : Number;
}