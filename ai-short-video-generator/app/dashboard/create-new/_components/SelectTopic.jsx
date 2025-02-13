"use client"
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

function SelectTopic({onUserSelect}) {
    const options =['Custom Prompt','Random AI Story','Scary Story','Historical Facts', 'Bed Time Story', 'Motivational', 'Fun Facts','Love Story','Comedy Story','Action Story','Adventure Story','Mystery Story','Fantasy Story','Sci-Fi Story','Romantic Story','Drama Story','Horror Story','Thriller Story','Documentary','Tutorial','Review','Vlog','Unboxing','Reaction','Challenge','Prank','ASMR','Gaming','Music','Dance','Cooking','Fitness','Fashion','Beauty','Travel','Lifestyle','Education','Motivation','Inspiration','News','Sports','Technology','Business','Finance','Marketing','Sales','Real Estate','Health','Wellness','Nutrition','Mental Health','Relationships','Parenting','Personal Development','Career Development','Productivity','Time Management','Creativity','Innovation','Leadership','Management','Teamwork','Communication','Networking','Public Speaking','Negotiation','Conflict Resolution','Emotional Intelligence','Critical Thinking','Problem Solving','Decision Making','Stress Management','Self-Care','Self-Improvement','Self-Discovery','Self-Love','Self-Confidence','Self-Esteem','Self-Expression','Self-Actualization','Self-Realization','Self-Transcendence','Self-Reflection','Self-Regulation','Self-Control','Self-Discipline','Self-Mastery','Self-Development','Self-Growth','Self-Progress','Self-Transformation','Self-Change','Self-Evolution','Self-Revolution','Self-Revitalization','Self-Revivification','Self-Rejuvenation','Self-Renewal','Self-Rebirth','Self-Resurrection','Self-Regeneration','Self-Recreation','Self-Recreation','Self-Reformation','Self-Regulation','Self-Reorganization','Self-Restructuring','Self-Reengineering','Self-Redesign','Self-Refinement','Self-Enhancement','Self-Optimization','Self-Actualization','Self-Realization']
     
    const [selectedOption,setSelectedOption]=useState();
 
    return (
    <div>
        <h2 className='font-bold text-2xl text-primary'>Content</h2>
        <p className='text-gray-500'>What is the topic of your video?</p>
        <Select onValueChange={(value)=> {
          setSelectedOption(value)
          value!='Custom Prompt'&&onUserSelect('topic',value)
          }}>
           <SelectTrigger className="w-full mt-2 p-6 text-lg">
               <SelectValue placeholder="Content Type" />
           </SelectTrigger>
           <SelectContent>
                {options.map((iteam, index) => (
               <SelectItem key={index} value={iteam}>{iteam}</SelectItem>
                ))}

            </SelectContent>
           </Select>

           {selectedOption=='Custom Prompt'&& 
              <Textarea className= "mt-3 "
               onChange={(e)=>onUserSelect('topic',e.target.value)}
               placeholder = "Write prompt on which you want to generate video"/>
           }

    </div>
  )
}

export default SelectTopic