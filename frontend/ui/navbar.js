import { pacifico } from "@/ui/fonts";
import Image from "next/image";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";

import Link from "next/link";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/" className="mr-[-8rem]">
        <Image
          src="/images/yumify-logo-removebg.png"
          alt="Yumify Logo"
          width={75}
          height={75}
        />
        <span className={`${pacifico.className} text-black text-2xl`}>
          Yumify
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <Link href="/" className="hover:text-red-600">
          Home
        </Link>
        <Link href="/about" className="hover:text-red-600" base>
          About
        </Link>
        <Link href="/recipes" className="hover:text-red-600" base>
          Recipes
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
