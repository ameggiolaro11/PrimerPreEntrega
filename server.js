const express = require("express");
const fs = require("fs/promises");

const app = express();
const PORT = 8080;

app.use(express.json());

// Rutas de productos
const productsRouter = express.Router();

productsRouter.get("/", async (req, res) => {
  // Lógica para obtener todos los productos
  // Puedes implementar la limitación ?limit aquí si es necesario
  // ...

  res.json({ message: "Lista de productos" });
});

productsRouter.get("/:pid", async (req, res) => {
  const productId = req.params.pid;
  // Lógica para obtener un producto por su ID
  // ...

  res.json({ message: `Detalles del producto ${productId}` });
});

productsRouter.post("/", async (req, res) => {
  const newProduct = req.body;
  // Lógica para agregar un nuevo producto
  // ...

  res.json({ message: "Producto agregado exitosamente" });
});

productsRouter.put("/:pid", async (req, res) => {
  const productId = req.params.pid;
  const updatedProduct = req.body;
  // Lógica para actualizar un producto por su ID
  // ...

  res.json({ message: `Producto ${productId} actualizado` });
});

productsRouter.delete("/:pid", async (req, res) => {
  const productId = req.params.pid;
  // Lógica para eliminar un producto por su ID
  // ...

  res.json({ message: `Producto ${productId} eliminado` });
});

app.use("/api/products", productsRouter);

// Rutas de carritos
const cartsRouter = express.Router();

cartsRouter.post("/", async (req, res) => {
  const newCart = req.body;
  // Lógica para crear un nuevo carrito
  // ...

  res.json({ message: "Carrito creado exitosamente" });
});

cartsRouter.get("/:cid", async (req, res) => {
  const cartId = req.params.cid;
  // Lógica para obtener los productos de un carrito por su ID
  // ...

  res.json({ message: `Productos del carrito ${cartId}` });
});

cartsRouter.post("/:cid/product/:pid", async (req, res) => {
  const cartId = req.params.cid;
  const productId = req.params.pid;
  const productToAdd = { id: productId, quantity: 1 }; // Ajusta según tus necesidades
  // Lógica para agregar un producto al carrito
  // ...

  res.json({ message: `Producto ${productId} agregado al carrito ${cartId}` });
});

app.use("/api/carts", cartsRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
