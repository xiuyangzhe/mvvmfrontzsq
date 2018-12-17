// interface ICache{
//     useCache:boolean;
//     [propName:string]:any;
// }
// const cache:ICache = {useCache:true};
import * as http from 'http';

const server = http.createServer((req,res)=>
{

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("Hello World ts");
    res.end();
});

server.listen(3000,()=>{
    console.log("create a server port 3000");
});

