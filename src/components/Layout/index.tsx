import React from 'react'
import { Outlet } from 'react-router'
type Props = {
    children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            {/* <Header /> */}
            <main>{children || <Outlet />}</main>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout
