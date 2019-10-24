function sayHi(name) {
  return "Hello " + name;
}
$("button").click(function(e) {
  var name = $("input").val();
  e.preventDefault();
  alert(sayHi(name));
});
