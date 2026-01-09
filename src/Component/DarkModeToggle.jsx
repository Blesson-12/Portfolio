import React, { useEffect, useState } from 'react'

const DarkModeToggle = () => {

    const[dark, setDark]=useState(true)

    useEffect(()=>{
        if(dark){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    },[dark])
  return (
    <button onClick={()=>setDark(!dark)} className=' px-4 py-2 rounded bg-yellow-400 text-black dark:bg-slate-200 dark:text-slate-900  transition'>
        {dark?"light":"dark"}
    </button>
  )
}

export default DarkModeToggle