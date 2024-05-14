"use client"
import { Link } from '../Link'
import { headerNavLinks } from '../../../../data/headerNavLinks';
import Image from 'next/image'
import clsx from 'clsx';

export function Header({ onToggleNav }: { onToggleNav: () => void }) {
    return (
    <header className="supports-backdrop-blur:bg-white/5 sticky top-0 z-40 overflow-x-hidden  py-3 backdrop-blur ">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 xl:max-w-5xl xl:px-0">
        <div>
          <Link href="/" aria-label="logo">
            <div className="flex items-center justify-between">
              <div className="mr-3 flex items-center justify-center">
                <Image
                  src="/static/images/favicon.png"
                  alt="Nawin logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden space-x-6  sm:block">
          {headerNavLinks.map((link) => {
              let className = clsx(
                'inline-block rounded font-medium text-gray-900 hover:text-green-500 hover:tfont-extrabold  hover:underline dark:text-gray-100 py-1 px-2 sm:py-2 sm:px-3'
              )
              return (
                <Link key={link.title} href={link.href}>
                  <span
                    className={className}
                    data-umami-event={`nav-${link.href.replace('/', '')}`}
                  >
                    {link.title}
                  </span>
                </Link>
              )
            })}
          </div>
          <button
            className="ml-2 mr-1 h-8 w-8 rounded sm:hidden"
            type="button"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
            data-umami-event="mobile-nav-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}