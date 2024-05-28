import {PORT} from "./config";
import app from "./app";

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
