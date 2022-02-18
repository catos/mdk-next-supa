import React from "react";

type Props = {
  children: React.ReactNode
  color?: "primary" | "secondary"
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button(props: Props) {
  const { className, color, type = "button", ...rest } = props

  let _color = "border border-gray-400 text-black focus:ring-gray-600"
  switch (color) {
    case "primary": _color = "border-0 bg-slate-700 hover:bg-slate-800 text-white focus:ring-slate-600"; break;
    case "secondary": _color = "border-0 bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-600"; break;
  }
  const classes = ["rounded-lg px-4 p-3 cursor-pointer text-sm font-bold uppercase tracking-wider transition ease-linear duration-100 hover:bg-gray-100 hover:no-underline focus:outline-none focus:ring-2 focus:ring-opacity-50", _color, className]

  return <button className={classes.join(" ")} type={type} {...rest} />
}