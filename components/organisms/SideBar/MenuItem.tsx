import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import Link from 'next/link'

interface MenuItemProps {
  title: string,
  icon: "ic-menu-overview" | "ic-menu-card" | "ic-menu-logout" | "ic-menu-messages" | "ic-menu-reward" | "ic-menu-setting" | "ic-menu-transaction",
  active?: boolean,
  href: string
}
function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href } = props
  console.log('props', props)
  console.log(href)
  const clasItem = classNames({
    'item': true,
    'mb-30': true,
    'active': active,
  })
  return (
    <div className={clasItem}>
      <div className='me-3'>

        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={href!}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  )
}

export default MenuItem