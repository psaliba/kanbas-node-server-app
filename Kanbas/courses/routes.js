import { db } from "../database/index.js";

export default function CourseRoutes(app) {
    app.get("/api/courses", (req, res) => {
        const courses = db.courses;
        res.send(courses);

    app.post("/api/courses", (req, res) => {
        const course = { ...req.body,
        _id: new Date().getTime().toString() };
        db.courses.push(course);
        res.send(course);
    });

    app.delete("/api/courses/:id", (req, res) => {
        const id = req.params.id;
        db.courses = db.courses.filter((course) => course._id !== id);
        res.send(204);
    });

    app.put("/api/courses/:id", (req, res) => {
        const id = req.params.id;
        const course = db.courses.find((course) => course._id === id);
        Object.assign(course, req.body);
        res.send(204);
    });

    app.get("/api/courses/:id", (req, res) => {
        const id = req.params.id;
        const course = db.courses.find((course) => course._id === id);
        if (!course) {
            res.status(404).send("Course not found");
            return;
        }
        res.send(course);
    })
})}

