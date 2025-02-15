import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "./dropdown.jsx";
import DropdownMobile from "./dropdown-mobile.jsx";
import StoreLink from "../storeLink.jsx";


export default function Navbar({ navBarLinks, storeLinks}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex flex-wrap md:flex-nowrap z-50 w-full py-7">
      <nav
        aria-label="Global"
        className="lg:mx-auto flex max-w-7xl w-full items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a className="" href="/" aria-label="">
            <img
              className="hidden dark:block w-32 sm:w-48"
              src={"/logo-dk.svg"}
              alt="App Logo"
            />
            <img
              className="block dark:hidden w-32 sm:w-48"
              src={"/logo-lt.svg"}
              alt="App Logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden justify-end">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-6">
          {navBarLinks.map((item) =>
            item.dropdown ? (
              <Dropdown LinkObj={item.dropdown} LinkObjName={item.name} />
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-semibold text-gray-900 dark:text-gray-200 hover:text-600 dark:hover:text-400"
              >
                {item.name}
              </a>
            )
          )}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center justify-between">
          <StoreLink storeLinks={storeLinks} width={"w-52"} />
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a className="" href="/" aria-label="">
              <img
                className="hidden dark:block w-32 sm:w-48"
                src={"/logo-dk.svg"}
                alt="App Logo"
              />
              <img
                className="block dark:hidden w-32 sm:w-48"
                src={"/logo-lt.svg"}
                alt="App Logo"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navBarLinks.map((item) =>
                  item.dropdown ? (
                    <DropdownMobile
                      LinkObj={item.dropdown}
                      LinkObjName={item.name}
                    />
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>
              <div className="py-6 inline-flex w-full mx-auto items-center justify-between">
                <StoreLink storeLinks={storeLinks} />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
