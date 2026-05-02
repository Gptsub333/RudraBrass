'use client'

import { useState } from 'react'
import { Cog, Wrench, Box, Flame, Hammer, Stamp } from 'lucide-react'

const processes = [
  {
    icon: Cog,
    name: 'CNC Machining',
    description: 'High-precision computer-controlled machining for complex parts',
    image: 'cnc'
  },
  {
    icon: Wrench,
    name: 'Lathe Machining',
    description: 'Traditional lathe operations for cylindrical components',
    image: 'lathe'
  },
  {
    icon: Box,
    name: 'Extrusion',
    description: 'Creating complex cross-sectional profiles through extrusion',
    image: 'extrusion'
  },
  {
    icon: Flame,
    name: 'Casting',
    description: 'Molten brass casting for intricate shapes and designs',
    image: 'casting'
  },
  {
    icon: Hammer,
    name: 'Forging',
    description: 'High-strength parts through controlled deformation',
    image: 'forging'
  },
  {
    icon: Stamp,
    name: 'Stamping',
    description: 'Sheet metal forming for flat brass components',
    image: 'stamping'
  },
]

export default function Manufacturing() {
  const [activeProcess, setActiveProcess] = useState(0)

  return (
    <section id="manufacturing" className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#EDE8D0] font-semibold text-lg mb-2">Technology Behind Our Production</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a2a] mb-4">
            Manufacturing Process
          </h2>
          <div className="w-24 h-1 bg-[#EDE8D0] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Process Image */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-[#1a3a2a] to-[#243d30] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Animated Manufacturing Visual */}
                <div className="relative">
                  <div className="w-40 h-40 bg-[#EDE8D0] rounded-full flex items-center justify-center">
                    {(() => {
                      const IconComponent = processes[activeProcess].icon
                      return <IconComponent className="w-20 h-20 text-white" />
                    })()}
                  </div>
                  {/* Animated rings */}
                  <div className="absolute inset-0 border-4 border-[#EDE8D0]/30 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                  <div className="absolute -inset-8 border-2 border-[#EDE8D0]/20 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
                  <div className="absolute -inset-16 border border-[#EDE8D0]/10 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                </div>
              </div>
              
              {/* Process Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">{processes[activeProcess].name}</h3>
                <p className="text-gray-300">{processes[activeProcess].description}</p>
              </div>
            </div>
          </div>

          {/* Process List */}
          <div className="grid grid-cols-2 gap-4">
            {processes.map((process, index) => (
              <button
                key={index}
                onClick={() => setActiveProcess(index)}
                className={`p-6 rounded-xl text-left transition-all duration-300 ${
                  activeProcess === index
                    ? 'bg-[#1a3a2a] text-white shadow-lg scale-105'
                    : 'bg-white hover:bg-[#1a3a2a] hover:text-white shadow-md hover:shadow-lg'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  activeProcess === index ? 'bg-[#EDE8D0]' : 'bg-[#f8f9fa]'
                }`}>
                  <process.icon className={`w-6 h-6 ${
                    activeProcess === index ? 'text-white' : 'text-[#1a3a2a]'
                  }`} />
                </div>
                <h4 className="font-semibold text-lg mb-2">{process.name}</h4>
                <p className={`text-sm ${
                  activeProcess === index ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {process.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
