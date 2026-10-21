const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello! Node.js CI/CD Pipeline is successfully updated through GitHub and Jenkins!");
});

if (require.main === module) {
    const port = process.env.PORT || 3000;
    server.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = server;