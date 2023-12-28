let emojiFaces = ["😀", "😁", "😅", "😂", "🤣", "🙂", "😉", "😊", "😘", "🥲", "😋", "😝", "🤪", "🤗", "🤭", "🫣", "🤫", "🫡", "🤨", "😐", "😏", "😒", "🙄", "😬", "🫨", "🥱","😫","😓", "😣", "😞", "😖", "😱", "😢", "🥹", "😳", "😮", "🫤", "😵", "🥴", "🤢"];

emojiEl = document.getElementById("div2-p1");

function getRandomEmoji() {
    let temp1 = Math.floor(Math.random() * emojiFaces.length);
    return emojiFaces[temp1]
}

function startGame() {
    let emoji1 = getRandomEmoji();
    let emoji2 = getRandomEmoji();
    if (emoji1 === emoji2) {
        emoji1 = getRandomEmoji();
    }
    emojiEl.textContent = emoji1 + " | " + emoji2;
}


