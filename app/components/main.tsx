'use client'

import { useState } from 'react'
import { imagesType } from './types'

import Create from './create'

// メイン
const Main = () => {
 const [loading, setLoading] = useState(false)
 const [images, setImages] = useState<imagesType[] | null>(null)

 return (
  <div className="grid grid-cols-5 gap-4">
   <div className="col-span-2">
    {/* 画面生成フォーム */}
    <Create loading={loading} setLoading={setLoading} setImages={setImages} />
   </div>
  </div>
 )
}

export default Main