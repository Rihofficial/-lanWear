import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/ProductRoutes.js";

// app config
const app = express();;


// port
const port = process.env.PORT || 4000;

connectDb();
connectCloudinary()

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app endpoints
app.use("/api/user",userRouter)
app.use("/api/product",productRouter)


app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.listen(port, () => console.log(`Listening on localhost:${port}`));
