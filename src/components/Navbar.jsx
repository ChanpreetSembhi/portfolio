import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { RiCloseFill, RiMenuFill } from "@remixicon/react";

const navLink = [
  { name: "About", href: "#about", current: true },
  { name: "Projects", href: "#projects", current: true },
  { name: "Skills", href: "#skills", current: true },
  { name: "Testimonials", href: "#testimonials", current: true },
  { name: "Contact", href: "#contact", current: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 p-4 lg:sticky lg:top-0 lg:z-10">
        <div className="lg:max-w-7xl mx-auto flex items-center justify-between">
          <h4 className="text-2xl font-bold">
            <span className="text-indigo-500 font-black text-3xl ml-px">P</span>
            ortfolio
          </h4>
          <div className="lg:flex items-center gap-6 *:text-sm *:transition-all *:duration-100 hidden">
            {navLink.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
          </div>
          <button onClick={() => setOpen(true)} className="lg:hidden">
            <RiMenuFill />
          </button>
        </div>
      </nav>
      {/* Mobile Nav */}
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:-translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="flex items-center justify-between px-4 sm:px-6">
                    <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                      <div className="text-2xl font-bold">
                        <span className="text-indigo-500 font-black text-3xl ml-px">
                          P
                        </span>
                        ortfolio
                      </div>
                    </DialogTitle>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="text-gray-500"
                    >
                      <RiCloseFill aria-hidden="true" />
                    </button>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <div className="inline-flex flex-col space-y-3 *:transition-all *:duration-100">
                      {navLink.map((link) => (
                        <a key={link.name} href={link.href}>
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Navbar;
