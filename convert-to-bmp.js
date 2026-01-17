const { Jimp } = require('jimp');

async function convert() {
  // Конвертируем sidebar
  const sidebar = await Jimp.read('build/installerSidebar.png');
  await sidebar.write('build/installerSidebar.bmp');
  console.log('✓ installerSidebar.bmp');
  
  // Конвертируем header  
  const header = await Jimp.read('build/installerHeader.png');
  await header.write('build/installerHeader.bmp');
  console.log('✓ installerHeader.bmp');
  
  console.log('✅ Готово!');
}

convert();
