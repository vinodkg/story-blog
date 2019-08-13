export class Position {
    constructor() {
        let maximum = 3;
        let minimum = 1;
        this.postionId = 4232;
        this.positionName = "Designer (m/f/x)";
        this.postedon = new Date().getTime();
        this.location = "Munich, Bavaria, Germany";    
        this.department = "Product";
        this.status = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

    }
    
    postionId : Number;
    positionName : String;
    postedon: Number;
    location: String;
    department: String;
    status: Number;
}