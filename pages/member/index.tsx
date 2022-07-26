import React from 'react'
import SideBar from '../../components/organisms/SideBar'
import OverviewContent from '../../components/organisms/OverviewContent'
function member() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu='overview' />
      <OverviewContent />
    </section>
  )
}

export default member