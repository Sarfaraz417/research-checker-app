import express from "express";
import cors from "cors";
import multer from "multer";
import mime from "mime-types";
import pdf from "pdf-parse";
import mammoth from "mammoth";
import fs from "node:fs/promises";

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

const extractText = async (file) => {
  const mimeType = mime.lookup(file.originalname) || file.mimetype;

  if (mimeType === "application/pdf") {
    const data = await fs.readFile(file.path);
    const parsed = await pdf(data);
    return parsed.text;
  }

  if (
    mimeType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    const data = await fs.readFile(file.path);
    const result = await mammoth.extractRawText({ buffer: data });
    return result.value;
  }

  if (mimeType === "text/plain") {
    return fs.readFile(file.path, "utf-8");
  }

  throw new Error("Unsupported file type");
};

app.post("/analyze", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "File is required" });
  }

  try {
    const text = await extractText(req.file);

    const aiScore = 0.18;
    const plagiarismScore = 0.06;

    const response = {
      aiDetection: {
        score: aiScore,
        confidence: "low",
        highlights: [
          {
            label: "AI-like phrasing",
            snippet: "This study unequivocally demonstrates that the findings are unprecedented",
          },
        ],
      },
      plagiarism: {
        score: plagiarismScore,
        matches: [
          {
            source: "Springer 2023",
            snippet: "The methodology aligns with previously published frameworks in the field",
          },
        ],
      },
      rewriteSuggestions: {
        simple: "Findings show the proposed model improves efficiency with clarity.",
        advanced: "The results indicate the model advances efficiency with nuanced gains.",
        formal: "Empirical results confirm the model yields statistically meaningful efficiency gains.",
      },
      extractedLength: text.length,
    };

    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  } finally {
    await fs.rm(req.file.path, { force: true });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Research checker API running on ${PORT}`);
});
