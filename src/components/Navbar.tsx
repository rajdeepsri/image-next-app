'use client'

import { useTheme } from 'next-themes'
import { FC, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'

const Navbar: FC = () => {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Render nothing on the server, and only render once mounted
  if (!mounted) return null

  return (
    <nav className="flex items-center h-16 justify-between px-4 shadow-sm w-full bg-neutral-50 dark:bg-neutral-950 dark:border-b-[1px] dark:border-neutral-700 border-b-[1px] border-neutral-300">
      <h1 className="sm:pl-4 pl-2 font-medium font-Satisfy text-2xl sm:text-2xl text-neutral-900 dark:text-neutral-100">
        Image Gallery App
      </h1>
      <Button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        variant="outline"
        className="h-10 w-10"
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </Button>
    </nav>
  )
}

export default Navbar
