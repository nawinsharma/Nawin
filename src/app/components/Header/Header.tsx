"use client"
import { Link } from '../Link'
import { headerNavLinks } from '../../../../data/headerNavLinks';
import Image from 'next/image'

export function Header() {
  return (
    <header className="supports-backdrop-blur:bg-white/95 sticky top-0 z-40 overflow-x-hidden bg-white/75 py-3 backdrop-blur dark:bg-dark/75">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 xl:max-w-5xl xl:px-0">
        <div>
          <Link href="/" aria-label="logo">
            <div className="flex items-center justify-between">
              <div className="mr-3 flex items-center justify-center">
                <Image
                  src="/static/images/favicon.png"
                  alt="Nawin logo"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden space-x-6  sm:block">
            {headerNavLinks.map((link) => {

              return (
                <Link key={link.title} href={link.href}>
                  <span
                    className='hover:text-green-300'
                    data-umami-event={`nav-${link.href.replace('/', '')}`}
                  >
                    {link.title}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
