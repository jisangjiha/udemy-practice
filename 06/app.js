//document.body.children[1].children[0].href = "https://google.com";

//console.dir(document)

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

document.querySelector("p a"); // p a {color : red;}
anchorElement.href = "https://academind.com";

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "http://google.com";
newAnchorElement.textContent = "This leads to Google";

let firstParagraph = document.querySelector("p");
firstParagraph.append(newAnchorElement);

let firstH1Element = document.querySelector("h1");
firstH1Element.remove();
//firstH1Element.parentElement.removeChild(firstH1Element) //for older browser

firstParagraph.parentElement.append(firstParagraph);

firstParagraph.innerHTML;
