import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import Logo from '../assets/images/logo.png';

const navLinks = [
  { href: '#', label: 'Trang chủ', active: true },
  { href: '#about', label: 'Về chúng tôi' },
  { href: '#features', label: 'Giới thiệu' },
  { href: '#partners', label: 'Đối tác' },
  { href: '#contact', label: 'Liên hệ' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
    >
      <div className="bg-background">
        <div className="container px-4 py-4 mx-auto bg-white rounded-xl lg:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <img src={Logo} alt="Techera" className="h-10 md:h-12 lg:h-16" />
            </a>

            {/* Desktop Menu - Center */}
            <div className="absolute items-center hidden gap-6 transform -translate-x-1/2 lg:flex left-1/2 xl:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-medium transition-colors text-sm xl:text-base ${link.active
                      ? 'text-primary hover:text-primary/80'
                      : 'text-gray-600 hover:text-primary'
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </Button>

              {/* Hamburger Button - Mobile/Tablet */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="container px-4 py-4 mx-auto">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-medium py-2 transition-colors ${link.active
                          ? 'text-primary'
                          : 'text-gray-600 hover:text-primary'
                        }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
