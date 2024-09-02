const express = require("express");

const app = express();

app.get("/fin", (request, response) =>{
    return response.json({message: "Hello!"});
});

app.post("/fin", (request, response) =>{
    return response.json({message: "Hello!"});
});

app.put("/fin/:id", (request, response) =>{
    return response.json({message: "Hello!"});
});

app.patch("/fin/:id", (request, response) =>{
    return response.json({message: "Hello!"});
});

app.delete("/fin/:id", (request, response) =>{
    return response.json({message: "Hello!"});
});

app.listen(3333)