export class BlogPost {
    id:number;
    title: string;
    description: string;
    link: string;

    constructor(id: number, title: string, description: string, link: string, ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.link = link;
    }
}
