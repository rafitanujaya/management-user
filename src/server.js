import { createApp } from "./app.js";
import { config } from "./config/index.js";

const server = createApp();

server.listen(config.PORT, () => {
    console.info(`Server running on port : localhost:${config.PORT}`);
});