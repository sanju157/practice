import React, { lazy } from 'react'

const Slider = lazy(() => import('@pages/main/Slider'))

export default function LandingPage() {
  return (
    <div>
      <Slider />
    </div>
  )
}
