import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'
import Link from 'next/link'
import React, { Suspense } from 'react'

const page = ({ params: {name} }) => {
  return (
    <div className='card'>
        <Link href="/code/respos" className='btn btn-back'>Back to Reposetories</Link>
        <Suspense fallback={<h2>Loading Repo ...</h2>}>
            <Repo name={name}/>
        </Suspense>
        <Suspense fallback={<h2>Loading Diretories ...</h2>}>
            <RepoDirs name={name}/>
        </Suspense>
    </div>
  )
}

export default page