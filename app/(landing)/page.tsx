import React from 'react'
import Link from 'next/link'
import {Button} from '@/components/ui/button'

const LangingPage = () => {
  return (
    <div>
      landing page (unprotcted)
      <div>
        <Link href="/sign-in">
          <Button>
           login
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button>
           Register
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LangingPage
