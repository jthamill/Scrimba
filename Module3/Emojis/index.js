// const myEmojis = ["👨‍💻", "⛷", "🍲"];
const myEmojis = ["👨‍💻", "⛷", "🍲"];

const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")


function renderEmojis(array) {
  emojiContainer.innerHTML = "";
  emojiInput.value = "";
  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement('span');
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
  }
}

// partial re-factor. Just a test

function modifyEmojis(job) {
  if (job = "push") {
    myEmojis.push(emojiInput.value);
    renderEmojis(myEmojis);
  }
}



pushBtn.addEventListener("click", function(){
  if (emojiInput.value) {
    // myEmojis.push(emojiInput.value);
    // emojiInput.value = "";
    // renderEmojis();
    modifyEmojis("push");
  }
});


unshiftBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input");
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value);
        emojiInput.value = "";
        renderEmojis();
    }
});


popBtn.addEventListener("click", function(){
  myEmojis.pop();         
  renderEmojis();
});


shiftBtn.addEventListener("click", function(){
  myEmojis.shift();
  renderEmojis();
});

renderEmojis(myEmojis);