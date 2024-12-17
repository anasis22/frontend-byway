import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { useData } from "../contexts/DataContexts";
import { useAuth } from "../contexts/AuthContexts";
import CartCount from "./CartCount";

const CourseNavbar = () => {
  const { setMenuSection, navigateCart, navigateLoginPage } = useData();
  const { user } = useAuth();

  return (
    <div className="w-[90%] flex items-center justify-between pt-4 mb-4 text-txtColor">
      <section className="flex items-center justify-center gap-2">
        <img className="w-7" src="/icons/byway-logo.png" alt="logo" />
        <h6>Byway</h6>
      </section>

      <section
        className="items-center justify-center gap-6
      xs:hidden
      sm:flex
      "
      >
        <img
          className="w-5 cursor-pointer"
          src="/icons/heart-icon.png"
          alt="heart"
        />
        <div className="relative">
          <img
            onClick={navigateCart}
            className="w-5 cursor-pointer"
            src="/icons/cart.png"
            alt="cart"
          />
          {user && <CartCount />}
        </div>
        <img
          className="w-5 cursor-pointer"
          src="/icons/bell-icon.png"
          alt="bell-icon"
        />
        <div
          className="
        flex flex-col items-center
        "
        >
          <img
            onClick={navigateLoginPage}
            className="w-5 cursor-pointer"
            src="/icons/account.png"
            alt="account"
          />
          {user && <p className="text-xs font-light">{user.username}</p>}
        </div>
      </section>

      {/* menu bar max-width-640px */}
      <section className="xs:block sm:hidden">
        <CiMenuFries
          onClick={() => setMenuSection(true)}
          className="text-xl cursor-pointer"
        />
      </section>
    </div>
  );
};

export default CourseNavbar;
