import express from "express";
import Hello from "./Hello.js";
import lab5 from "./lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
Hello(app);
lab5(app);
CourseRoutes(app);
ModuleRoutes(app);

app.listen(process.env.PORT || 4000, () => console.log("Server is running on port 4000"));
