function posts() {
    class Post{
        constructor(title,content){
            this.title=title;
            this.content=content;
        }
        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }
    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content);
            this.likes=likes;
            this.dislikes=dislikes;
            this.comments=[];
        }
        addComment(comment){
            this.comments.push(comment)
        }
        toString(){
            let commentsResult='';
                for(let comment of this.comments){
                    commentsResult+=` * ${comment}\n`;
                }

            if(this.comments.length===0){
                return `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes-this.dislikes}`;
            }else{
                return `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes-this.dislikes}\nComments:\n `+commentsResult.trim()
            }
            

        }
    }
    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content);
            this.views=views;
        }
        view(){
            this.views++;
            return this;
        }
        toString(){
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`
        }
    }
    return{
        Post,SocialMediaPost,BlogPost
    }
}

let result=posts();
let Post=result.Post;
let SocialMediaPost=result.SocialMediaPost;
let BlogPost=result.BlogPost;

// let post=new Post('Post','Content');
// console.log(post.toString());
// let scm=new SocialMediaPost('TestTitle','TestContent',25,30);
// scm.addComment('Good post');
// scm.addComment('Very good post');
// scm.addComment('Wow!');
// console.log(scm.toString());
let test = new SocialMediaPost("TestTitle", "TestContent", 5, 10);
test.addComment("1");
test.addComment("2");
test.addComment("3");
console.log(test.toString());

