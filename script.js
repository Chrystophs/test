function startSlider() {
  $(".slider #1").show("fade",500);
  $(".slider #1").delay(5500).hide("slide", {direction:'left'}, 500);
  var sliderInt = 1;
  var sliderNext = 2;
  var count = $(".slider img").size();

  setInterval(function(){
    $(".slider #"+sliderNext).show("slide", {direction:'right'}, 500);
    $(".slider #"+sliderNext).delay(5500).hide("slide", {direction:'left'}, 500);

    if(sliderNext == count){
      sliderNext = 1;
    }else{
      sliderNext = sliderNext + 1;
    }

function prev(){
  sliderNext = sliderNext - 1;
  showSlide(newSlide);
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

   var speed = 1000;


      var panelMinus = "svg/panelToggleMinus.svg";
      var panelPlus = "svg/panelTogglePlus.svg";
      var panelSign = panelPlus;

      if(panelSign == panelPlus){
        panelSign = panelMinus;
      }else {
        panelSign = panelPlus;
      }

   $("#panel1").click(function(){
      $(".panel1").slideToggle(speed);

      $("#panel1 img").attr('src', panelSign);

   });

   $("#q-link").click(function(){
      $(".panel2").slideToggle(speed);

      $("#q-link img").attr('src', panelSign);
   });
   $("#panel3").click(function(){
      $(".panel3").slideToggle(speed);

      $("#panel3 img").attr('src', panelSign);
   });
   $("#panel4").click(function(){
      $(".panel4").slideToggle(speed);

      $("#panel4 img").attr('src', panelSign);
   });
   $("#panel5").click(function(){
      $(".panel5").slideToggle(speed);

      $("#panel5 img").attr('src', panelSign);
   });
   $("#panel6").click(function(){
      $(".panel6").slideToggle(speed);

      $("#panel6 img").attr('src', panelSign);
   });
  }

  function toggleMenu(){
    $(".btn-menu").click(function(){
      $(".drop-nav").slideToggle(1500);
    });
  }

