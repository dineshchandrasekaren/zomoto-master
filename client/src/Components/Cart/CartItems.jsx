import React, { useState } from 'react'

const CartItems = (props) => {
    const [quantity, setQuantity] = useState(1);
    const increament = () => setQuantity(() => quantity + 1);
    const decreament = () => setQuantity(() => quantity - 1);
    return (
      <div className="flex items-center justify-between border-b px-2 py-3">
        <div className="flex gap-2 items-center self-start">
          <img
            className="w-4 h-4"
            src={`${
              props.isVeg
                ? "http://images.sasongsmat.nu/vegetarianmark/indian-vegetarian-mark.svg"
                : "https://quickbasket.store/wp-content/uploads/2021/05/nonveg_icon.png"
            }`}
            alt="veg icon"
          />
                <h2>{ props.title}</h2>
        </div>
        <div className="text-right flex flex-col gap-2">
                <p>₹ { parseInt(props.price)*quantity}</p>
          <div className="flex items-center bg-zomato-400 gap-3 px-2 rounded text-white ">
            <button onClick={decreament}>-</button>
                    <p>{ quantity}</p>
            <button onClick={increament}>+</button>
          </div>
        </div>
      </div>
    );
}
// Chole Mix Veg Momos [5 Pieces]

export default CartItems;
