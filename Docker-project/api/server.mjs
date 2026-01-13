import Fastify from "fastify";

export function createServer() {
  const fastify = Fastify();

  fastify.get("/", async (request, reply) => {
    return { message: "API is running" };
  });
  fastify.get("/feature/:code", async (request, reply) => {
    const { code } = request.params;
    return { code: code, enabled: true };
  });

  return fastify;
}
