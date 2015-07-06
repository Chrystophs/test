function startSlider() {
  $(".slider #1").show("fade",500);
  $(".slider #1").delay(5500).hide("slide", {direction:'left'}, 500);
  var sliderInt = 1;
  var sliderNext = 2;
  var count = $(".slider img").size();

  slideInterval = setInterval(function(){
    $(".slider #"+sliderNext).show("slide", {direction:'right'}, 500);
    $(".slider #"+sliderNext).delay(5500).hide("slide", {direction:'left'}, 500);

    if(sliderNext == count){
      sliderNext = 1;
    }else{
      sliderNext = sliderNext + 1;
    }

function prev(){
  sliderNext = sliderNext - 1;
  return false;
}
function next(){
  newSlide = sliderInt +1;
  showSlide(newSlide);
}

function showSlide(id){
  if(id > count){
    id = 1;
  }else if(id < 1){
    id = count;
  }

    $(".slider #"+id).show("slide", {direction:'right'}, 500);
    $(".slider #"+id).hide("slide", {direction:'left'}, 500);
    sliderInt = id;
    sliderNext = id + 1;
}

  },6500);
}


  function Panels(){
   $(function(){
    $("#accordion").accordion();
   })
  }

  function toggleMenu(){
    $(".btn-menu").click(function(){
      $(".drop-nav").slideToggle(1500);
    });
  }

