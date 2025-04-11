const fs=require('fs');

function writeData(){
    try{
fs.writeFileSync("data.txt","Hello Writing data using Node Js");
console.log("Data Written succussfully");
    }catch(err){
    console.log("Error while writing the data:"+err)
    }
}
function readData(){
    try{
const rd=fs.readFileSync("data.txt",{encoding:'utf-8'});
console.log(rd);
    }catch(err){
        console.log("Error while reading the data:"+err)
    }
}
function appendData(){
    try{
       fs.appendFileSync("data.txt"," Welcome to ABES Engineering College");
       console.log("Data appended successfully");
    }catch(err){
        console.log("Error while appending the data:"+err)
    }
}
function deleteFile(){
    try{
       fs.unlinkSync("data.txt");
       console.log("File deleted successfully");
    }catch(err){
        console.log("Error while deleting the file:"+err)
    }
}

const obj={
    writeData,
    readData,
    appendData,
    deleteFile
}

module.exports=obj;