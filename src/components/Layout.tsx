import { PropsWithChildren } from 'react'
import Header from './header';

const Layout = ({children} : PropsWithChildren) => {

  const linkStyle = {
    color : "blue",
    textDecoration : "underline"
  };

  return (
    <div className='bg-gradient-to-br from-background-to-muted'>
        <Header></Header>
        <main className='min-h-screen container mx-auto px-4 py-8'>
            {children}
        </main>
        <footer className='border-t backdrop-blur'>
            <div className='container mx-auto px-4 py-8 text-center text-gray-400'>
                <p>Portfolio of <a href="https://www.linkedin.com/in/rukmani-parthasarathy-3b13a1165" target="_blank" style={linkStyle}>Rukmani R P</a>
                </p>
            </div>
        </footer>
    </div>
  )
}

export default Layout;