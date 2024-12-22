"use server"

import Dashboard from './Dashboard'



export default async function DashboardPage() {
  const data= await fetch('http:///34.142.103.254/assets/')
  const assets = await data.json()


  return (
    <Dashboard assets={assets}/>
  )
}
