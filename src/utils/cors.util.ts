export const corsOptions = {
  origin: "*", // Replace with the actual origin(s)
  methods: ["GET", "POST", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "authorization"],
  credentials: true, // If you need to allow credentials (cookies, headers, etc.)
};
