// REST API -> Way for communication between server and client;

// Stateless -> Server doesn't remember anything about client;
// http urls & methods; -> endpoints; http://localhost:3000/users/{userid} -> endpoint;

// GET -> Retrieve data from server;
// POST -> Create data on server;
// PATCH -> Update data on server;
// PUT -> Replace data on server;
// DELETE -> Delete data on server;

// /users -> Methods

// http -> core / build in module;

// status codes -> 100 - 500 series;
// 100 series -> Informational;
// 200 series -> Success; (200 -> OK; 201 -> Created);
// 300 series -> Redirection;
// 400 series -> Client Error (400 -> Bad Request; 401 -> Unauthorized; 403 -> Forbidden; 404 -> Not Found, 405 -> Method Not Allowed, 409 -> Conflict);
// 500 series -> Server Error (500 -> Internal Server Error);

const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {

    const requestedPath = request.url;

    if (requestedPath === "/") {
        const resObj = JSON.stringify({
            ok: true,
            message: "Requested home page"
        })
        response.writeHead(200, {
            "content-type": "application/json"
        });
        return response.end(resObj);
    }

    if (requestedPath === "/about") {
        response.writeHead(200, {
            "content-type": "text/plan"
        });
        return response.end("About Page");
    }

    if (requestedPath === "/contact") {
        response.writeHead(200, {
            "content-type": "text/plan"
        });
        return response.end("Contact Page");
    }

    response.writeHead(404, {
        "content-type": "text/plan"
    });
    return response.end("404 Page Not Found");
});

server.listen(3000, () => {
    console.log("Server running on port 3000"); // http://localhost:3000;
}); 

// port -> 3000;


