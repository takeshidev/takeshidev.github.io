// create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// read the JSON file containing the hyperlinks
xhr.open("GET", "data.json");
xhr.onload = function () {
  if (xhr.status === 200) {
    // parse the JSON data
    var data = JSON.parse(xhr.responseText);

    // create a list item for each hyperlink
    var hyperlinkList = document.getElementById("hyperlinkList");
    data.forEach(function (hyperlink) {
      var listItem = document.createElement("div");
      var anchor = document.createElement("a");
      anchor.textContent = hyperlink.text;
      listItem.classList.add("card");
      listItem.classList.add("col-4");
      listItem.classList.add("d-flex");
      listItem.classList.add("align-items-center");
      anchor.href = hyperlink.url;
      anchor.target = "new";
      listItem.appendChild(anchor);
      hyperlinkList.appendChild(listItem);
    });
  } else {
    console.log("Error loading JSON file");
  }
};
xhr.send();
