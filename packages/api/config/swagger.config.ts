export const swaggerOptions = {
  info: {
    version: "0.0.1",
    title: "rantsHQ",
    description: "API description for rantsHQ",
  },
  security: {
    BasicAuth: {
      type: "http",
      scheme: "bearer",
    },
  },
  baseDir: __dirname,
  filesPattern: "./**/*.ts",
  swaggerUIPath: "/docs",
};