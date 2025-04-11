const http=require('http');
const PORT=3002;
const server=http.createServer(async(req,res)=>{
    res.setHeader('Content-Type','text/html');
    const data=await fetch("https://fakestoreapi.com/products");
    const jsondata=await data.json();
    // console.log(jsondata[0].title);
    // const htmldata=`<h2 style=color:red>${jsondata[0].title}</h2>`
const htmltemplate=`<html>

<head>
<title>Online Clothes Shop</title>
<style>
.container{
border:2px solid red;
background-color:cyan
}
</style>
</head>
<body>
<div>
${jsondata.map(ele=>{
    return(`
        <div class='container'>
        <div><img src=${ele.image} height=300 width=200 /></div>
        <div>${ele.title}</div>
        <div>${ele.price}</div>
        <div>${ele.description}</div>
        <div>${ele.category}</div>
        </div>
        `)
})}
</div>
</body>

</html>`


    res.end(htmltemplate);

})

server.listen(PORT,()=>{
    console.log("Server is running on:"+PORT)
})