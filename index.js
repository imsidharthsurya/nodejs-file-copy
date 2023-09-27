const fs=require("fs");

function toCopyfile(src,dest){
    fs.copyFile(src,dest,(err)=>{
        console.log("file Copied");
    })
}

toCopyfile("readme.txt","notes.txt");
