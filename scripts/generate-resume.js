import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to create a valid minimal PDF with readable text streams
function createResumePdf() {
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Create formatted PDF stream
  const content = [
    "BT",
    "/F1 20 Tf",
    "50 750 Td",
    "(ADARSH V) Tj",
    "0 -22 Td",
    "/F2 12 Tf",
    "(Full Stack Software Engineer | Junior Software Engineer) Tj",
    "0 -16 Td",
    "/F3 10 Tf",
    "(Thiruvananthapuram, Kerala, India | iadarshvijayan@gmail.com | +91 91888 93666) Tj",
    "0 -25 Td",
    "/F1 12 Tf",
    "(PROFESSIONAL SUMMARY) Tj",
    "0 -15 Td",
    "/F3 9.5 Tf",
    "(Full-stack software developer with 2+ years of professional software development experience) Tj",
    "0 -13 Td",
    "(enhancing existing codebases and building enterprise features across frontend and backend.) Tj",
    "0 -13 Td",
    "(At Innoval Digital Solutions, contributing to leadership assessments, API management, and workforce operations.) Tj",
    "0 -22 Td",
    "/F1 12 Tf",
    "(PROFESSIONAL EXPERIENCE) Tj",
    "0 -15 Td",
    "/F2 10.5 Tf",
    "(Innoval Digital Solutions - Junior Software Engineer  (June 2024 - Present)) Tj",
    "0 -14 Td",
    "/F3 9 Tf",
    "(- SmartLeader (SLD) Platform: React, Node.js, Express, MySQL, AWS Lambda, EventBridge.) Tj",
    "0 -12 Td",
    "(  Developed full-stack features for leadership assessment workflows & asynchronous pipelines.) Tj",
    "0 -14 Td",
    "(- API Hub Platform: Node.js, TypeScript, AWS Lambda, PostgreSQL, React, REST APIs.) Tj",
    "0 -12 Td",
    "(  Built serverless backend services, response standardization & optimized PostgreSQL views.) Tj",
    "0 -14 Td",
    "(- Welspun Project Hub: Node.js, Express.js, MongoDB, JWT, SSO, Active Directory, PM2.) Tj",
    "0 -12 Td",
    "(  Engineered REST APIs, geofencing, offline attendance sync & automated Excel reporting.) Tj",
    "0 -22 Td",
    "/F1 12 Tf",
    "(TECHNICAL SKILLS) Tj",
    "0 -14 Td",
    "/F3 9 Tf",
    "(Languages: JavaScript, TypeScript, HTML5, CSS3) Tj",
    "0 -13 Td",
    "(Frontend: React.js, Redux, Tailwind CSS, Material UI) Tj",
    "0 -13 Td",
    "(Backend: Node.js, Express.js, REST API Development) Tj",
    "0 -13 Td",
    "(Databases: MySQL, PostgreSQL, MongoDB, DynamoDB, Redis) Tj",
    "0 -13 Td",
    "(Cloud & Architecture: AWS Lambda, Amazon S3, EventBridge, Docker, Git, Serverless) Tj",
    "0 -22 Td",
    "/F1 12 Tf",
    "(EDUCATION) Tj",
    "0 -14 Td",
    "/F2 10 Tf",
    "(Manipal Academy of Higher Education - Master of Computer Applications (MCA) (Oct 2025 - Present)) Tj",
    "0 -13 Td",
    "(SN College Chempazhanthy, University of Kerala - B.Sc in Chemistry (2017 - 2020)) Tj",
    "0 -22 Td",
    "/F1 12 Tf",
    "(CERTIFICATIONS) Tj",
    "0 -14 Td",
    "/F3 9 Tf",
    "(* The Complete 2023 Web Development Bootcamp - Udemy, Inc.) Tj",
    "0 -13 Td",
    "(* Certified Specialist in Full Stack Development (MERN) - ICT Academy of Kerala) Tj",
    "0 -13 Td",
    "(* Software, Programming and Databases - Coursera) Tj",
    "ET"
  ].join("\n");

  const streamLength = Buffer.byteLength(content);

  const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources <<
  /Font <<
    /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
    /F2 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>
    /F3 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
  >>
>> >>
endobj
4 0 obj
<< /Length ${streamLength} >>
stream
${content}
endstream
endobj
xref
0 5
0000000000 65535 f 
0000000010 00000 n 
0000000060 00000 n 
0000000117 00000 n 
0000000330 00000 n 
trailer
<< /Size 5 /Root 1 0 R >>
startxref
${330 + streamLength + 50}
%%EOF`;

  const outputPath = path.join(publicDir, 'Adarsh_V_Resume.pdf');
  fs.writeFileSync(outputPath, pdf);
  console.log(`Generated official resume PDF at: ${outputPath} (${pdf.length} bytes)`);
}

createResumePdf();
