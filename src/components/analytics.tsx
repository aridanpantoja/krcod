'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { getLocalStorage, setLocalStorage } from '@/lib/utils'
import { GoogleAnalytics } from '@next/third-parties/google'
import React, { useEffect } from 'react'

type AnalyticsProps = {
  measurementId: string
}

export function Analytics({ measurementId }: AnalyticsProps) {
  const [isLoading, setIsLoading] = React.useState(true)
  const [cookieConsent, setCookieConsent] = React.useState<null | boolean>(null)

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookieConsent')
    setCookieConsent(storedCookieConsent)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (cookieConsent !== null) {
      setLocalStorage('cookieConsent', cookieConsent.toString())
    }
  }, [cookieConsent])

  if (isLoading || cookieConsent !== null) {
    return null
  }

  return (
    <>
      <Card className="fixed bottom-6 left-6 right-6 z-50 max-w-96">
        <CardHeader className="pb-4 xs:pb-6">
          <CardDescription className="text-center text-xs xs:text-start xs:text-sm">
            We use cookies to enhance your experience. Choose &#39;Accept
            all&#39; to allow all cookies or &#39;Only necessary&#39; for
            essential ones.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <div className="flex w-full flex-col gap-3 xs:flex-row">
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
    </>
  )
}
