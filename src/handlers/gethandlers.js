let utilities = require('../library/utils');
const fs = require('fs');
const path = require('path');

const getWallpaper = (req, res) => {
  res.sendFile(path.join(__dirname,
    '../../public/Resources/images',
    utilities.getWallpaperUrl(fs)));
};

module.exports = {
  getWallpaper
};
