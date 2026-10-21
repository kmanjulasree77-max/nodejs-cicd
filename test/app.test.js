const test = require("node:test");
const assert = require("node:assert/strict");
const server = require("../server.js");

test("server responds with the correct message", async () => {
    await new Promise((resolve) => {
        server.listen(0, "127.0.0.1", resolve);
    });

    try {
        const port = server.address().port;
        const response = await fetch(
            `http://127.0.0.1:${port}`
        );

        assert.equal(response.status, 200);
        assert.equal(
            await response.text(),
            "Hello! Node.js CI/CD Pipeline is working."
        );
    } finally {
        await new Promise((resolve, reject) => {
            server.close((error) => {
                if (error) reject(error);
                else resolve();
            });
        });
    }
});