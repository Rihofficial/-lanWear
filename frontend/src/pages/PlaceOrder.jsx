import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import Footer from "../components/Footer";
import { ShopContext } from "./context/ShopContext";

export const PlaceOrder = () => {
  const {
    navigate,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_charges,
    Products,
  } = useContext(ShopContext);
  const [method, setMethod] = useState("cod");

  return (
    <div>
      <div className="bg-primary mb-16">
        {/* Container */}
        <form className="max-padd-container py-10">
          <div className="flex flex-col xl:flex-row  gap-20 xl:gap-28">
            {/* left side */}
            <div className="flex flex-1 flex-col gap-3 text-[95%]">
              <Title title1={"Delivery "} title2={"information"} />
              <div className="flex gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Firt Name"
                  className="ring-1 ring-slate900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2 "
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="ring-1 ring-slate900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2 "
                />
              </div>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="ring-1 ring-slate900/15 p-1 pl-3 rounded-sm bg-white outline-none  "
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="ring-1 ring-slate900/15 p-1 pl-3 rounded-sm bg-white outline-none "
              />
              <input
                type="text"
                name="street"
                placeholder="Street"
                className="ring-1 ring-slate900/15 p-1 pl-3 rounded-sm bg-white outline-none  "
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="ring-1 ring-slate900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2 "
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  className="ring-1 ring-slate900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2 "
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  name="zipcode"
                  placeholder="Zip Code"
                  className="ring-1 ring-slate900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2 "
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="ring-1 ring-slate900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2 "
                />
              </div>
            </div>
            {/* Right side */}
            <div className="flex flex-1 flex-col">
              <CartTotal />
              {/* Payment method */}
              <div className="my-6">
                <h3 className="bold-20 mb-5">
                  Payment <span className="text-secondary">Method</span>
                </h3>
                <div className="flex gap-3">
                  <div
                    onClick={() => setMethod("stripe")}
                    className={`${
                      method === "stripe" ? "btn-dark" : "btn-white"
                    } !py-1 text-xs cursor-pointer`}
                  >
                    Stripe
                  </div>
                  <div
                    onClick={() => setMethod("cod")}
                    className={`${
                      method === "cod" ? "btn-dark" : "btn-white"
                    } !py-1 text-xs cursor-pointer`}
                  >
                    cost on delivery
                  </div>
                </div>
              </div>
              <div>
                <button type="submit" className="btn-secondary"> place Order</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default PlaceOrder;