import Image from 'next/image'
import React, {useState} from 'react'

function SelectStyle({onUserSelect}) {
    const styleOptions=[
        {
            id:'realistic',
            name:'Realistic',
            image:'/real.jpg',
        },
        {
            name:'Cartoon',
            image:'/cartoon.jpg',
        },
        {
            name:'Comic',
            image:'/comic.webp',
        },
        {
            name:'WaterColor',
            image:'/watercolor.jpg',
        },
        {
            name:'GTA',
            image:'/gta.jpg',
        },
        {
            name:'Histroric',
            image:'/historic.jpg',
        },
    ]

    const [selectedOption,setSelectedOption]=useState()
  return (
    <div>

        <h2 className='font-bold text-2xl text-primary'>Style</h2>
        <p className='text-gray-500'>Select your video style</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3'>
            {styleOptions.map((item) => (
                <div  className={`relative hover:scale-105 transition-all cursor-pointer rounded-xl
                ${selectedOption==item.name&&'border-4 border-primary'}
                `}>
                    <Image src={item.image} width={100} height={100} alt={item.image}
                    className='h-48 object-cover rounded-lg w-full'
                    
                    onClick={()=>{
                        setSelectedOption(item.name)
                        onUserSelect('imageStyle',item.name)
                    }}
                    />
                    <h2 className='absolute p-1 bg-primary bottom-0 w-full text-white text-center rounded-b-lg'>{item.name}</h2>
                </div>
            ))}
        </div>

    </div>
  )
}

export default SelectStyle