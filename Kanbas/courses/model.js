import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("courseModel", schema);
export default model;