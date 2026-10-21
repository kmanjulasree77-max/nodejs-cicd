const test = require("node:test");
const assert = require("node:assert/strict");
const server = require("../server.js");

test("server responds with the updated message", async () => {
    await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));

    try {
        const port = server.address().port;
        const response = await fetch(`http://127.0.0.1:${port}`);

        assert.equal(response.status, 200);
        assert.equal(
            await response.text(),
            "Hello! Node.js CI/CD Pipeline is successfully updated through GitHub and Jenkins!"
        );
    } finally {
        await new Promise((resolve, reject) => {
            server.close((error) => error ? reject(error) : resolve());
        });
    }
});