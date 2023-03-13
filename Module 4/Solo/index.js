const posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 25
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
  },
      {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
  }
]

function render (posts, post) {
  // populate artist info 
  const artistImgEl=document.getElementById("artist-pic");
  artistImgEl.innerHTML = `<img src="${posts[post].avatar}" class="artist-avatar" id="artist-avatar" alt="Young image of artist"></img>`

  const artistDescrEl=document.getElementById("artist-descr");
  artistDescrEl.innerHTML = 
  `<span class="artist-full-name">${posts[post].name}</span>
  <span class="artist-location">${posts[post].location}</span>`
  
  // populate main image
  const postImageEl=document.getElementById("main-image");
  postImageEl.innerHTML =
  `<img class="post-image" src="${posts[post].post}" alt="Artist self portrait">`

  // Populate likes
  const likesEl = document.getElementById("likes-count");
  likesEl.innerText = posts[post].likes

  // Populate caption
  const captionEl = document.getElementById("caption");
  captionEl.innerHTML =
  `<span class="username">${posts[post].username}</span>
  <span class="comment">${posts[post].comment}</span>`
}

render(posts, 2);


