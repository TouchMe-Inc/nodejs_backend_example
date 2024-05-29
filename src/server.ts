import {PORT} from "./config";
import app from "./app";
import {dataSource} from "./database";

dataSource.initialize().then(
    async () => {
        app.listen(PORT, () => {
            console.log(`[server]: Server is running at http://localhost:${PORT}`);
        });
    }
)

