import express from "express";
import Hello from "./Hello.js";
import lab5 from "./lab5.js";
const app = express();
Hello(app);
lab5(app);

app.listen(4000, () => console.log("Server is running on port 4000"));
