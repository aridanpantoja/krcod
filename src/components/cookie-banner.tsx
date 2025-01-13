'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { getLocalStorage, setLocalStorage } from '@/lib/utils'
import React, { useEffect } from 'react'

export function CookieBanner() {
  const [cookieConsent, setCookieConsent] = React.useState<null | boolean>(null)
  const [isLoading, setIsLoading] = React.useState(true)

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookieConsent')
    setCookieConsent(storedCookieConsent)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (cookieConsent !== null) {
      setLocalStorage('cookieConsent', cookieConsent.toString())
    }

    const newValue = cookieConsent ? 'granted' : 'denied'

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: newValue,
      })
    }
  }, [cookieConsent])

  if (isLoading || cookieConsent !== null) {
    return null
  }

  return (
    <Card className="fixed bottom-6 left-6 right-6 z-50 max-w-96">
      <CardHeader className="xs:pb-6 pb-4">
        <CardDescription className="xs:text-sm xs:text-start text-center text-xs">
          We use cookies to enhance your experience. Choose &#39;Accept all&#39;
          to allow all cookies or &#39;Only necessary&#39; for essential ones.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="xs:flex-row flex w-full flex-col gap-3">
          <Button
            onClick={() => setCookieConsent(true)}
            size="sm"
            className="text-xs"
          >
            Accept all
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="text-xs"
            onClick={() => setCookieConsent(false)}
          >
            Only necessary
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
