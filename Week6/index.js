const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const JWT_SECRET = "adityaraut@1234";
const users = [];

// Logger middleware
function logger(req, res, next) {
    console.log(req.method + " request came");
    next();
}

// Auth middleware
function auth(req, res, next) {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "No token provided"
            });
        }

        const decodedData = jwt.verify(token, JWT_SECRET);

        req.user = decodedData; // ✅ attach to request
        next();

    } catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.post("/signup", logger, (req, res) => {
    const { username, password } = req.body;

    users.push({ username, password });

    res.json({
        message: "success",
    });
});

app.post("/signin", logger, (req, res) => {
    const { username, password } = req.body;

    const foundUser = users.find(
        u => u.username === username && u.password === password
    );

    if (!foundUser) {
        return res.status(401).json({
            message: "Credentials Incorrect"
        });
    }

    const token = jwt.sign(
        { username: foundUser.username },
        JWT_SECRET
    );

    res.json({ token });
});

app.get("/me", auth, (req, res) => {
    const username = req.user.username;

    const foundUser = users.find(u => u.username === username);

    if (!foundUser) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    });
});

app.listen(3000);