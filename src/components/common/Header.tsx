import { useRouter } from "next/router";
import React from "react";

interface HeaderProps {
  title?: string;
  leftIcon?: "hamburger" | "back";
  closeIcon?: boolean;
}

function Header({ title, closeIcon, leftIcon }: HeaderProps) {
  return <div>Header</div>;
}

export default Header;
