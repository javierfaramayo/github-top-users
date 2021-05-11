import React from 'react'
import Navbar from '../navbar/Navbar'

interface ILayoutProps {
  children: React.ReactNode
  backRoute?: string
  title: string
}

const Layout = ({ children, backRoute, title }: ILayoutProps): JSX.Element => {
  return (
    <div>
      <Navbar backRoute={backRoute as string} title={title} />
      {children}
    </div>
  )
}

Layout.defaultProps = {
  backRoute: '/',
}

export default Layout
