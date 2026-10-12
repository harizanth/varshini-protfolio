# S. Varshini — Personal Portfolio Website

A modern, elegant, fully responsive personal portfolio website designed and developed for **S. Varshini**, Computer Science and Design student at **SNS College of Technology**.

---

## 🎨 Theme & Design System

- **Primary Color:** Navy Blue (`#0B192C`)
- **Secondary Color:** Pure White (`#FFFFFF`)
- **Accent Color:** Light Purple (`#C4B5FD` / `#8B5CF6`)
- **Text Color:** Dark Gray (`#1E293B` / `#334155`)
- **Backgrounds:** Clean White & Soft Slate Grays (`#FFFFFF`, `#F8FAFC`, `#F1F5F9`)
- **Typography:**
  - Headings: **Outfit** (Google Fonts)
  - Body: **Plus Jakarta Sans** (Google Fonts)

---

## 🚀 How to Run and Preview the Website

### 1. Open Terminal in the Project Directory
```powershell
cd C:\Users\VARSHINI\OneDrive\Desktop\varshini-portfolio
```

### 2. Start the Development Server
```powershell
npm run dev
```

### 3. Open in Browser
Open your browser and visit:
```
http://localhost:5173
```

To create a production build at any time:
```powershell
npm run build
```

---

## 📁 Where to Place Your Files (Photo, Resume & Certificates)

All static media files are located in the `public/` directory so you can update them at any time without touching complex code:

### 1. Profile Photograph
- **File location:** `public/assets/profile.jpg`
- **What to do:** Copy your professional photograph into `C:\Users\VARSHINI\OneDrive\Desktop\varshini-portfolio\public\assets\` and name it `profile.jpg`.
- **Automatic Fallback:** If `profile.jpg` is not present, the website automatically displays the elegant vector avatar placeholder frame without breaking.

### 2. Resume File
- **File location:** `public/assets/Varshini_S_Resume.pdf`
- **What to do:** Copy your resume PDF into `C:\Users\VARSHINI\OneDrive\Desktop\varshini-portfolio\public\assets\` and name it `Varshini_S_Resume.pdf`.
- **Behavior:** The "Download Resume" buttons in the Hero, Resume section, and Resume modal will immediately download this PDF.

### 3. Certificate Images
- **Folder location:** `public/certificates/`
- **What to do:** Drop your certificate scans or screenshots in this folder.
- In `src/data/portfolioData.js`, you can update the `image` path for any certificate:
  ```javascript
  {
    id: 1,
    title: "Computer Science and Java",
    image: "/certificates/my-java-cert.jpg" // update here
  }
  ```

---

## ⚙️ How to Update Content (Projects, Skills, Links)

All content is organized in one central, easy-to-edit file:
📍 `src/data/portfolioData.js`

### 1. Updating Personal Links & Bio
In `src/data/portfolioData.js`:
```javascript
export const personalInfo = {
  name: "S. Varshini",
  email: "varshinis012007@gmail.com",
  linkedin: "https://www.linkedin.com/in/varshini-senthilkumar-7839ba38",
  github: "https://github.com/varshinis012007-del/vcd-project"
  // ...
};
```

### 2. Adding or Updating Projects
In `src/data/portfolioData.js`, scroll down to `export const projects = [...]`:
- Update project descriptions, tools, or GitHub URLs.
- To add a new project, copy one of the objects and change its values.

### 3. Updating Technical Skills
In `src/data/portfolioData.js`, scroll to `export const technicalSkills`:
- Add new skills with a category (`Core Programming`, `Web Fundamentals`, etc.).

---

## 📬 Connecting the Contact Form to Your Email

The contact form currently performs full client-side validation (checking valid email, non-empty fields, minimum length) and offers direct mail client integration.

To have submissions delivered straight to your inbox without building a backend:
1. **Option A: Formspree (Easiest)**
   - Sign up for free at [formspree.io](https://formspree.io)
   - Create a form and copy your Formspree endpoint URL (e.g. `https://formspree.io/f/xyz...`)
   - In `src/components/Contact.jsx`, point the form `action` attribute to your Formspree endpoint.
2. **Option B: EmailJS**
   - Sign up at [emailjs.com](https://www.emailjs.com)
   - Install with `npm install @emailjs/browser`
   - Send messages directly using your service ID and template ID.

---

## ✨ Features Included

1. **Sticky Glassmorphic Navigation Bar** with smooth scrollspy, brand monogram, active link indicator, and mobile responsive drawer.
2. **Hero Section** with S. Varshini's introduction, quick social icons, action buttons, and framed profile card.
3. **About Me Section** highlighting SNS College of Technology, academic focus, core traits, and career goals.
4. **Technical Skills** showcasing C, C++, Java, Python, HTML, CSS, Responsive Web Design, and Excel with category filters.
5. **Creative Design Skills** celebrating UI/UX, Graphic Design, Website Design, Typography, and Branding.
6. **Project Portfolio** featuring LoanX, TECHNOVA 2027, NatureGold Organic Honey, and Aerospace Share with interactive deep-dive modals.
7. **EduSpine Internship Timeline** accurately detailing the 15-day Full Stack Development role and 5 core learning areas.
8. **Certificate Gallery** showcasing the 6 credentials with interactive preview modal.
9. **Academic Achievement Banner** proudly displaying the Class 12 State Board 100/100 Computer Science centum with a trophy card.
10. **Resume Section** with CV summary, preview modal, and download button.
11. **Career Vision** showing Software Development (Primary Career) and Entrepreneurship (Beauty parlour business).
12. **Contact Section** with validated form and direct Email, LinkedIn, and GitHub links.
13. **Professional Footer** with quick links, copyright notice, and back-to-top button.
