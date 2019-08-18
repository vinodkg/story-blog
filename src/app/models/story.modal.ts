export class Story {
    constructor(emptyStory?: boolean) {
        this.createdon = new Date().getTime();
        this.author = 'Matt';
        this.img = 'assets/images/story-image.jpg';
    }
    id: string;
    title: string;
    summary: string;
    img: string;
    content: string;
    author: string;
    tags: string[];
    createdon: number;
}
