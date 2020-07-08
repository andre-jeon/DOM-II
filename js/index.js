// Your code goes here

// 1. dblclick
const logoHeading = document.querySelector('.logo-heading')

logoHeading.addEventListener('dblclick', () => {
    logoHeading.textContent = 'Funnier Bus🤣'
  })

// 2. wheel
document.querySelector('.footer p').addEventListener('wheel', zoomFucntion);

function zoomFucntion() {
    this.style.fontSize = '35px'
    this.textContent = 'YUH! YUH! YUH!'
}

// 3. mouseover
document.querySelector(".intro h2").addEventListener("mouseover", mouseOver);

function mouseOver() {
    document.querySelector(".intro  h2").style.color = "red";
  }

// 4. mouseout
document.querySelector(".intro  h2").addEventListener("mouseout", mouseOut);

function mouseOut() {
    document.querySelector(".intro  h2").style.color = "black";
    }

// 5. keydown
document.addEventListener('keydown', logKey);
let keyDownTesting = document.querySelector('.text-content')

function logKey(e) {
    keyDownTesting.textContent = `${e.code}`;
}

// 6. click
document.querySelector(".nav-link").addEventListener("click", navFocusFunction);

function navFocusFunction() {
  document.querySelector(".nav-link").style.fontSize = "100px";
}

// 7. scroll
// document.addEventListener("scroll", scrollFunction);

// function scrollFunction() {
//   alert("You scrolled!")
// }

// 8. drag
document.addEventListener("dragstart", dragFunction)

function dragFunction(){
    alert("You dragged!")
}

// 9.



// 10.