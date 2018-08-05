let app;
(function (app) {
    "use strict"

    // About Button Click event handler
  
    function Start() {
        // local variable
        let title = document.title;

        console.log("%c App Started!", "font-weight:bold; font-size: 20px;");
        console.log("%c ----------------------------", "font-weight:bold; font-size: 20px;");
        console.log("Title: " + title);

        try {
            

            switch (title) {
                case "Home":

                    content.HomeContent();
                    break;

                case "About":
                    content.AboutContent();
                    break;

                case "Contact":
                    content.ContactContent();
                    break;

                default:
                    throw ("Title not Defined");
                    break;
            }
        }
        catch(err) {
            console.log(err);
            console.warn("Something went wrong when switching pages");
        }
      
    }
    insertHTML("./Scripts/view/content/header.html", "header");
    insertHTML("./Scripts/view/content/footer.html", "footer");
    // mu stuff
    document.getElementById("wocm").innerHTML = "<h1>WELCOME</h1> <h2>To</h2> <h3>MY PAGE</h3>";
   
    
   
    //
    function insertHTML(sourceURL, destTag) {
        let target = document.querySelector(destTag);
    
        ///Getting data from the html files and injecting it to page.
        let XHR = new XMLHttpRequest();
        XHR.addEventListener("readystatechange", function() {
          if (this.status === 200) {
            if (this.readyState === 4) {
              target.innerHTML = this.responseText;
              //setActiveNavLink();
            }
          }
        });
        XHR.open("GET", sourceURL);
        XHR.send();
      }

    //window.onload = Start;

    window.addEventListener("load", Start);

    


    // these are all app properties
    app.Title = document.title;


})(app || (app = {}));