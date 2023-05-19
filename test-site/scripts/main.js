const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cloud-computing.png") {
    myImage.setAttribute("src", "images/letter-m.png");
  } else {
    myImage.setAttribute("src", "images/cloud-computing.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Cloud computing is awesome, ${myName}!`;
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Cloud computing is awesome, ${storedName}!`;
  }
  
  myButton.onclick = () => {
    setUserName();
  };
  