let reactions = {
  like: 20,
  love: 60,
  angry: 5,
  sad: 5,
};

function updateReaction(type) {
  reactions[type] += 1;

  document.getElementById('like-count').innerText = reactions.like + '%';
  document.getElementById('love-count').innerText = reactions.love + '%';
  document.getElementById('angry-count').innerText = reactions.angry + '%';
  document.getElementById('sad-count').innerText = reactions.sad + '%';
}

function submitComment() {
  const box = document.getElementById('commentBox');
  const commentList = document.getElementById('commentList');
  const commentText = box.value.trim();

  if (commentText === '') {
    alert('কমেন্ট লিখুন!');
    return;
  }

  const comment = document.createElement('div');
  comment.className = 'comment';
  comment.innerHTML = `
    <div class="comment-avatar"></div>
    <div>
      <div class="comment-author"><a href="author-profile.html">Nazmus Jahan Roxy</a>, ${new Date().toLocaleDateString()}</div>
      <div class="comment-text">${commentText}</div>
      <div class="comment-actions">Like 0 Dislike 0 <span class="reply">Reply</span> <span class="report">Report</span></div>
    </div>
  `;
  commentList.appendChild(comment);
  box.value = '';
}

function submitComment() {
  const box = document.getElementById('commentBox');
  const commentText = box.value.trim();

  if (commentText === '') {
    alert('Please write a comment!');
    return;
  }

  const today = new Date().toLocaleDateString();
  addCommentToList(commentText, today);
  box.value = '';

  saveComments();
}

function addCommentToList(text, date) {
  const commentList = document.getElementById('commentList');
  const comment = document.createElement('div');
  comment.className = 'comment';
  comment.innerHTML = `
    <div class="comment-avatar"></div>
    <div>
      <div class="comment-author"><a href="author-profile.html">Nazmus Jahan Roxy</a>, ${date}</div>
      <div class="comment-text">${text}</div>
      <div class="comment-actions">Like 0 Dislike 0 <span class="reply">Reply</span> <span class="report">Report</span></div>
    </div>
  `;
  commentList.appendChild(comment);
}

function saveComments() {
  const commentList = document.getElementById('commentList');
  localStorage.setItem('comments', commentList.innerHTML);
}

function loadComments() {
  const storedComments = localStorage.getItem('comments');
  if (storedComments) {
    document.getElementById('commentList').innerHTML = storedComments;
  }
}

window.onload = function () {
  loadComments();
};

function deleteComment(btn) {
  const comment = btn.closest('.comment');
  comment.remove();
  saveComments();
}
