import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '100kb' }));

// Simple in-memory rate limiter for contact submissions
const contactRateLimits = new Map();

// In-memory store for contact inquiries (simulated storage)
const inquiries = [];

// Profile & Metadata
const profileData = {
  name: "Adarsh V",
  title: "Full Stack Software Engineer",
  designation: "Junior Software Engineer",
  employer: "Innoval Digital Solutions",
  period: "June 2024 – Present",
  experienceYears: "2+",
  location: "Thiruvananthapuram, Kerala, India",
  email: "iadarshvijayan@gmail.com",
  phone: "+91 91888 93666",
  availabilityStatus: {
    status: "Currently Building at Innoval Digital Solutions",
    detail: "Open to technical discussions & engineering conversations",
    badge: "Active"
  },
  headline: "Building thoughtful digital products and the systems behind them.",
  stats: [
    { label: "Experience", value: "2+ Years" },
    { label: "Enterprise Projects", value: "3 Key Platforms" },
    { label: "Stack Focus", value: "React · Node · AWS" },
    { label: "Location", value: "Kerala, India" }
  ]
};

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    service: 'Adarsh V Portfolio API Service'
  });
});

// Profile endpoint
app.get('/api/profile', (req, res) => {
  res.json(profileData);
});

// Resume metadata / download endpoint
app.get('/api/resume', (req, res) => {
  const resumePath = path.join(__dirname, '../public/Adarsh_V_Resume.pdf');
  if (fs.existsSync(resumePath)) {
    res.download(resumePath, 'Adarsh_V_Resume.pdf');
  } else {
    res.status(404).json({
      error: 'Resume document is being updated',
      directContact: profileData.email
    });
  }
});

// Contact endpoint with validation and rate limiting
app.post('/api/contact', (req, res) => {
  const clientIp = req.ip || req.headers['x-forwarded-for'] || 'unknown';
  const now = Date.now();
  
  // Rate limit: max 5 requests per 10 minutes per IP
  const windowMs = 10 * 60 * 1000;
  const ipHistory = contactRateLimits.get(clientIp) || [];
  const recentRequests = ipHistory.filter(t => now - t < windowMs);

  if (recentRequests.length >= 5) {
    return res.status(429).json({
      error: 'Too many messages sent. Please email directly at iadarshvijayan@gmail.com or try again later.'
    });
  }

  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ error: 'Please provide a valid name (at least 2 characters).' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return res.status(400).json({ error: 'Please provide a message with at least 10 characters.' });
  }

  const sanitizedMessage = {
    id: `MSG-${Date.now().toString(36).toUpperCase()}`,
    name: name.trim().slice(0, 100),
    email: email.trim().slice(0, 150),
    subject: (subject || 'General Inquiry').trim().slice(0, 150),
    message: message.trim().slice(0, 3000),
    timestamp: new Date().toISOString(),
    ip: clientIp
  };

  // Record rate limit and store
  recentRequests.push(now);
  contactRateLimits.set(clientIp, recentRequests);
  inquiries.push(sanitizedMessage);

  console.log(`[API] New contact inquiry received from ${sanitizedMessage.name} (${sanitizedMessage.email}): ${sanitizedMessage.subject}`);

  return res.status(200).json({
    success: true,
    message: 'Thank you for reaching out. Adarsh has received your note and will review it promptly.',
    receiptId: sanitizedMessage.id,
    directEmailFallback: profileData.email
  });
});

// Production: serve built static client files
const distPath = path.join(__dirname, '../dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`[Express] Backend server running on http://localhost:${PORT}`);
});
