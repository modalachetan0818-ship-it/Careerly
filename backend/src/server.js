import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { contactRouter } from "./routes/contact.js";
import { siteRouter } from "./routes/site.js";

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

app.use(morgan("dev"));
app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    methods: ["GET", "POST", "OPTIONS"],
  }),
);
app.use(express.json({ limit: "100kb" }));

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "careerly-api",
    time: new Date().toISOString(),
  });
});

app.use("/api/contact", contactRouter);
app.use("/api/site", siteRouter);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({
    ok: false,
    message: err.message || "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`Careerly API running on http://localhost:${PORT}`);
});
