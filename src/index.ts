import * as dotenv from "dotenv";
dotenv.config();
import app from "./server";

const PORT = 3001 || process.env.PORT;

app.listen(3001, () => {
  console.log(`Server is listening to http://localhost:${PORT}`);
});
