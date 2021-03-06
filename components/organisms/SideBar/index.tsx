import React from 'react'
import Footer from './Footer'
import MenuItem from './MenuItem'
import Profile from './Profile'

interface SideBarProps {
  activeMenu: 'overview' | 'transactions' | 'card' | 'rewards' | 'settings' | 'logout'
}

function SideBar(props: SideBarProps) {
  const { activeMenu } = props
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title='Overview' icon='ic-menu-overview' active={activeMenu === 'overview'} href="/member" />
          <MenuItem title='Transactions' icon='ic-menu-transaction' href="/member/transactions" active={activeMenu === 'transactions'} />
          <MenuItem title="Card" icon="ic-menu-card" href="/member" active={activeMenu === 'card'} />
          <MenuItem title="Rewards" icon="ic-menu-reward" href="/member" active={activeMenu === 'rewards'} />
          <MenuItem title="Settings" icon="ic-menu-setting" href="/member/edit-profile" active={activeMenu === 'settings'} />
          <MenuItem title="Log Out" icon="ic-menu-logout" href="/sign-in" active={activeMenu === 'logout'} />
        </div>
        <Footer />
      </div>
    </section>
  )
}

export default SideBar