import { useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderId, firstName, lastName, date, time } = location.state;

  return (
    <div className="container">
      <h2>Felicidades, {firstName} {lastName}!</h2>
      <h3>Su compra fue realizada con éxito.</h3>
      <p>Su ID de pedido es: {orderId}</p>
      <p>Fecha de compra: {date}</p>
    </div>
  );
};

export default OrderConfirmation;
