import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../contexts/CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PaidIcon from "@mui/icons-material/Paid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#F3F3F3",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "16px",
};

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", confirmEmail: "" });
  const navigate = useNavigate();
  const db = getFirestore();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const removeItem = (idx) => {
    let tempCart = [...cart];
    tempCart.splice(idx, 1);
    setCart([...tempCart]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.email !== form.confirmEmail) {
      alert("¡Los correos electrónicos no coinciden!");
      return;
    }

    const now = new Date();
    const purchaseDate = now.toLocaleDateString();
    const purchaseTime = now.toLocaleTimeString();

    try {
      const docRef = await addDoc(collection(db, "orders"), {
        ...form,
        items: cart,
        total: parseFloat(cart.reduce((acc, value) => acc + value.qty * value.price, 0).toFixed(2)),
        date: purchaseDate,
        time: purchaseTime
      });
      clearCart();
      navigate("/order-confirmation", { state: { orderId: docRef.id, firstName: form.firstName, lastName: form.lastName, date: purchaseDate, time: purchaseTime } });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  let total = parseFloat(cart.reduce((acc, value) => acc + value.qty * value.price, 0).toFixed(2));

  return (
    <div className="container">
      {cart.length > 0 ? (
        <>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Imagen</th>
                <th scope="col">Título</th>
                <th scope="col">Precio Unitario</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio Total</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.img} height="80px" width="90px" alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.qty}</td>
                  <td>${(item.price * item.qty).toFixed(2)}</td>
                  <td>
                    <Tooltip title="Eliminar Artículo">
                      <Button variant="contained" color="error" onClick={() => removeItem(idx)}>
                        <DeleteIcon />
                      </Button>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total">
            <Stack direction="row" spacing={2}>
              <Tooltip title="¡Vaciar todo!">
                <Button variant="contained" color="error" onClick={() => clearCart()}>
                  <HighlightOffIcon />
                </Button>
              </Tooltip>
              <Tooltip title="Pagar">
                <Button onClick={handleOpen} variant="contained" color="success">
                  <PaidIcon />
                </Button>
              </Tooltip>
              <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Complete su pedido
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField name="firstName" label="Nombre" fullWidth margin="normal" required value={form.firstName} onChange={handleInputChange} />
                    <TextField name="lastName" label="Apellido" fullWidth margin="normal" required value={form.lastName} onChange={handleInputChange} />
                    <TextField name="phone" label="Teléfono" fullWidth margin="normal" required value={form.phone} onChange={handleInputChange} />
                    <TextField name="email" label="Correo Electrónico" type="email" fullWidth margin="normal" required value={form.email} onChange={handleInputChange} />
                    <TextField name="confirmEmail" label="Confirmar Correo Electrónico" type="email" fullWidth margin="normal" required value={form.confirmEmail} onChange={handleInputChange} />
                    <Button type="submit" variant="contained" className="submit-button">
                      COMPRAR
                    </Button>
                  </form>
                </Box>
              </Modal>
            </Stack>
            <br />
          </div>
          <h4 className="total-title">Total: ${total}</h4>
        </>
      ) : (
        <>
          <h3 className="cart-title">¡El carrito está vacío!</h3>
        </>
      )}
    </div>
  );
};

export default Cart;