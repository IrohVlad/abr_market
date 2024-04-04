"use client"
import { ReactNode } from "react";

interface IButton {
    children: ReactNode,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default function Button({children, className, onClick}: IButton) {
  return (
    <div onClick={onClick} className={' bg-orange text-black text-[18px] font-bold font-title hover:bg-light-orange transition-colors duration-300 cursor-pointer w-fit rounded-[4px] ' + className}>{children}</div>
  )
}
