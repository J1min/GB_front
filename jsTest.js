function printName() {
  const name = document.getElementById("name").value;
  document.getElementById("result").innerText = name;
  $("#name").val("");
}
