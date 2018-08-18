(function(content){
   
    //not working 
    document.getElementsByClassName("sidepls").innerHTML = " <1>I AM AYUSH N PATEL</h1> ";
    // properties
    content.AboutContent = AboutContent;


//getting data from paragraph.json file.
function getindata() {
    $.getJSON("../Scripts/core/json/paragraphs.json", function(data) {
      $.each(data, function(key, val) {
        $("#myDetails").append("<p>" + val + "</p>");

        ///Adding to array the data from .json file

        //Array for storing data to .json file
        let objectjson = {};
        objectson = JSON.parse(data.responseText);
      });
    });
  }

  ///Target content under AboutContent
  
    //fetching the data by calling function
    function AboutContent() {
     
  
    
      
  
      let paragraph = document.getElementById("paragraph");
  
      let mySentence = "";
  
      paragraph.textContent = mySentence;
  
      //Array containing Different objects
      let myArray = [
        { name: "Ayush", age: 19 },
        { name: "Tyson", age: 38 },
        { name: "Fill", age: 28 },
        { name: "Jack", age: 45 },
        { name: "Oliver", age: 61 }
      ];
  
      let content = document.getElementsByClassName("content");
      console.log("myArray length: " + myArray.length);
  
      let arrayEmpty;
  
      // ternary operator - alternate toggle conditional statement
      arrayEmpty = myArray.length > 0 ? false : true;
  
      // === checks both value and type where == only checks value
      if (myArray[0].age === 25) {
        console.log("First Element is Nothing");
      }
  
      // associative arrays create this key / value pair association but there is no iterator
      // which means you can't loop through them
      let myAssociateArray = [];
  
      myAssociateArray["Name"] = "ayush";
      myAssociateArray["Age"] = 19;
      myAssociateArray["StudentNum"] = "30987477";
  
      console.log(myAssociateArray);
      console.log(myAssociateArray["Name"]);
  
      //Array containing MyFavouriteThings
      let myFavouriteThingsList = [
        "games",
        "Movies",
        "comic",
        "Music"
      ];
  
      // "hook into" a ul that is empty that has an id of "myFavouriteThings"
      let mythings = document.getElementById("mythings");
  
      mythings.forEach(thing => {
        let newItem = document.createElement("li");
        newItem.textContent = thing;
        mythings.appendChild(newItem);
      });
  
      //Displaying MyFavouriteThings in console
      console.log(mythings);
  
      //fetching the data by calling function
      getindata();
    }
  


  // properties
  content.AboutContent = AboutContent;



})(content || (content = {}));