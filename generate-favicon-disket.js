const sharp = require('sharp');
const fs = require('fs');

// Create AR logo with Disket Mono font
async function generateFaviconDisket() {
  try {
    // Create a 32x32 PNG with black background and white AR text using Disket Mono
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
        <rect width="32" height="32" fill="#000000"/>
        <text x="16" y="22" font-family="Disket Mono, monospace" font-size="18" font-weight="bold" text-anchor="middle" fill="#ffffff">AR</text>
      </svg>
    `;

    // Convert SVG to PNG
    await sharp(Buffer.from(svg))
      .png()
      .resize(32, 32)
      .toFile('app/icon.png');

    // Also create a 16x16 version
    await sharp(Buffer.from(svg))
      .png()
      .resize(16, 16)
      .toFile('public/favicon-16x16.png');

    // Create a 32x32 version for public folder
    await sharp(Buffer.from(svg))
      .png()
      .resize(32, 32)
      .toFile('public/favicon-32x32.png');

    // Create apple-touch-icon (180x180)
    await sharp(Buffer.from(svg))
      .png()
      .resize(180, 180)
      .toFile('public/apple-touch-icon.png');

    console.log('✅ Favicon files regenerated with Disket Mono font!');
    console.log('Updated files:');
    console.log('- app/icon.png (32x32)');
    console.log('- public/favicon-16x16.png');
    console.log('- public/favicon-32x32.png');
    console.log('- public/apple-touch-icon.png');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFaviconDisket();
