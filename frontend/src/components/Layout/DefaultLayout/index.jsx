import MyDrawer from "../../share/MyDrawer"
import React from "react"

export default function DefaultLayout({ children }) {
  return (
    <div>
      <div className="">
        <div className="flex w-[1150px] max-w-full p-1">
          <MyDrawer />
          <div className="ml-6 flex-1">{children}</div>
        </div>
      </div>
    </div>
  )
}