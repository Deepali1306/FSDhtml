const fs=require('fs');

fs.writeFile("data.pdf","Hi Using Fs module to write data",(err)=>{

    if(err){
         console.log("Error during filewrite:"+err);
    }else{
        console.log("Data written successfully!!!")
    }
})


fs.readFile("data.pdf",{},(err,data)=>{
if(err){

}
else{
    console.log(data);
}
})