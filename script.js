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
    $(".button").click(function(){
      $(".panel").slideToggle(1000);
    });
  }



/*$(function() 
{
  $(".slider ul")
  .cycle({
    prev:   '.slider .controls .prev', 
      next:   '.slider .controls .next',
    timeout: 3000,
    pager:   '.slider .controls .pages',
        pagerAnchorBuilder: pagerFactory,
    before: function(Ec, En, o, f) 
    {     
      var classTarget = $(Ec);
      var nextClassTarget = $(En);
      
      classTarget = classTarget.context.attributes.rel.value;
      nextClassTarget = nextClassTarget.context.attributes.rel.value;
      
      $('.slider .controls .' + classTarget).removeClass('selected');
      $('.slider .controls .' + nextClassTarget).addClass('selected');
    }
  });
  
  // Pager Function
  function pagerFactory(idx, slide) 
  {
    var selected = (idx == 0 ? 'selected' : null);
    return '<img src="images/blank.gif" width="13" height="14" class="number '+ selected + ' ' + parseInt(idx+1)+'" />';
    };
});*/