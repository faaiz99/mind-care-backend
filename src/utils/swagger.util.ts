export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mind Care",
      version: "v1",
      description: "API Documentation",
      contact: {
        name: "Mind Care",
      },
    },
    servers: [
      {
        url: "http://localhost:8080/api/v1/",
      },
    ],
  },

  apis: ["src/routes/therapist/*/*.js"],
};
