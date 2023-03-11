import React, { Fragment } from 'react'

interface Props {
  tags: string[]
}

export default function Tags({ tags }: Props) {
  return (
    <div className="main tags">
      <p className="mb-6">
        {tags.map(tag => {
          return (
            <a
              href={`/categories/${tag.toLowerCase()}`}
              target="_blank"
              className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-base font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-neutral-800 dark:hover:bg-neutral-600 dark:text-blue-400 border border-blue-400"
              key={tag}
            >
              {tag}
            </a>
          )
        })}
      </p>
    </div>
  )
}
