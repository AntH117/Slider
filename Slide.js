window.onload = function() {
  const boxes = document.getElementsByClassName('body1Scroll');
  const boxesTwo = document.getElementsByClassName('body2Scroll');
  const boxStart = ['0px', '320px', '640px', '960px', '1280px', '1600px', '1920px', '2240px'];
  const dropF = document.getElementById('dropDown')
  const dropS = document.getElementById('dropDownS')
  function set() {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.left = boxStart[i];
    }
    for (let i = 0; i < boxesTwo.length; i++) {
      boxesTwo[i].style.left = boxStart[i];
    }
    dropF.style.height = "60px"
    dropS.style.height = "60px"
  }
  function move() {
    let moveInterval = setInterval(function() {
      for (let i = 0; i < boxes.length; i++) {
        let leftValue = parseInt(boxes[i].style.left);
        leftValue -= 1;
        boxes[i].style.left = leftValue + 'px';
        if (leftValue <= -320) {
          boxes[i].style.left = '2240px'
        }
      }
      for (let i = 0; i < boxesTwo.length; i++) {
        let leftValue = parseInt(boxes[i].style.left);
        leftValue -= 1;
        boxesTwo[i].style.left = leftValue + 'px';
        if (leftValue <= -320) {
          boxesTwo[i].style.left = '2240px'
        }
      }
    }, 15);
  }

  function slide() {
    const slider1 = document.getElementById('slider')
    const body1 = document.getElementById('Body1');

    const body2 = document.getElementById('Body2')
    const slider2 = document.getElementById('Body2Slide')

    body1.addEventListener("mousemove", function(event) {
      var mouseX = event.clientX;
      slider1.style.width = mouseX + "px"
      slider2.style.height = "0px"
    })
  }

  function slide2() {
    const body2 = document.getElementById('Body2')
    const slider2 = document.getElementById('Body2Slide')
    body2.addEventListener("mousemove", function(event) {
      var mouseY = event.clientY;
      const UpperBound = body2.getBoundingClientRect().top;
      slider2.style.height = mouseY - UpperBound + 'px';
    })

  }
  slide2();
  slide();
  set();
  move();
}


function drop() {
  const dropF = document.getElementById('dropDown')
  const dropS = document.getElementById('dropDownS')
  if (dropF.style.height == "60px"){
    dropF.style.height = "fit-content"
    dropS.style.height = "fit-content"
  } else {
    dropF.style.height = "60px"
    dropS.style.height = "60px"
  }


}
