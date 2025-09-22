const http = require("http");
const pageHead = '<!DOCTYPE html>\n<html lang="et"><body style="background-color:powderblue;">\n</head>\n<meta charset="utf-8">\n<title>Uku Kurm, veebiprogrammeerimine</title>\n</head>\n<body>';
const pageBody = '<h1>Uku Kurm, veebiprogrammeerimine</h1><p>bla bla<a href="https://www.tlu.ee/">TLÜ</a> bla bla bla</p><hr>';
const pageFoot = '</body></html>';
const dateEt = require("./src/dateTimeET");

http.createServer(function(req, res){
	res.writeHead(200, {"Content-type": "text/html"});
	res.write("Ongi nii!");
	res.write(pageHead);
	res.write(pageBody);
	res.write("<p>Täna on " + dateEt.weekDay() + ".</p>");
	res.write(pageFoot);
	return res.end();
}).listen(5111);

// 80 443 port hhtp ja https vastavalt
// port 5100 rinde port
// ctrl + c end in terminal
// \n \t
// <ol> <li></li> 
//</ol> ordered list 
// console.log logib terminali