// FILE: src/lib/handlers.js
export async function healthHandler(req, res) {
    try {
        res.status(200).json({
            status: 'ok',
            uptime: process.uptime(),
            timestamp: new Date()
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            uptime: process.uptime(),
            timestamp: new Date()
        });
    }
}
