const marked = require('marked');
const highlight = require('highlight.js');
const fs = require('fs');

// marked.setOptions({
//     highlight: function (code) {
//         return highlight.highlightAuto(code).value;
//     }
// });

 fs.readFile('test.md',(err,data) =>{

     if(err){
         console.log(err);
     }else{
         fs.writeFile('target.txt',marked(data.toString()),err=>{
             if(err){
                 console.log(err)
             }
         });
     }

 });


