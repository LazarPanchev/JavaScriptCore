function attachEvents(){
    const kinveyAppKey='kid_ByjFyyBV7';
    const serviceUrl='https://baas.kinvey.com/appdata/'+kinveyAppKey;
    const kinveyUsername='peter';
    const kinveyPassword='p';
    const base_64=btoa(kinveyUsername+":"+kinveyPassword);
    const authHeathers={"Authorization":"Basic "+base_64};
    const posts=$('#posts');
    const postComments=$('#post-comments');

    $('#btnLoadPosts').on('click',loadPosts);
    $('#btnViewPost').on('click',viewPosts);

    function loadPosts() {
        let request={
            method:'GET',
            url:serviceUrl+'/posts',
            headers:authHeathers,
        };
        $.ajax(request).then(displayPosts).catch(displayError);
        function displayPosts(response) {
            for(let post of response){
                let option=$('<option>')
                    .text(post['title'])
                    .val(post['_id']);
                posts.append(option);
            }
        }
    }
    function viewPosts() {
        let selectedPost=posts.find(":selected");
        let selectedPostId=selectedPost.val();
        if(!selectedPostId){
            return;
        }
        let requestPosts=$.ajax({
            method:'GET',
            url:serviceUrl+'/posts/'+selectedPostId,
            headers:authHeathers
        });
        let requestComments=$.ajax({
            method:'GET',
            url:serviceUrl+`/comments/?query={"post_id":"${selectedPostId}"}`,
            headers:authHeathers,
        });

        Promise.all([requestPosts,requestComments])
            .then(displayPostAndComments)
            .catch(displayError);
    }
    function displayPostAndComments([post,comments]) {
        $('#post-title').text(post.title);
        $('#post-body').text(post.body);
        postComments.empty();
        for(let comment of comments){
            let commentItem=$('<li>')
                .text(comment.text);
            postComments.append(commentItem);
        }
    }
    function displayError(error) {
        let errorDiv=$('<div>')
            .text(`Error: ${error.status} ${error.statusText}`);
        $(document.body).prepend(errorDiv);
        setTimeout(function () {
            errorDiv.fadeOut(function () {
                errorDiv.remove();
            })
        },3000);
    }
}

                        //SECOND SOLUTION for the same task
// function attachEvents() {
//     const loadPostsBtn=$('#btnLoadPosts');
//     const selectMenuPosts=$('#posts');
//     const viewBtn=$('#btnViewPost');
//     const postTitle=$('#post-title');
//     const ulBody=$('#post-body');
//     const postComments=$('#post-comments');
//     const username='peter';
//     const password='p';
//     const BASE_64=btoa(username+':'+password);
//     const AUTH={"Authorization":"Basic "+BASE_64};
//     let URL='https://baas.kinvey.com/appdata/kid_Byrf463XQ';
//
//     loadPostsBtn.on('click',function () {
//         //get request to /posts
//         let request={
//             method: 'GET',
//             url:URL+'/posts',
//             headers:AUTH,
//             success:handleSuccess,
//             error:handleError
//         };
//         function handleSuccess(response) {
//             for(let post of response){
//                 selectMenuPosts.append($(`<option value="${post['_id']}">${post['title']}</option>`))
//             }
//         }
//         function handleError(err) {
//             console.log(err);
//         }
//         $.ajax(request)
//     })
//     viewBtn.on('click',function () {
//         //get request to /posts{postId}
//         let selectedElement=selectMenuPosts.find(':selected');
//         let selectedElText=selectedElement.text();
//         let elementId=selectedElement.attr('value');
//         let request={
//             method:'GET',
//             url:URL+`/posts/${elementId}`,
//             headers:AUTH,
//             success:function (response) {
//                 postTitle.text(response['title']);
//                 ulBody.text(response['body'])
//             },
//             error:function (err) {
//                 console.log(err);
//             }
//         }
//         $.ajax(request);
//         $.ajax({
//             method:'GET',
//             url:URL+`/comments/?query={"post_id":"${elementId}"}`,
//             headers:AUTH,
//         }).then(function (response) {
//             postComments.empty()
//             for(let comment of response){
//                 postComments.append($(`<li>${comment['text']}</li>`))
//             }
//         }).catch(function (err) {
//             console.log(err);
//         })
//     })
// }