/* 
var http = require("http"); // node modules http > fs > os
var fs = require("fs");

var server = http.createServer((req, res) => {
  console.log(req);

  if (req.url == "/") {
    fs.readFile("index.html", (error, html) => {
      res.write(html);
      res.end();
    });
  } else if (req.url == "/products") {
    fs.readFile("urunler.html", (error, html) => {
      res.write(html);
      res.end();
    });
  } else {
    fs.readFile("404.html", (error, html) => {
      res.write(html);
      res.end();
    });
  }
});

server.listen(3000, () => {
  console.log("NODE JS 3000 portunda çalıştı... ");
});
 
*/

const express = require("express");
const app = express();

const userRoutes = require("./Routes/users")


app.set("view engine", "ejs"); // burada ejs tanımlıyoruz ve views klasörünü aktif kılıyoruz
app.use(express.static('node_modules'))
app.use(express.static('public')); // burada ise public klasörünü static dosyalar için aktifleştiriyoruz.
// Örnek olarak public altında ki css'e ulaşırken  /css/style.css yazabiliyoruz. Çünkü public tanımlı.

app.use(userRoutes);

app.listen(3000, () => {
  console.log("3000 portunda çalıştı...");
});
