const express = require("express")
const router = express.Router();

const db = require("../data/db")

router.use("/product/:id", async(req, res) => {
	// res.send(req.params.id); Burada yazı gönderiyoruz.
  
	try {
	  const [data, ] = await db.execute("select * from products where id=? && isActive=true", [req.params.id]);
	  res.render("product-details", { urun:data[0] } );
	}
	catch(error) {
	  console.log(error)
	}
   
  });
  
  router.use("/products", async(req, res) => {
	try {
	  const [data, ] = await db.execute("select * from products");
	  res.render("products", { data } );
	// res.send("anasayfa");
	}
	catch(error) {
	  console.log(error)
	}
  });
  
  router.use("/", async (req, res) => {
	try {
	  const [data, ] = await db.execute("select * from products where isActive=1");
	  res.render("index", { data } );
	// res.send("anasayfa");
	}
	catch(error) {
	  console.log(error)
	}
	
  });

  module.exports = router;