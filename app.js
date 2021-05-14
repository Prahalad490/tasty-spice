const express = require("express");

// const jsdom = require("jsdom");
// const {JSDOM} = jsdom;
// const dom = new JSDOM.fromFile;

// const $ = require("jquery")(win.window);

const app = express();



app.use(express.static("public"));
app.use('/public', express.static("public"));

app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/index.html");
    // $(document).on('scroll', function(){
    //     if ( $(window).scrollTop() > 30) {
    //         $('.navbar').addClass('sticky');
    //     } else {
    //         $('.navbar').removeClass('sticky');
    //     }
    // });
    
})

// $(document).on('scroll', function(){
//     if ( $(window).scrollTop() > 30) {
//         $('.navbar').addClass('sticky');
//     } else {
//         $('.navbar').removeClass('sticky');
//     }
// });

app.listen(3000, ()=>{
    console.log("server started on port 3000.")
})