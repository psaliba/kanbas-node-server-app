import express from "express";
import Hello from "./Hello.js";
import lab5 from "./lab5.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
Hello(app);
lab5(app);

app.listen(4000, () => console.log("Server is running on port 4000"));
