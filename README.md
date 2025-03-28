# 📌 MediaWiki Banner Creation Tool

## 📖 Project Overview
The **MediaWiki Banner Creation Tool** is an interactive web application that enables users to create and customize banners in real-time. It provides an intuitive UI where users can modify various banner attributes such as text, colors, font styles, alignment, dimensions, and even upload images. The final customized banner can be downloaded as an image.

## 🎯 Features
- ✅ **Live Preview** – Instantly see changes on the banner.
- ✅ **Background & Text Customization** – Change colors dynamically.
- ✅ **Font & Text Alignment** – Choose from multiple fonts and adjust text positioning.
- ✅ **Size Adjustments** – Modify banner width, height, and border-radius.
- ✅ **Image Upload** – Add custom images inside the banner.
- ✅ **Download as Image** – Save the final banner as a `.png` file.

## 🛠 Technologies Used
| Technology  | Purpose  |
|-------------|---------|
| **React.js** | Component-based frontend framework |
| **JavaScript (ES6+)** | Manages event listeners and updates dynamically |
| **CSS3** | Styling for layout and responsiveness |
| **Framer Motion** | Smooth animations and transitions |
| **html2canvas** | Captures banner as an image for downloading |
| **Git & GitHub** | Version control and repository hosting |

## 🚀 Getting Started

### 1️⃣ Installation & Setup

#### 🔹 Prerequisites
Ensure you have **Node.js** and **npm** installed. If not, download them from [Node.js official website](https://nodejs.org/).

#### 🔹 Clone the Repository
```bash
git clone https://github.com/yourusername/mediawiki-banner-tool.git
cd mediawiki-banner-tool


How It Works

2️⃣ Customizing the Banner
Background Color: Change the banner's background.

Text Color & Font: Modify text color and choose from different font styles.

Text Alignment: Set text to left, center, or right.

Banner Size & Border Radius: Adjust width, height, and border curvature.

Upload an Image: Insert an image into the banner.

3️⃣ Live Preview
Any modifications made in the form reflect instantly on the banner.

4️⃣ Downloading the Banner
Clicking the "Download Banner" button generates and saves a .png image.
Challenges & How I Overcame Them
1️⃣ Tailwind CSS Issues → Replaced it with pure CSS for styling.
2️⃣ State Management Complexity → Used React's useState to efficiently handle multiple properties.
3️⃣ Image Upload Handling → Used URL.createObjectURL(file) to dynamically display images.
4️⃣ Download Banner Issues → Ensured images load fully before capturing them with html2canvas.

📌 Future Improvements
🔜 Drag-and-drop image upload

🔜 Save and reuse banner templates

🔜 Multiple file format support (JPG, SVG, etc.)

📞 Contact & Feedback
I’d love to hear your feedback! Feel free to reach out. 🚀

This README.md provides all necessary details for mentors



