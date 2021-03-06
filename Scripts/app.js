let app;
(function (app) {
    "use strict"

    //express       ERRORS ERRORS
 /*   let indexRouter = require('./routes/index');
    let app = express();

    app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', indexRouter);

//some error handle
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

 // render the error page
 res.status(err.status || 500);
 res.render('error');
});

module.exports = app;
*/
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