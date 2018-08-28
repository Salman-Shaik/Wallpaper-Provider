let getWallpaperUrl = (fs) => {
  let wallpapers = fs.readdirSync('./public/Resources/images');
  return wallpapers[Math.floor(Math.random() * wallpapers.length)];
};

let toS = (object) => JSON.stringify(object, null, 2);

module.exports = {
  getWallpaperUrl,
  toS
};
