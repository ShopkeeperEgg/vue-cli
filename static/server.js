var http = require('http');
var fs = require('fs');
var path = require('path');
var mine = {
    "html": "text/html",
    "xml": "text/xml",
    "js": "text/javascript",
    "css": "text/css",
    "json": "application/json",
    "txt": "text/plain",
    "pdf": "application/pdf",
    "doc": "application/msword",
    "xls": "application/vnd.ms-excel",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "bmp": "image/bmp",
    "svg": "image/svg+xml",
    "tiff": "image/tiff",
    "gif": "image/gif",
    "swf": "application/x-shockwave-flash",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "mp3": "audio/mpeg",
    "wmv": "video/x-ms-wmv",
    "avi": "video/x-msvideo",
    "gz": "application/x-gzip",
    "manifest": "text/cache-manifest"
};  //content-type格式
//静态资源的路径
var staticUrl = '/Users/dengziyang/Documents/study/vue/my-project/dist';
var server = http.createServer(function(req,res){
    //req,res均为对象，req是http.IncomingMessage的一个实例，res是http.ServerResponse的一个实例
    //console.log(res);
    var url = req.url;
    //浏览器输入localhost:9000/index.html, 那url == '/index.html'
    //console.log(url);
    var file = staticUrl + url,
        type = path.extname(url);  //path.extname 返回路径中文件的扩展名
    //console.log(type)
    type = type ? type.split('.')[1] : 'unknown';
    fs.readFile(file , function(err,data){
        if(err){
            console.log('访问'+staticUrl+req.url+'出错');
            res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
        }else{
            res.writeHeader(200,{
                'content-type' :  mine[type] || 'text/html;charset="utf-8"'
            });
            res.write(data);  //将index.html显示在浏览器（客服端）
        }
        res.end();
    });
}).listen(9000);

console.log('服务器开启成功\n\n访问路径为http://localhost:9000/index.html\n');