toggleContent
scripts.js
// function toggleContent(contentId, button) {
//     const content = document.getElementById(contentId);
//     if (content.classList.contains('hidden')) {
//         content.classList.remove('hidden');
//         button.textContent = 'Read Less';
//     } else {
//         content.classList.add('hidden');
//         button.textContent = 'Read More';
//     }
// }

// scripts.js
function showContent() {
    document.getElementById("services").style.display = "block";
   document.getElementById("readles").style.display = "block";
   document.getElementById("readmore").style.display = "none";
}

function hideContent() {
    document.getElementById("services").style.display = "none";
    document.getElementById("readles").style.display = "none";
  document.getElementById("readmore").style.display = "block";
}