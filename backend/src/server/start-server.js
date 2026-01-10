import 'dotenv/config';
import { createApp } from "../app/create-app.js";

const PORT = process.env.PORT || 5000;

export function startServer() {
    const app = createApp();

    app.listen(PORT, () => {
        console.log(`Server listen on port ${PORT}`)
    })
}