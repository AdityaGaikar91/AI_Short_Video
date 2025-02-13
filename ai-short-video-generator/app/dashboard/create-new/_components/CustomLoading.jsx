import Image from 'next/image'
import React from 'react'
import PropTypes from 'prop-types'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  

function CustomLoading({loading}) {
  return (
    <AlertDialog open={loading}>

    <AlertDialogContent>
        <div className='flex flex-col items-center my-10 justify-center'>
            <Image src={"/crane.gif"} width={100} height={100}/>
            <h2>Generating  your video... Do not Refresh</h2>
        </div>
    </AlertDialogContent>
  </AlertDialog>

  )
}

CustomLoading.propTypes = {
  loading: PropTypes.bool.isRequired
}


export default CustomLoading