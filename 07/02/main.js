const button = document.querySelector('.button');
const list = document.querySelector('.list');

function addLi() {
  const newLi = document.createElement('li');

  newLi.textContent = '2xClick - ' + Date();
  list.appendChild(newLi);
}

function doubleClick(element, doubleClickHandler, timeDistance) {
  let clicked = false;
  let prevClick = 0;

  element.addEventListener('click', function() {
    if (!clicked) {
      clicked = true;
      prevClick = event.timeStamp;
    } else if (event.timeStamp - prevClick < timeDistance) {
      doubleClickHandler();
      clicked = false;
    } else {
      prevClick = event.timeStamp;
    }
  });
}

doubleClick(button, addLi, 666);
