var alert = prompt("Enter your name");

var heading = document.querySelectorAll("h1")[0];

document.querySelectorAll("h1")[0].innerHTML = "Welcome to my page Mr/Mrs "+alert;

const links = document.querySelectorAll("#myclass")[0];

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}
