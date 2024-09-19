const quotes = {
  all: [
    "Life is what happens when you're busy making other plans. – John Lennon",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "It is never too late to be what you might have been. – George Eliot",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "The best way to predict the future is to invent it. – Alan Kay",
  ],
  "thought-provoking": [
    "The unexamined life is not worth living.",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "You are not a drop in the ocean. You are the entire ocean, in a drop.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
  ],
  motivational: [
    "Don’t stop when you’re tired. Stop when you’re done.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t limit your challenges. Challenge your limits.",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    "Wake up with determination. Go to bed with satisfaction.",
  ],
  inspiring: [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The best way to predict the future is to create it.",
    "Don't watch the clock; do what it does. Keep going.",
    "It always seems impossible until it's done.",
  ],
};

function generateQuote() {
  let category = document.getElementById("category_select").value;

  let categoryQuotes = quotes[category];

  let randomQuote =
    categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];

  document.getElementById("box2").innerHTML = randomQuote;
}

document.querySelector("button").onclick = generateQuote;
