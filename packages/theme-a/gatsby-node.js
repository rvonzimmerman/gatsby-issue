const path = require('path');
const fs = require('fs');

exports.onPreBootstrap = ({reporter}) => {
    const imagePath = 'src/images';
    if (!fs.existsSync(imagePath)) {
        reporter.info(`creating the ${imagePath} directory`);
        fs.mkdirSync(imagePath);
    }
}