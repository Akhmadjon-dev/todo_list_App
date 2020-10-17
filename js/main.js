const form = document.getElementsByTagName("form");

function formHandler(event) {
  event.preventDefault();
  const inputValue = document.querySelector("#input").value;
  const li = document.createElement("li");
  const text = document.createTextNode(inputValue);
  const ul = document.querySelector("#list_container");
  li.className = "list_item";
  li.append(text);
  ul.append(li);
  console.log(li, text, inputValue, ul);
}
