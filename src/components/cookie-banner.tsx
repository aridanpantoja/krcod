'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { getLocalStorage, setLocalStorage } from '@/lib/utils'
import React from 'react'

export function CookieBanner() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [cookieConsent, setCookieConsent] = React.useState<null | boolean>(null)

  React.useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookieConsent')
    setCookieConsent(storedCookieConsent)
    setIsLoading(false)
  }, [])

  React.useEffect(() => {
    if (cookieConsent !== null) {
      setLocalStorage('cookieConsent', cookieConsent.toString())
    }
  }, [cookieConsent])

  if (isLoading || cookieConsent !== null) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 flex w-full items-center justify-center px-6">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardContent className="p-4">
          <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <CardDescription className="xs:text-sm w-full text-center text-xs sm:text-start">
              We use cookies to enhance your experience. By using our services,
              you agree to this.
            </CardDescription>

            <Button
              onClick={() => setCookieConsent(true)}
              size="sm"
              className="w-full text-xs sm:w-fit"
            >
              Accept
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
