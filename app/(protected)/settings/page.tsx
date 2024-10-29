import * as React from 'react'

import { auth } from '@/auth'

const SettingsPage: React.FC = async() => {
  const session = await auth()
  
  // session?.user.customField = ''
  return (
  <React.Fragment>
    {JSON.stringify(session)}
  </React.Fragment>
)}

export default SettingsPage