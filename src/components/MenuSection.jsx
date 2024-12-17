import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useData } from "../contexts/DataContexts";
import { useAuth } from "../contexts/AuthContexts";

const MenuSection = () => {
  const { menuSection, setMenuSection , navigateLoginPage, navigateSignupPage , navigateCart } = useData();
  const { user , logout} = useAuth()

  return (
    <div
      className={`bg-slate-200 w-64 h-screen absolute top-0 right-0
    transition-all duration-300 ease-in-out ${
      menuSection ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 -z-10"
    } overflow-hidden"}
  `}
    >
      {user ? (
        <section
        className="flex flex-col mt-10 items-center justify-center gap-5
   "
      >
        <div className="
        flex flex-col items-center justify-center
        ">
        <img className="w-5" src="/icons/account.png" alt="account" />
        <p className="text-xs font-light mt-1">{user.username}</p>
        </div>
        <button onClick={logout} className="border-2 border-txtColor px-2 py-0.5">Logout</button>
        <IoIosCloseCircle
            onClick={() => setMenuSection(false)}
            className="text-xl absolute top-5 left-5 cursor-pointer"
          />
      </section>
      ) : (
        <section className="flex flex-col items-center justify-center gap-6 mt-20">
          <button onClick={navigateLoginPage}  className="border-2 border-txtColor px-2 py-1">Login</button>
          <button onClick={navigateSignupPage}  className="px-2 py-1 bg-txtColor text-white">Sign Up</button>
          <IoIosCloseCircle
            onClick={() => setMenuSection(false)}
            className="text-xl absolute top-5 left-5 cursor-pointer"
          />
        </section>
      )}
     
    </div>
  );
};

export default MenuSection;
