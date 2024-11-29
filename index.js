const server = require("fastify")({ logger: true });
const port = 8080;

server.get("/", (request, reply) => {
  reply.type("text/html").send("<h1>halaman utama</h1>");
});

server.get("/profile", (request, reply) => {
  reply.type("text/html").send("<h1>halaman Profile</h1>");
});

server.get("/profile/data", (request, reply) => {
  reply.type("text/html").send("<h1>halaman Profile Data</h1>");
});

server.get("/setting", (request, reply) => {
  reply.type("text/html").send("<h1>halaman Pengaturan</h1>");
});

console.log("listen port:" + port);
server.listen({ port: port }, (error) => {
  if (error) {
    console.log(error);
  }
});
