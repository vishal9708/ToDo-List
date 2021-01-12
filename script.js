var list = [];
//$("input[type='text'").fadeOut();

$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
})


$("ul").on("click","span",function(event){
  $(this).parent().fadeOut("500", function(){
    remove();
  })
  //to stop further click event (on li,ul,body...)
  event.stopPropagation();
})

/*
//from button adding new todo 
$("#add_button").click(function(){
  var text = $("#data").val();
  $('#data').val("")
  $('ul').append("<li> <span>X</span> " + text + "</li");
})
*/

//from keypress adding new Todo
$("input[type='text'").keypress(function(event){
  //enter key is pressed or not
  if(event.which ===13)
  {
    //adding the new todo from input
    var text = $(this).val();
    $(this).val("");
    $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + text + "</li");
  }
})

//adding plus action 
$(".fa-plus").click(function(){
  $("input[type='text'").fadeToggle();
});