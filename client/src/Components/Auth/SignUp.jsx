import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FcGoogle } from "react-icons/fc";
export default function SignUp({ isOpen, setIsOpen, ...props }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div
      className={`w-screen  fixed  z-20 ${
        isOpen ? "block" : "hidden"
      }   h-screen bg-black bg-opacity-50`}
    >
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-3xl text-gray-700 font-medium leading-6 "
                >
                  Sign up
                </Dialog.Title>
                <div className=" text-gray-500 font-medium text-lg flex flex-col">
                  <div className="flex mt-8 gap-2 items-center border cursor-pointer border-gray-300 justify-center rounded-lg py-2 bg-white w-full">
                    <FcGoogle /> Continue with Google
                  </div>
                  <span className="w-full flex mt-4 items-center text-center relative">
                    <div className="border-b  w-full mt-1  " />

                    <span className="text-center font-light text-gray-500 inline-block px-1.5 bg-white">
                      or
                    </span>
                    <div className="border-b  w-full mt-1  " />
                  </span>
                  <form className="flex flex-col mt-2 gap-4">
                    <div className=" w-full flex flex-col gap-2">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        id="username"
                        placeholder="John doe"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                      />
                    </div>
                    <div className=" w-full flex flex-col gap-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="email@email.com"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                      />
                    </div>
                    <div className=" w-full flex flex-col gap-2">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        placeholder="******"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                      />
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex text-lg py-2 w-full justify-center px-4 py-2 text-sm font-medium text-white bg-zomato-400 border border-transparent rounded-md hover:bg-zomato-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={closeModal}
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
