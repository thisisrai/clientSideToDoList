$("ul").on("click", "li", function() {
  $(this).toggleClass("complete")
})

$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(function() {
    $(this).remove()
  })
  event.stopPropagation()
})

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    let toDoText = $(this).val()
    $(this).val("")
    $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${toDoText}</li>`)
  }
})

$(".fa-plus").on("click", function() {
  $("input").fadeToggle(); 
})