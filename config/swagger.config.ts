export const swaggerOptions = {
  info: {
    version: "0.0.4",
    title: "rantsHQ",
    description: "API description for rantsHQ",
  },
  security: {
    BasicAuth: {
      type: "http",
      scheme: "bearer",
    },
  },
  baseDir: "./",
  filesPattern: "./**/*.ts",
  swaggerUIPath: "/docs",
};
