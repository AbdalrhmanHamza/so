import { Menu } from '@headlessui/react'
import React, { ReactNode } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  href: string
  children: ReactNode
}

export default function DropdownMenuItem({ href, children }: Props) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className="underline underline-offset-2 hover:text-orange-500 decoration-orange-500"
        >
          {children}
        </a>
      )}
    </Menu.Item>
  )
}
