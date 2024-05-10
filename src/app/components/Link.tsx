import NextLink from 'next/link'
import type { AnchorHTMLAttributes } from 'react'
import type { UrlObject } from 'url'

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string | UrlObject // Override href type
}

export function Link({ href, ...rest }: LinkProps) {
  let isInternalLink = typeof href === 'string' && href.startsWith('/')
  let isAnchorLink = typeof href === 'string' && href.startsWith('#')

  if (isInternalLink) {
    return <NextLink href={href as string} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href as string} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href as string} {...rest} />
}
