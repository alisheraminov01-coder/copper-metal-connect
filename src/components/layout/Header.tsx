import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'uz', label: "O'zbek", flag: '🇺🇿' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/products', label: t('nav.products') },
    { path: '/vacancies', label: t('nav.vacancies') },
    { path: '/contacts', label: t('nav.contacts') },
  ];

  const currentLang = languages.find((l) => l.code === language);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-copper-700/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg gradient-copper flex items-center justify-center shadow-copper">
              <span className="text-2xl font-heading font-bold text-secondary">Cu</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-heading font-bold text-primary-foreground">COPPER METAL</h1>
              <p className="text-xs text-copper-300">Uzbekistan</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-copper-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-copper-200 hover:text-primary hover:bg-copper-800/30">
                  <span className="mr-2">{currentLang?.flag}</span>
                  <span className="hidden sm:inline">{currentLang?.label}</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-secondary border-copper-700">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`cursor-pointer ${
                      language === lang.code ? 'text-primary' : 'text-copper-200'
                    } hover:text-primary hover:bg-copper-800/30`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contacts" className="hidden md:block">
              <Button className="gradient-copper text-secondary font-semibold hover:opacity-90 transition-opacity">
                {t('hero.cta')}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-copper-200 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-copper-700/30 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-copper-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contacts" onClick={() => setIsMenuOpen(false)}>
              <Button className="mt-4 w-full gradient-copper text-secondary font-semibold">
                {t('hero.cta')}
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
