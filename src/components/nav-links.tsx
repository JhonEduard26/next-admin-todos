'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    path: '/dashboard',
    name: 'Dashboard',
  },
  {
    path: '/dashboard/rest-todos',
    name: 'Rest todos',
  },
  {
    path: '/dashboard/server-actions',
    name: 'Server actions',
  },
  {
    path: '/dashboard/cookies',
    name: 'Cookies',
  }
]

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <div>
      <nav>
        <ul>
          {
            links.map(({ name, path }) => (
              <li key={path}>
                <Link
                  className={clsx('inline-block w-full px-4 py-2 rounded-md text-gray-700 text-sm', {
                    'classic-gradient text-white': pathname === path,
                  })}
                  href={path}
                >
                  {name}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}