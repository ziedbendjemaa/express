let express=require("express")
let app=express()
let path=require("path")

let Time = function (req, res, next) {
    let date = new Date();
    if (
      date.getDay() > 0 &&
      date.getDay() < 6 &&
      date.getHours() >= 9 &&
      date.getHours() < 17
    ) {
      next();
    } else {
      
      res.send("closed");
    }
  };

app.use(Time,express.static(path.join(__dirname,"public")))
let PORT=process.env.PORT||5000
app.listen(PORT,err=>err?console.log(err):console.log(`the server is runing`))