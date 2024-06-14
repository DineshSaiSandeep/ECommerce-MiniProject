//import db schema
const Cart = require("../model/Cart");

//Cart Fetching
const cart_fetch = async (req, res) => {
  u_name = req.body.u_name;
  try {
    const cartItems = await Cart.find({ u_name: u_name });
    console.log("Cart items are: ", cartItems);
    res.json(cartItems);
  } catch (error) {
    console.log("Cart Fetch error :- ", error);
    res.json({ message: error });
  }
};

//Insert into Cart
const cart_insert = async (req, res) => {
  const cart = new Cart({
    p_id: req.body.p_id,
    p_cost: req.body.p_cost,
    p_img: req.body.p_img,
    qty: 1,
    u_name: req.body.u_name,
  });
  try {
    const savedCart = await cart.save();
    console.log("Item Added to Cart ", savedCart);
    res.send({ message: "Item Added to Cart" });
  } catch (error) {
    res.status(400).send(error);
  }
};

//Update Cart
const cart_update = async (req, res) => {
  let u_name = req.body.u_name;
  let p_id = req.body.p_id;
  let updatedqty = req.body.qty;
  try {
    const cartProduct = await Cart.findOneAndUpdate(
      { p_id: p_id, u_name: u_name },
      { qty: updatedqty }
    );
    console.log("Cart Updated");
    res.json({ message: "Cart Updated" });
  } catch (error) {
    console.log("Cart Updation error :- ", error);
    res.json({ message: error });
  }
};
// const cart_update = async (req, res) => {
//   let u_name = req.body.u_name;
//   let p_id = req.body.p_id;
//   try {
//     const cartProduct = await Cart.findOne({ p_id: p_id, u_name: u_name });
//     console.log(cartProduct);
//     let updatedqty = cartProduct.qty + 1;
//     const updateProductqty = await Cart.updateOne(
//       { p_id: p_id, u_name: u_name },
//       { qty: updatedqty }
//     );
//     console.log("Cart Updated");
//     res.json({ message: "Cart Updated" });
//   } catch (error) {
//     console.log("Fetch error :- ", error);
//     res.json({ message: error });
//   }
// };

//Delete Cart
const cart_delete = async (req, res) => {
  let u_name = req.body.u_name;
  let p_id = req.body.p_id;
  try {
    const cartProduct = await Cart.deleteOne({ p_id: p_id, u_name: u_name });
    console.log("Cart Item Deleted");
    res.json({ message: "Cart Item Deleted" });
  } catch (error) {
    console.log("Cart Item deletion error :- ", error);
    res.json({ message: error });
  }
};

module.exports = { cart_fetch, cart_insert, cart_update, cart_delete };
