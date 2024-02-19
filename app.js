import express from "express";
// import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(express.json());
app.use(cors());
// app.use(helmet("common"));
app.use(bodyParser.json({ limit: "30md", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30md", extended: true }));

app.use("/", (req, res) => {
  res.send("hello world");
});

export default app;
