'use client'
import React, { useState } from 'react'

export default function RegisterForm(props) {

const [name,setName] = useState('');
const [prenom,setPrenom] = useState(''); 
const [niveau,setNiveau] = useState(''); 
const [validName, setValidName] = useState(true);
const [validPrenom, setValidPrenom] = useState(true);
const [validNiveau, setValidNiveau] = useState(true);





const verif = ()=>{
  if(name.length < 3  || isNaN(name)==false){
    setValidName(false)
  }else{
        setValidName(true)
    }

  if(prenom.length < 3  || isNaN(prenom)==false){
      setValidPrenom(false)
  }else{
      setValidPrenom(true)
  }

  if(niveau == ''){
      setValidNiveau(false)
  }else{
      setValidNiveau(true)
  }
}





  return (
    <form className="font-ft font-bold shadow-md bg-gra-500 p-10  md:w-1/2 absolute w-5/6  bg-white space-y-6 select-none ">
    <h1 className=" text-3xl select-none">La Plume</h1>
    <hr className="bg-green-200 h-1 select-none"/>
    <div className="flex flex-col h-1/2 space-y-3">
      <input type="text" className={validName ? 'transition-all delay-90 ease-linear border border-green-500 p-2 focus:ring-2 focus:ring-green-500 focus:outline-none'  :'transition-all delay-90 ease-linear border border-red-500 p-2 focus:ring-2 focus:ring-red-500 focus:outline-none'}  placeholder='Nom' onChange={(e)=>{setName(e.target.value)}}/>
      {!validName && <span className=' text-sm text-red-800 bg-red-200 p-1 rounded-sm'>saisir un nom de 3 caractere au minimum</span>}


      <input type="text" className={validPrenom ? 'transition-all delay-90 ease-linear border border-green-500 p-2 focus:ring-2 focus:ring-green-500 focus:outline-none'  :'transition-all delay-90 ease-linear border border-red-500 p-2 focus:ring-2 focus:ring-red-500 focus:outline-none'} placeholder='Prenom' onChange={(e)=>{setPrenom(e.target.value)}}/>
      {!validPrenom && <span className=' text-sm text-red-800 bg-red-200 p-1 rounded-sm'>saisir un prenom de 3 caractere au minimum</span>}



      <select className={validNiveau ?  'p-2 border border-green-500 transition-all delay-90 ease-linear focus:border-green-500 focus:outline-none select-none' : 'p-2 border border-red-500 transition-all delay-90 ease-linear focus:border-red-500 focus:outline-none select-none'} onChange={(e)=>{setNiveau(e.target.value)}}>
        <option value="" >Selctionnez Votre niveau</option>
        <option value="1L">1ere Licence</option>
        <option value="2L">2eme Licence</option>
        <option value="3L">3eme Licence</option>
      </select>
      {!validNiveau && <span className=' text-sm text-red-800 bg-red-200 p-1 rounded-sm'>selectionez votre niveau !</span>}


      <p onClick={()=>{verif()}} className='border w-fit p-2 px-7 border-black cursor-pointer hover:bg-black hover:text-white'>Next</p>
      
    </div>
    
  </form >
  ) 
}
