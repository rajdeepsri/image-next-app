import { Github, Linkedin } from 'lucide-react'
import React from 'react'

const personalLinks = [
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/rajdeep-shrivastava/',
    icon: <Linkedin size={16} />,
  },
  {
    title: 'Github',
    link: 'https://github.com/rajdeepsri',
    icon: <Github size={16} />,
  },
]

const Footer = () => {
  return (
    <footer className="bg-neutral-100 shadow dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 sm:px-20 px-4 sm:py-4 py-2 flex flex-col items-center justify-between sm:flex-row gap-1 sm:gap-0">
      <p className="text-neutral-700 dark:text-neutral-300 sm:text-sm text-xs">
        Developed By <span className="font-semibold">Rajdeep Shrivastava</span>
      </p>
      <div className="flex items-center justify-center gap-4">
        {personalLinks.map(item => (
          <a
            key={item.title}
            className="font-semibold text-neutral-700 dark:text-neutral-300 hover:underline flex items-center gap-1 sm:text-sm text-xs"
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
          >
            <span>{item.icon}</span> {item.title}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
