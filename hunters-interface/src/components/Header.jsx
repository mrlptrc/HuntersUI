'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  // Aplica o tema no carregamento
  useEffect(() => {
    const dark = localStorage.getItem('theme') === 'dark'
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  // Alterna entre temas
  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle('dark', newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-10 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-black dark:text-white">
        murilo.art
      </Link>

      {/* Menu (centralizado em telas md+) */}
      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
        <Link href="#sobre">sobre</Link>
        <Link href="#portfolio">portfolio</Link>
        <Link href="#orcamento">orçamento</Link>
        <Link href="#contato">contato</Link>
      </nav>

      {/* Ações à direita */}
      <div className="flex items-center gap-3">
        {/* Botão tema */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-300"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </Button>

        {/* Botão login */}
        <Button variant="outline" className="text-sm font-medium">
          fazer login
        </Button>
      </div>
    </header>
  )
}
