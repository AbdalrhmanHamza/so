import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import DropdownMenuItem from './DropdownMenuItem'

interface Props {
  tags: string[]
}

export default function Tags({ tags }: Props) {
  return (
    <div className="main">
      <p className="mb-6">
        <span className="taghead">Tags : </span>
        {tags.map(tag => {
          return (
            <a
              href={`/categories/${tag.toLowerCase()}`}
              key={tag}
              className="tag underline underline-offset-2 hover:text-orange-500 decoration-orange-500"
              target="_blank"
            >
              {tag}
            </a>
          )
        })}
      </p>
    </div>
  )
}
