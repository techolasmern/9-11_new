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
const url = require("url");

const server = http.createServer();

let todoArray = [];

server.on("request", (request, response) => {

    const urlObj = url.parse(request.url, true);
    const method = request.method;

    const requestedPath = urlObj.pathname;

    console.log(urlObj.query);

    if (requestedPath === "/") {
        const resObj = JSON.stringify({
            ok: true,
            message: "Requested home page",
            query: urlObj.query
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

    if (requestedPath === "/api/todo" && method === "POST") {
        const { todo } = urlObj.query;
        todoArray.push(todo);
        const res = JSON.stringify({
            ok: true,
            message: "Todo added successfully",
            todo
        })
        return response.end(res);
    }

    if (requestedPath === "/api/todo" && method === "GET") {
        const res = JSON.stringify({
            ok: true,
            message: "Todo retrieved successfully",
            todos: todoArray
        })
        return response.end(res);
    }

    if (requestedPath === "/api/todo/single" && method === "GET") {
        const { id } = urlObj.query;
        const todo = todoArray[id];
        const res = JSON.stringify({
            ok: true,
            message: "Todo retrieved successfully",
            todo
        })
        return response.end(res);
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


