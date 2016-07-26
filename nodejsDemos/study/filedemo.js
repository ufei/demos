fs  = require('fs');

fs.open('1.json', 'r+', function(err,fd){
	console.log(fd);
	fs.stat('1.json' ,function(err,stats){
		buffer = new Buffer(stats.size);
		console.log(buffer.length);
		console.log(fd);
		fs.read(fd, buffer, 0, buffer.length, 0, function(err,bytes){
			console.log("read");
			if(err){
				console.log(err);
			}
			else{
				var string =buffer.toString();
				console.log(string);
			}
		});
	});
});

// var string= fs.readFile("test.txt", function(err,data){
// 	return data;
// });
// console.log(string);

/*var buf = new Buffer(18);

console.log("准备打开已存在的文件！");
fs.open('test.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("准备读取文件：");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + "  字节被读取");
      
      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});*/