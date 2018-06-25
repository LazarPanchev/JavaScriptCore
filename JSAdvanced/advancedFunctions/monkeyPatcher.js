function patch(input){
    switch (input){
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            let rating='new';
            let currUpvotes=this.upvotes;
            let currDownvotes=this.downvotes;
            let totalVotes=currUpvotes+currDownvotes;
            let balance=currUpvotes-currDownvotes;
            if(totalVotes>=10){
                if(currUpvotes>0.66*totalVotes){
                    rating='hot';
                }else if(balance<0){
                    rating='unpopular'
                }else if(currUpvotes>100 || currDownvotes>100){
                    rating='controversial';
                }
            }

            if(totalVotes>50){
                let addNumber=Math.ceil(0.25*Math.max(currUpvotes,currDownvotes));
                currUpvotes+=addNumber;
                currDownvotes+=addNumber;

            }
            return [currUpvotes,currDownvotes,balance,rating]
    }
}
let forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

patch.call(forumPost, 'upvote');
let answer = patch.call(forumPost, 'score');
console.log(answer);//let expected = [1, 0, 1, 'new'];

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
patch.call(post, 'upvote');
patch.call(post, 'downvote');
let score = patch.call(post, 'score');
console.log(score);// [127, 127, 0, 'controversial']
patch.call(post, 'downvote'); // (executed 50 times)
score = patch.call(post, 'score');
console.log(score);// [139, 189, -50, 'unpopular']