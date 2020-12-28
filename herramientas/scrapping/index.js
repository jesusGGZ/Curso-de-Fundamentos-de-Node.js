const puppeteer = require('puppeteer');

(async () => {
    // Lanza el navegador
    console.log('Lanzamos navegador!');
   // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({headless: false}); // Mostrar el navegador cuando se lance

    // Abre un pagina
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    // Se obtiene el h1 de la pagina actual del navegador
    var titulo1 = await page.evaluate( () => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);

        return h1.innerHTML;
    });

    // Muestra el titulo(h1) en consola
    console.log(titulo1);

    // Cierra el navegador
    browser.close();
    console.log('Navegador cerrado');
})();