import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import '../styles/banner.css';

const Banner = () => {
  const [bannerText, setBannerText] = useState('Welcome to MediaWiki Banner Tool');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontSize, setFontSize] = useState('20px');
  const [textAlign, setTextAlign] = useState('center');
  const [width, setWidth] = useState('80%');
  const [height, setHeight] = useState('300px');
  const [borderRadius, setBorderRadius] = useState('10px');
  const [image, setImage] = useState(null);

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Download the banner as an image
  const downloadBanner = async () => {
    const bannerElement = document.querySelector('.banner-preview');
    if (!bannerElement) {
      console.error("Banner element not found!");
      return;
    }

    try {
      const canvas = await html2canvas(bannerElement);
      const link = document.createElement('a');
      link.download = 'custom-banner.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error("Error capturing banner:", error);
    }
  };

  return (
    <div className="container">
      <h1>MediaWiki Banner Customizer</h1>

      <div
        className="banner-preview"
        style={{
          backgroundColor: bgColor,
          color: textColor,
          fontFamily,
          fontSize,
          textAlign,
          width,
          height,
          borderRadius,
          display: 'flex',
          alignItems: 'center',
          justifyContent: textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start',
          padding: '10px',
        }}
      >
        {image && <img src={image} alt="Banner" className="banner-image" />}
        <p>{bannerText}</p>
      </div>

      <form className="banner-form">
        <label>Banner Text:</label>
        <input type="text" value={bannerText} onChange={(e) => setBannerText(e.target.value)} />

        <label>Background Color:</label>
        <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />

        <label>Text Color:</label>
        <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />

        <label>Font Family:</label>
        <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>

        <label>Font Size:</label>
        <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
          <option value="30px">30px</option>
          <option value="36px">36px</option>
        </select>

        <label>Text Alignment:</label>
        <select value={textAlign} onChange={(e) => setTextAlign(e.target.value)}>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>

        <label>Width:</label>
        <select value={width} onChange={(e) => setWidth(e.target.value)}>
          <option value="50%">50%</option>
          <option value="60%">60%</option>
          <option value="70%">70%</option>
          <option value="80%">80%</option>
          <option value="90%">90%</option>
          <option value="100%">100%</option>
        </select>

        <label>Height:</label>
        <select value={height} onChange={(e) => setHeight(e.target.value)}>
          <option value="200px">200px</option>
          <option value="300px">300px</option>
          <option value="400px">400px</option>
          <option value="500px">500px</option>
          <option value="600px">600px</option>
        </select>

        <label>Border Radius:</label>
        <select value={borderRadius} onChange={(e) => setBorderRadius(e.target.value)}>
          <option value="0px">0px (Square)</option>
          <option value="10px">10px</option>
          <option value="20px">20px</option>
          <option value="30px">30px</option>
          <option value="50px">50px (Rounded)</option>
        </select>

        <label>Upload Image:</label>
        <input type="file" onChange={handleImageUpload} />

        <button type="button" onClick={downloadBanner}>Download Banner</button>
      </form>
    </div>
  );
};

export default Banner;
