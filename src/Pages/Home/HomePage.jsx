import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './container/Hero'
import Articles from './container/Articles'
import Options from './container/Options'


function HomePage() {
  return (
   
    <div>
    <MainLayout>
      <Hero />
      <Articles />
      <Options />
    </MainLayout>
    
</div>
   
  )
}

export default HomePage