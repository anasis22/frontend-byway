import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { useData } from "../contexts/DataContexts";
import { useAuth } from "../contexts/AuthContexts";

const HomeNavbar = () => {
  const { setMenuSection , navigateLoginPage, navigateSignupPage , navigateCart , buyedCoursesCount} = useData();
  const { user , logout } = useAuth();
  return (
    <div className="w-[90%] flex items-center justify-between pt-4 text-txtColor">
      <section className="flex items-center justify-center gap-2">
        <img className="w-7" src="/icons/byway-logo.png" alt="logo" />
        <h6>Byway</h6>
      </section>
      {user ? (
        <section
          className="items-center justify-center gap-6
     xs:hidden
     sm:flex
     "
        >
          <button onClick={logout} className="border-2 border-txtColor px-2 py-0.5">Logout</button>
          <div className="
          flex flex-col items-center justify-center
          ">
          <img className="w-5" src="/icons/account.png" alt="account" />
          <p className="text-xs font-light mt-1">{user.username}</p>
          </div>
        </section>
      ) : (
        <section
          className="items-center justify-center gap-4
    xs:hidden
    sm:flex
    "
        >
          <button onClick={navigateLoginPage} className="border-2 border-txtColor px-3 py-1">Login</button>
          <button onClick={navigateSignupPage} className="px-3 py-1.5 bg-txtColor text-white">
            Sign Up
          </button>
        </section>
      )}

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

export default HomeNavbar;
