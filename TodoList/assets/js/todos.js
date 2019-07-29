//Toggling the input form of the todo list

$("i:first-of-type").click(function () {
  var myClass = this.className;
  if (myClass === "fas fa-plus") {
    $("i:first").removeClass("fa-plus");
    $("i:first").addClass("fa-minus");
    $("input[type = 'text']").slideToggle(200);
  } else {
    $("i:first").removeClass("fa-minus");
    $("i:first").addClass("fa-plus");
    $("input[type = 'text']").slideToggle(200);
  }
});

//Adding a todo by entering
$("input[type = 'text']").keypress(function (event) {
  //When user hit enter
  if (event.which === 13) {
    //Taking new todo from input
    var todoText = $(this).val();
    $("ul").append('<li><span><i class="fas fa-trash-alt"></i> </span> ' + todoText + "</li>");
    $(this).val("");
  }
});
//Check off todo by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("done");
});

//Click on span to delete todo
$("ul").on("click", "span", function (event) {
  //new function ->.parent()
  $(this).parent().fadeOut(500, function () { //Here "this" keyword is refering to span
    $(this).remove(); //Here "this" is referring to li 
  });
  event.stopPropagation(); //new function
});