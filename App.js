const http=require('http');
var book=require('./bookl');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/plain'})
   res.write(book.date)
    res.end("Hello WOrld")

    
}
).listen(8080,()=>{
    console.log("Hassaan Mangrio")
    console.log(""+ book)
});
