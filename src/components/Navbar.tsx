import ChangeThemeBtn from './ChangeThemeBtn'

const Navbar = () => {
  return (
    <nav className="flex items-center h-16 justify-between px-2 sm:px-4 shadow-sm w-full bg-neutral-50 dark:bg-neutral-950 dark:border-b-[1px] dark:border-neutral-700 border-b-[1px] border-neutral-300">
      <h1 className="sm:pl-4 pl-2 font-medium font-Satisfy text-base sm:text-2xl text-neutral-900 dark:text-neutral-100">
        Image Gallery App
      </h1>
      <ChangeThemeBtn />
    </nav>
  )
}

export default Navbar
