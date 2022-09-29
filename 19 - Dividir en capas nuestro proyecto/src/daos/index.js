import dotenv from "dotenv";
import config from "../config/config.js";
dotenv.config();

let ProductoDao;
let CarritoDao;

switch (config.database) {
  case "firebase":
    const { default: ProductoDaoFirebase } = await import(
      "./productos/productosDaosFirebase.js"
    );
    const { default: CarritoDaoFirebase } = await import(
      "./carritos/carritoDaosFirebase.js"
    );

    ProductoDao = ProductoDaoFirebase;
    CarritoDao = CarritoDaoFirebase;

    break;
  case "mongodb":
    const { default: ProductoDaoMongo } = await import(
      "./productos/productosDaosMongo.js"
    );
    const { default: CarritoDaoMongo } = await import(
      "./carritos/carritoDaosMongo.js"
    );

    ProductoDao = ProductoDaoMongo;
    CarritoDao = CarritoDaoMongo;

    break;
}

export default { ProductoDao, CarritoDao };