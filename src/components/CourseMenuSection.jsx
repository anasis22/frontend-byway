import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useData } from "../contexts/DataContexts";
import { useAuth } from "../contexts/AuthContexts";

const CourseMenuSection = () => {
  const { menuSection, setMenuSection, navigateLoginPage, navigateCart } =
    useData();
  const { user } = useAuth();
  return (
    <div
      className={`bg-slate-200 w-64 h-screen absolute top-0 right-0
    transition-all duration-300 ease-in-out ${
      menuSection ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 -z-10"
    } overflow-hidden"}
  `}
    >
      <section className="flex flex-col items-center justify-center mt-20">
        {/* wishlist */}
        <div className="w-full cursor-pointer flex items-center justify-center border-t border-slate-400 border-b py-3 gap-6">
          <img className="w-5" src="/icons/heart-icon.png" alt="cart" />
          <p>Wishlist</p>
        </div>
        {/* cart */}
        <div
          onClick={navigateCart}
          className="w-full cursor-pointer flex items-center justify-center  border-slate-400 border-b py-3 gap-6"
        >
          <img
            className="w-5 cursor-pointer"
            src="/icons/cart.png"
            alt="cart"
          />
          <p>Cart</p>
          {user && <CartCount />}
        </div>
        {/* notification */}
        <div className="w-full cursor-pointer flex items-center justify-center  border-slate-400 border-b py-3 gap-6">
          <img
            className="w-5 cursor-pointer"
            src="/icons/bell-icon.png"
            alt="cart"
          />
          <p>Notifications</p>
        </div>
        {/* account */}
        <div
          onClick={navigateLoginPage}
          className="w-full cursor-pointer flex items-center justify-center  border-slate-400 border-b py-3 gap-6"
        >
          <img
            className="w-5 cursor-pointer"
            src="/icons/account.png"
            alt="cart"
          />
          <p>{user ? user.username : "Account"}</p>
        </div>

        <IoIosCloseCircle
          onClick={() => setMenuSection(false)}
          className="text-xl absolute top-5 left-5 cursor-pointer"
        />
      </section>
    </div>
  );
};

export default CourseMenuSection;
