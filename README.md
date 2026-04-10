# 🛡️ Trustforge AI

**Verify before you trust. Empowering users through transparent AI security.**

Trustforge is a powerful AI-driven security and verification hub designed to protect users from modern digital threats. It goes beyond traditional “black-box” scanners by providing clear explanations, confidence scores, and educational insights—helping users not only detect threats but understand them.

---

## ✨ Key Features

- ⚡ Multi-Source Threat Detection  
  Analyze emails, URLs, social media posts, and articles—all in one place.

- 🤖 AI-Powered Analysis  
  Uses advanced AI models to classify content as **Safe ✅, Suspicious ⚠️, or Malicious 🚨**.

- 📊 Confidence Score  
  Get a percentage-based certainty level for every analysis.

- 🔍 Explainable Results  
  See the **top reasons** why something is flagged.

- 🚨 Actionable Security Links  
  Direct access to the National Cyber Crime Reporting Portal of India.

- 📄 Report Generation  
  Export detailed scan reports in PDF format.

- 🎓 User Education  
  Learn how to identify threats in the future.

---

## 🚀 Core Modules (MVP)

### 📧 Email Scanning (Phishing & Malware Detection)

- Upload `.eml`, `.msg`, or paste email content  
- Detects:
  - Suspicious sender addresses  
  - Urgent/threatening language  
  - Malicious links  
  - Dangerous attachments  

**Output:**
- 🟢 Safe / 🟠 Suspicious / 🔴 Malicious  
- Confidence Score (%)  
- Downloadable PDF report  
- Cybercrime reporting link  

---

### 🌐 URL Intelligence (Web Scraping)

- Input any website URL  

**Extracts:**
- Domain ownership  
- Website purpose  
- Registration details  
- SSL/security info  

**Output:**
- Summary card  
- Reputation score  

---

### 📱 Social Media Verification

- Input: link, text, or screenshot  

**Detects:**
- AI-generated content  
- Fake or viral misinformation  
- Debunked claims  

**Output:**
- ✅ Genuine  
- ❌ Fake / AI-generated  
- Proof-based explanations  

---

### 📰 Article Verification

- Input article text, URL, or screenshot  

**Checks:**
- Author authenticity  
- Publication history  
- Content tampering  

**Output:**
- Source verification  
- Tamper-check status  

---

## 🧭 How to Use

1. Choose a module (Email, URL, Social, Article)  
2. Provide input (text, link, or file)  
3. Click **Analyze**  
4. Review results:
   - Verdict  
   - Confidence Score  
   - Explanation  
5. Download report or take action  

---

## 🎨 UX Design

- Clean, trust-centric UI (Blue, White, Grey)  
- Traffic Light System:
  - 🟢 Green → Safe  
  - 🟠 Orange → Suspicious  
  - 🔴 Red → Malicious  

---

## ⚙️ Technical Stack

**Frontend**
- React.js / Next.js  
- Tailwind CSS  

**Backend**
- Python (Flask / FastAPI)  

**AI Models**
- GPT-based APIs  
- BERT / Scikit-learn  

**Scraping**
- BeautifulSoup / Selenium  

**Hosting**
- Netlify (Frontend)  
- Render / Heroku (Backend)  

---

## 📈 Success Metrics

- 🎯 Accuracy: ≥ 90% detection  
- 🧠 Explainability: At least 2 proof points  
- ⚡ Speed: Under 5 seconds  

---

## 🛠️ Implementation Highlights

- AI returns **Top 3 reasons** for suspicious results  
- PDF generation using `jsPDF` or `react-pdf`  
- Confidence shown via progress bar  

---

## 👨‍💻 Team Trustforge

Talha Chougle  
Uzair Karedia  
Zaid Chaudhary  
Riyaan Shaikh  

---

## 🔐 Final Note

Trustforge isn’t just a tool—it’s a learning platform for digital awareness.

> Verification isn’t optional—it’s essential.
