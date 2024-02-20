$(document).ready(function () {
    const commentForm = $('#comment-form');
    const commentsList = $('#comments-list');

    commentForm.submit(function (event) {
        event.preventDefault();

        const commentText = $('#Comment').val();

        if (commentText.trim() !== '') {
            addComment(commentText, commentsList);
            commentForm[0].reset();
        }
    });

    const secondCommentForm = $('#second-comment-form');
    const secondCommentsList = $('#second-comments-list');

    secondCommentForm.submit(function (event) {
        event.preventDefault();

        const secondCommentText = $('#SecondComment').val();

        if (secondCommentText.trim() !== '') {
            addComment(secondCommentText, secondCommentsList);
            secondCommentForm[0].reset();
        }
    });

    function addComment(commentText, list) {
        const commentItem = $('<li>').addClass('comment').text(commentText);

        list.append(commentItem);
    }
});