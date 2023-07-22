const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("mime-types");
const appRoot = require("app-root-path");

const port = 3000; // Change this to your desired port number

const server = http.createServer(async (req, res) => {
	const url = req.url === "/" ? "index.html" : req.url;
	const pathName = `${path.join(__dirname, path.normalize(url))}`;
	console.log(pathName);
	if (url.startsWith("/assets/")) {
		// If the requested URL starts with '/assets/', serve it as a static file
		fs.readFile(pathName, (err, data) => {
			if (err) {
				console.log(err);
				console.log(pathName, url);
				// If the file is not found, return a 404 response
				res.writeHead(404, { "Content-Type": "text/plain" });
				res.end("404 Not Found");
			} else {
				// Otherwise, serve the file with the appropriate content type
				const extension = path.extname(
					`${path.join(__dirname, pathName)}`,
				);
				const contentType = getContentType(extension);
				res.writeHead(200, { "Content-Type": contentType });
				res.end(data);
			}
		});
	} else {
		// For all other routes, serve the index.html file
		fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
			if (err) {
				// If the file is not found, return a 404 response
				res.writeHead(404, { "Content-Type": "text/plain" });
				res.end("404 Not Found");
			} else {
				// Serve the index.html with the appropriate content type
				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(data);
			}
		});
	}
});

function getContentType(extension) {
	// switch (extension) {
	//     case ".html":
	//         return "text/html";
	//     case ".css":
	//         return "text/css";
	//     case ".js":
	//         return "text/javascript";
	//     case ".woff2":
	//         return "font/woff2"
	//     default:
	//         return "text/plain";
	// }
	return mime.lookup(extension);
}

server.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
