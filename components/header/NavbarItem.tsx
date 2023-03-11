"use client";

import React from 'react'
import Link from 'next/link'
import { useSearchParams } from "next/navigation";

interface IProps {
  title: string,
  param: string,
  icon: JSX.Element,
}

const NavbarItem = ({title, param, icon}: IProps) => {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  return (
    <div>
      <Link href={`/?filter=${param}`}>
        <div className='flex items-center gap-3'>
          <span className={`${filter && filter === param ? "flex" : "hidden"}`}>
            {icon}
          </span>
          <p className={`uppercase tracking-[1.15px] py-2 ${filter && filter === param ? "border-b-2 border-b-secondary-400" : ""}`}>{title}</p>
        </div>
      </Link>
    </div>
  )
}

export default NavbarItem