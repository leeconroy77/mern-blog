import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app.js";

dotenv.config();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const PORT = process.env.PORT || 8001;

mongoose
  .connect(DB, {})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`DB connected & server listening on port ${PORT}...`);
    });
  })
  .catch((err) => console.log(err));
