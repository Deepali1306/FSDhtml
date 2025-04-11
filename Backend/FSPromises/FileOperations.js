const fs=require('fs').promises;

// const promise=fs.writeFile("data.txt","Hello using Fs Promises");
// // console.log(promise);
// promise.then(()=>{
//     console.log("Data written successfully");
// })
// .catch((err)=>{
//     console.log("Error while writing the data:"+err);
// })
// .finally(()=>{
//     console.log("Task Finished");
// })

async function readData(){
  const data=await fs.readFile('data.txt',{encoding:'utf-8'});
  console.log(data);
}
readData();