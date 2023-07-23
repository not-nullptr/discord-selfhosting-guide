const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("mime-types");
const process = require("process");

const port = parseInt(process.argv[2]) || 3000;

const server = http.createServer(async (req, res) => {
    const url = req.url === "/" ? "index.html" : req.url;
    const pathName = `${path.join(__dirname, path.normalize(url))}`;
    console.log(pathName);
    if (url.startsWith("/assets/")) {
        fs.readFile(pathName, (err, data) => {
            if (err) {
                console.log(err);
                console.log(pathName, url);
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("404 Not Found");
            } else {
                const extension = path.extname(
                    `${path.join(__dirname, pathName)}`
                );
                const contentType = getContentType(extension);
                res.writeHead(200, { "Content-Type": contentType });
                res.end(data);
            }
        });
    } else {
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("404 Not Found");
            } else {
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
