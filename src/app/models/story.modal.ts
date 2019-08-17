export class Story {
    constructor(emptyStory? : boolean){
        this.createdon = new Date().getTime();
        this.author = "Matt";
        this.img = "assets/images/story-image.jpg";
    }
    id: String;
    title : String;
    summary: String;
    img: String;
    content: String;
    author: String;
    tags: String[];
    createdon: Number;
}