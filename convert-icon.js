const pngToIco = require('png-to-ico').default || require('png-to-ico');
const fs = require('fs');

(async () => {
  try {
    const buf = await pngToIco(['icon.png']);
    fs.writeFileSync('icon.ico', buf);
    console.log('Иконка icon.ico создана!');
  } catch (e) {
    console.error(e);
  }
})();
