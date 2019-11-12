let cols = 10;
let rows = 10;
let speed = 150;
let newSpeed = 150;
let lines = false;
let zIndex = 0;
let arrBox = [];

$(document).ready(function(){
  
    $(document).on('click', '.box', function() {
      
      let bgclr = ($(this).css("background-color"));
      if (!bgclr.includes("(51,")) {
        console.log("Hit!");
      } else {
        console.log("Miss!");
      }
    
    });
 
});


function start() {    
    $('button').hide();
    
    let tempArr = [];
  
    // create grid 
    let $grid = $('.grid-container'); 
    if (!$grid.css("grid-template-columns").includes("px")) {
      $grid.css('grid-template-columns', 'repeat('+cols+', 50px)');
      $grid.css('grid-template-rows', 'repeat('+rows+', 50px)');
      for (let i=0; i<(rows*cols); i++) {
        $grid.append('<div class="box"><div class="box-'+i+' box-color"></div></div>');
        let top = $('.box-'+i).offset().top;
        $('.box-'+i).css("top", top);
        tempArr.push(i);
      }
      if (lines) {
        $('.box').css("border", "1px solid #ccc");
      }
      
      //show image
      $('.background-item').show();
      
      arrBox = shuffle(tempArr);
      console.log(arrBox);
    }
    setTimeout(function() {
      fallDown();    
    }, speed);
}



function fallDown () {  
  
  zIndex++;
  let index = arrBox[zIndex-1];
  
  $('.box-'+index).css("z-index", zIndex);
  $('.box-'+index).addClass("fall");  
  
  newSpeed = -2.95*zIndex+speed;
  if (zIndex < 101) {
    setTimeout(fallDown, newSpeed);
  } else {return};
  
}




function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



