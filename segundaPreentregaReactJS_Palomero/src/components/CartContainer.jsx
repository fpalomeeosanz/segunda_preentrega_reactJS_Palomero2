import CartIcon from "./CartIcon";
import CartItems from "./CartItems";

//se actualizó el contenedor para que use CartItems
const CartContainer = () => {
    return(
        <div className="bg-info rounded  p-3 position-relative"
        >
           <CartIcon color="white"/> 
           <CartItems />
        </div>
    );
};

export default CartContainer;