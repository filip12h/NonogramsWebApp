
//copied from https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

//TODO: aby sa dali stlacat policka krizovky

var w = document.getElementById("width").value;
var h = document.getElementById("height").value;

function Cell(x, y, value){
    this.x = x;
    this.y = y;
    //this.solution = solution;
    this.actual = false;
    this.value = value;
    this.changeBackground = function(color) {
       this.style.background = color;
    }
    addEventListener("click",function() { changeBackground('red') });
}

function generate_table(width, height) {

  var tbl = document.getElementsByTagName("table")[0];
  var tblBody = document.createElement("tbody");
  var tblcpt = tbl.createCaption();
  tblcpt.innerHTML = "Nonogram No.1";

  var row = document.createElement("tr");
  var cell = document.createElement("td");
  cell.classList.add('topLeftCell');
  row.appendChild(cell);

  for (var j = 0; j < width; j++){
        var cell = document.createElement("td");
        cell.classList.add('columndefinition');
        row.appendChild(cell);
  }

  tblBody.appendChild(row);
  // creating all cells
  for (var i = 0; i < height; i++) {
    // creates a table row
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    cell.classList.add('rowdefinition');
    row.appendChild(cell);

    for (var j = 0; j < width; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = new Cell(i, j, 0)
      cell = document.createElement("td");
      if (i%5==0){
          cell.classList.add('row5')
      }
      if (j%5==0){
          cell.classList.add('column5')
      }
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  //body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}

function clickHandler() {
    // Here, `this` refers to the element the event was hooked on
    console.log("clicked")
}

document.getElementById("newbtn").onclick = function(){generate_table(w,h);};

generate_table(w, h);

$( document ).ready(function() {
    alert( "Let the fun begin!" );


    $('#board').click( function(event) {
      var target = $(event.target);
      $td = target.closest('td');
      //$td.html('.');

      $td.style.backgroundColor = "#AA0000";

    });

    //document.querySelectorAll('td').forEach(e => e.addEventListener {"click", clickHandler});

});


function changeBackground(cell, color) {
   cell.style.background = color;
}


//cells.addEventListener("click",function() { changeBackground('red') });

var cells = document.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
   cells[i].onclick = function(){changeBackground(cells[i],'red');};
}






//
