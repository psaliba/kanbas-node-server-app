import express from "express";
import Hello from "./Hello.js";
import lab5 from "./lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./Kanbas/users/routes.js";

await mongoose.connect("mongodb://127.0.0.1:27017/kanbas", {
    directConnection: true
});

const app = express();
app.use(cors({
    credentials: true,
    origin: [process.env.FRONTEND_URL, "http://localhost:3000"]
  }));
app.use(express.json());

// print every request to console for debugging
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
  });

Hello(app);
lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);



app.listen(process.env.PORT || 4000, () => console.log("Server is running on port 4000"));

