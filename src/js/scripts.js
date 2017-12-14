
    //global vars
    var starSign;
    var selectedServ = [];
    var k = 1;
    var current;

    //DATE STUFF
    var n =  new Date();
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate();
    document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
    
  function saveSign(event) {
    //save what star sign the user chose
    starSign = event.target.id;
    console.log(starSign);
  };

  function change(event) {
      var id = event.target.id;
      console.log(id);
      console.log(document.getElementById(id).value);
      if (id == "favButtonElle" || id == "favButtonBroadly" || id == "favButtonBetches"
       || id == "favButtonCosmo" || id == "favButtonNYPost" || id == "favButtonNYDaily") {
        if (document.getElementById(id).value == "Favorite") {
          console.log("yes");
          document.getElementById(id).value = "Remove Favorite"; 
        } else {
          console.log("no");
          document.getElementById(id).value = "Favorite"; 
        }
      }

      if (id == "deleteButtonElle") {
        document.getElementById(id).style.display = "none";
        document.getElementById("favButtonElle").style.display = "none";
        document.getElementById("ElleText").style.display = "none";
      }

      if (id == "deleteButtonBroadly") {
        document.getElementById(id).style.display = "none";
        document.getElementById("favButtonBroadly").style.display = "none";
        document.getElementById("BroadlyText").style.display = "none";
      }

      if (id == "deleteButtonBetches") {
        document.getElementById(id).style.display = "none";
        document.getElementById("favButtonBetches").style.display = "none";
        document.getElementById("BetchesText").style.display = "none";
      }

      if (id == "deleteButtonCosmo") {
        document.getElementById(id).style.display = "none";
        document.getElementById("favButtonCosmo").style.display = "none";
        document.getElementById("CosmoText").style.display = "none";
      }

      if (id == "deleteButtonNYPost") {
        document.getElementById(id).style.display = "none";
        document.getElementById("favButtonNYPost").style.display = "none";
        document.getElementById("NYPostText").style.display = "none";
      }

      if (id == "deleteButtonNYDaily") {
        document.getElementById(id).style.display = "none";
        document.getElementById("favButtonNYDaily").style.display = "none";
        document.getElementById("NYDailyText").style.display = "none";
      }

  };

  function nextPage() {
    if(document.getElementById('secondPageDiv').style.display == "none") {
      document.getElementById('firstPageDiv').style.display = "none";
      document.getElementById('secondPageDiv').style.display = "block";
      document.getElementById('thirdPageDiv').style.display = "none";
    } else {
      document.getElementById('firstPageDiv').style.display = "none";
      document.getElementById('secondPageDiv').style.display = "none";
      document.getElementById('thirdPageDiv').style.display = "block";
    }
  };

  function backPage() {
    if (document.getElementById('secondPageDiv').style.display == "block") {
      document.getElementById('firstPageDiv').style.display = "block";
      document.getElementById('secondPageDiv').style.display = "none";
      document.getElementById('thirdPageDiv').style.display = "none";
    } else {
      document.getElementById('firstPageDiv').style.display = "none";
      document.getElementById('secondPageDiv').style.display = "block";
      document.getElementById('thirdPageDiv').style.display = "none";
    }

  };



  //SEARCH BAR STUFF


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    //console.log(document.getElementById("myDropdown").value);
}


function whatDo(event) {
  var temp = event.target.id;
  if (temp == "Elle") {
    document.getElementById("favButtonElle").style.display = "block";
    document.getElementById("deleteButtonElle").style.display = "block";
    document.getElementById("ElleText").style.display = "block";
  } else if (temp == "Broadly") {
    document.getElementById("favButtonBroadly").style.display = "block";
    document.getElementById("deleteButtonBroadly").style.display = "block";
    document.getElementById("BroadlyText").style.display = "block";
  } else if (temp == "Betches") {
    document.getElementById("favButtonBetches").style.display = "block";
    document.getElementById("deleteButtonBetches").style.display = "block";
    document.getElementById("BetchesText").style.display = "block";
  } else if (temp == "Cosmo") {
    document.getElementById("favButtonCosmo").style.display = "block";
    document.getElementById("deleteButtonCosmo").style.display = "block";
    document.getElementById("CosmoText").style.display = "block";
  } else if (temp == "NYPost") {
    document.getElementById("favButtonNYPost").style.display = "block";
    document.getElementById("deleteButtonNYPost").style.display = "block";
    document.getElementById("NYPostText").style.display = "block";
  } else if (temp == "NYDaily") {
    document.getElementById("favButtonNYDaily").style.display = "block";
    document.getElementById("deleteButtonNYDaily").style.display = "block";
    document.getElementById("NYDailyText").style.display = "block";
  }
};


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}






