const fs = require('fs');
const path = require('path');

// Path to the HTML file
const htmlFilePath = path.join(__dirname, 'userinput.html');

// Read the HTML file
fs.readFile(htmlFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the HTML file:', err);
        return;
    }

    // Store the data in a variable
    const htmlContent = data;

    // Log the content to the console (or you can process it further)
    console.log(htmlContent);
});