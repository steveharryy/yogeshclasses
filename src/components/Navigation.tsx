import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Sun, Moon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../photos/Yogesh Kochar Classes Logo copy.png';

type SubSubItem = {
  label: string;
  href: string;
};

type SubItem = {
  label: string;
  href: string;
  subItems?: SubSubItem[];
};

type DropdownItem = {
  label: string;
  href: string;
  subItems?: SubItem[];
};

type NavItem = {
  label: string;
  href: string;
  isPage?: boolean;
  dropdown?: DropdownItem[];
};


const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

 const learnWithUsDropdownItems: DropdownItem[] = [
  {
    label: 'Class IX-X (Foundation Years)',
    href: '#contact',
    subItems: [
      { label: 'Mathematics', href: '#contact' },
      { label: 'Science', href: '#contact' },
      { label: 'English', href: '#contact' },
      { label: 'Social Science', href: '#contact' }
    ]
  },
  {
    label: 'Class XI-XII (Career Defining)',
    href: '#contact',
    subItems: [
      {
        label: 'Commerce',
        href: '#contact',
        subItems: [
          { label: 'Mathematics', href: '#contact' },
          { label: 'Accounts', href: '#contact' },
          { label: 'Economics', href: '#contact' },
          { label: 'English', href: '#contact' },
          { label: 'Business Studies', href: '#contact' }
        ]
      },
      {
        label: 'Humanities',
        href: '#contact',
        subItems: [
          { label: 'Economics', href: '#contact' },
          { label: 'English', href: '#contact' },
          { label: 'Psychology', href: '#contact' },
          { label: 'Pol. Science', href: '#contact' },
          { label: 'History', href: '#contact' },
          { label: 'Geography', href: '#contact' },
          { label: 'Sociology', href: '#contact' }
        ]
      }
    ]
  }
];

const resultsDropdownItems: DropdownItem[] = [
  { 
    label: 'Our Gems', 
    href: '#our-gems',
    subItems: [
      { label: 'Aman Kumar Karn - Delhi Topper 97%', href: '#our-gems' },
      { label: 'Shivam Kumar Goel - Gun Gaurav Sammaan', href: '#our-gems' }
    ]
  },
  { 
    label: 'Our Shining Stars', 
    href: '#results',
    subItems: [
      { label: 'Class of 2024 Results', href: '#results' },
      { label: 'Class of 2025 Results', href: '#results' }
    ]
  }
];

const navItems: NavItem[] = [
  { label: 'Home', href: '/', isPage: true },
  { label: 'About\u00A0Us', href: '/about', isPage: true },
  { label: 'Learn\u00A0With\u00A0Us', href: '#learn', dropdown: learnWithUsDropdownItems },
  { label: 'Results\u00A0&\u00A0Achievements', href: '#results', dropdown: resultsDropdownItems },
  { label: 'Google\u00A0Reviews', href: '#google-reviews' },
  { label: 'Voices\u00A0of\u00A0Success', href: '#voices-success' },
  { label: 'Faculty:\u00A0Our\u00A0Mentors', href: '/faculty', isPage: true },
  { label: 'Life\u00A0@\u00A0YKC', href: '/life-at-ykc', isPage: true },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' }
];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="YKC Logo"
                className="h-20 w-auto object-contain brightness-110 contrast-125 filter drop-shadow-lg"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200">
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <div
                            key={dropdownItem.label}
                            className="relative"
                            onMouseEnter={() => setActiveSubMenu(dropdownItem.label)}
                            onMouseLeave={() => setActiveSubMenu(null)}
                          >
                            {location.pathname === '/' ? (
                              <a
                                href={dropdownItem.href}
                                onClick={(e) => {
                                  scrollToContact();
                                  setActiveDropdown(null);
                                }}
                                className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                              >
                                {dropdownItem.label}
                                {dropdownItem.subItems && <ChevronRight className="h-4 w-4" />}
                              </a>
                            ) : (
                              <Link
                                to={`/${dropdownItem.href}`}
                                className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                              >
                                {dropdownItem.label}
                                {dropdownItem.subItems && <ChevronRight className="h-4 w-4" />}
                              </Link>
                            )}
                            {dropdownItem.subItems && activeSubMenu === dropdownItem.label && (
                              <div className="absolute left-full top-0 ml-1 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 py-2">
                                {dropdownItem.subItems.map((subItem) => (
                                  <div key={subItem.label}>
                                    {location.pathname === '/' ? (
                                      <a
                                        href={subItem.href}
                                        onClick={(e) => {
                                          scrollToContact();
                                          setActiveDropdown(null);
                                          setActiveSubMenu(null);
                                        }}
                                        className="flex items-center justify-between px-4 py-2 text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                                      >
                                        {subItem.label}
                                        {subItem.subItems && <ChevronRight className="h-3 w-3" />}
                                      </a>
                                    ) : (
                                      <Link
                                        to={`/${subItem.href}`}
                                        className="flex items-center justify-between px-4 py-2 text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                                      >
                                        {subItem.label}
                                        {subItem.subItems && <ChevronRight className="h-3 w-3" />}
                                      </Link>
                                    )}
                                    {subItem.subItems && (
                                      <div className="ml-4 space-y-1">
                                        {subItem.subItems.map((subSubItem) => (
                                          location.pathname === '/' ? (
                                            <a
                                              key={subSubItem.label}
                                              href={subSubItem.href}
                                              onClick={(e) => {
                                                scrollToContact();
                                                setActiveDropdown(null);
                                                setActiveSubMenu(null);
                                              }}
                                              className="block px-4 py-1 text-xs text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                                            >
                                              • {subSubItem.label}
                                            </a>
                                          ) : (
                                            <Link
                                              key={subSubItem.label}
                                              to={`/${subSubItem.href}`}
                                              className="block px-4 py-1 text-xs text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                                            >
                                              • {subSubItem.label}
                                            </Link>
                                          )
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  item.isPage ? (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'text-amber-600 dark:text-amber-400'
                          : 'text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    location.pathname === '/' ? (
                      <a
                        href={item.href}
                        className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={`/${item.href}`}
                        className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    )
                  )
                )}
              </div>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-slate-700 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.isPage ? (
                    <Link
                      to={item.href}
                      className={`block px-4 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200 ${
                        location.pathname === item.href
                          ? 'text-amber-600 dark:text-amber-400'
                          : 'text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    location.pathname === '/' ? (
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={`/${item.href}`}
                        className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <div key={dropdownItem.label}>
                          {location.pathname === '/' ? (
                            <a
                              href={dropdownItem.href}
                              className="block px-4 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                              onClick={(e) => {
                                scrollToContact();
                                setIsOpen(false);
                              }}
                            >
                              {dropdownItem.label}
                            </a>
                          ) : (
                            <Link
                              to={`/${dropdownItem.href}`}
                              className="block px-4 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          )}
                          {dropdownItem.subItems && (
                            <div className="ml-4 space-y-1">
                              {dropdownItem.subItems.map((subItem) => (
                                <div key={subItem.label}>
                                  {location.pathname === '/' ? (
                                    <a
                                      href={subItem.href}
                                      className="block px-4 py-1 text-xs text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                                      onClick={(e) => {
                                        scrollToContact();
                                        setIsOpen(false);
                                      }}
                                    >
                                      • {subItem.label}
                                    </a>
                                  ) : (
                                    <Link
                                      to={`/${subItem.href}`}
                                      className="block px-4 py-1 text-xs text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      • {subItem.label}
                                    </Link>
                                  )}
                                  {subItem.subItems && (
                                    <div className="ml-4 space-y-1">
                                      {subItem.subItems.map((subSubItem) => (
                                        location.pathname === '/' ? (
                                          <a
                                            key={subSubItem.label}
                                            href={subSubItem.href}
                                            className="block px-4 py-1 text-xs text-gray-400 dark:text-gray-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                                            onClick={(e) => {
                                              scrollToContact();
                                              setIsOpen(false);
                                            }}
                                          >
                                            ∘ {subSubItem.label}
                                          </a>
                                        ) : (
                                          <Link
                                            key={subSubItem.label}
                                            to={`/${subSubItem.href}`}
                                            className="block px-4 py-1 text-xs text-gray-400 dark:text-gray-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                                            onClick={() => setIsOpen(false)}
                                          >
                                            ∘ {subSubItem.label}
                                          </Link>
                                        )
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;