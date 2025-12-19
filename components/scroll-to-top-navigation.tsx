"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTopNavigation() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
