MediaWiki Banner Creation Tool

📌 Project Overview

The MediaWiki Banner Creation Tool is an interactive web application that allows users to create and customize banners with various styling options. Users can personalize their banners in real-time by modifying:

✅ Background color
✅ Text color, font, and alignment
✅ Banner width, height, and border-radius
✅ Image upload feature for custom banners
✅ Font styles (bold, italic, etc.)
✅ Downloadable banner as an image

This tool provides a smooth and interactive experience with live previews, dynamic UI changes, and an easy-to-use form interface.

🎯 Features
🔹 Customization Options
Live Preview – Changes appear instantly on the banner.

Background & Text Customization – Users can select colors using color pickers.

Font Selection – Choose from different font styles.

Text Alignment – Left, Center, and Right alignment options.

Size Customization – Adjust width, height, and border-radius using dropdowns.

Image Upload – Users can upload and display an image on the banner.

Download as Image – Export the customized banner as a .png file.

🔹 Interactive UI
Smooth Animations – UI elements transition seamlessly.

Responsive Design – The tool adapts to all screen sizes.

🛠 Technologies Used
Technology	Purpose
React.js	Component-based frontend framework
JavaScript (ES6+)	Handles event listeners and dynamic updates
CSS3	Custom styling for layout and responsiveness
Framer Motion	Smooth animations and transitions
html2canvas	Converts the banner to an image for download
Git & GitHub	Version control and repository hosting
🚀 Getting Started
1️⃣ Installation & Setup


🔹 Clone the Repository
git clone https://github.com/nitika1989/updated-banner-tool.git
cd mediawiki-banner-tool
🔹 Install Dependencies
npm install
🔹 Start the Development Server
npm start
The app will be available at http://localhost:3000.

📂 Project Structure

mediawiki-banner-tool/
│── public/
│── src/
│   ├── components/
│   │   ├── Banner.js  # Banner customization component
│   │  
│   ├── styles/
│   │   ├── banner.css  # Styling for banner and UI
│   ├── App.js  # Main application component
│   ├── index.js  # Entry point of React app
│── .gitignore
│── package.json
│── README.md  # This file
🎨 How It Works
2️⃣ Customizing the Banner
Background Color: Choose any color for the banner background.

Text Color & Font: Change text color and choose from multiple fonts.

Text Alignment: Left, center, or right alignment.

Banner Size & Border Radius: Adjust width, height, and border shape.

Upload an Image: Add an image inside the banner.

3️⃣ Live Preview
Any changes made in the form reflect immediately in the banner.

4️⃣ Downloading the Banner
Clicking the "Download Banner" button will generate and download a .png image of the customized banner.

 Challenges & How I Overcame Them
1️⃣ Tailwind CSS Issues → Replaced it with pure CSS for styling.
2️⃣ State Management Complexity → Used React's useState to efficiently handle multiple properties.
3️⃣ Image Upload Handling → Used URL.createObjectURL(file) to dynamically display images.
4️⃣ Download Banner Issues → Ensured images load fully before capturing them with html2canvas.

📌 Future Improvements
Add drag-and-drop image upload.

Allow users to save and reuse templates.

Support multiple file formats (JPG, SVG, etc.).

📞 Contact & Feedback
I’d love to hear your feedback! Feel free to reach out. 🚀

