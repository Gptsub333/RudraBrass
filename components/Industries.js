'use client'

import { 
  Car, 
  Factory, 
  Radio, 
  Train, 
  Plane, 
  Droplet, 
  AlertTriangle, 
  HardHat,
  Tractor,
  Stethoscope,
  Plug,
  Settings,
  Package,
  Droplets,
  Bath,
  Home,
  Gauge,
  Flame,
  Wind,
  Cpu,
  Cable,
  Waves,
  Zap,
  Fuel
} from 'lucide-react'

const industries = [
  { icon: Car, name: 'Automotive Industries' },
  { icon: Factory, name: 'Textiles Industries' },
  { icon: Radio, name: 'Telecom Industries' },
  { icon: Train, name: 'Railway Industries' },
  { icon: Plane, name: 'Aerospace and Marine Industries' },
  { icon: Fuel, name: 'Oil & Gas Exploration' },
  { icon: AlertTriangle, name: 'Hazardous Environment' },
  { icon: HardHat, name: 'Construction Tools & Equipment' },
  { icon: Tractor, name: 'Agriculture & Heavy Equipment' },
  { icon: Stethoscope, name: 'Medical Equipment' },
  { icon: Plug, name: 'Electrical Wiring Accessories' },
  { icon: Settings, name: 'Industrial Assembly' },
  { icon: Package, name: 'Plastic Rubber Moulding' },
  { icon: Droplets, name: 'Water Valve and Piping' },
  { icon: Bath, name: 'Sanitary and Plumbing' },
  { icon: Home, name: 'Home Appliances' },
  { icon: Gauge, name: 'Hydraulic Hose & Pneumatic' },
  { icon: Flame, name: 'Fire Prevention' },
  { icon: Wind, name: 'Heat & Ventilation' },
  { icon: Cpu, name: 'Electronics, PCB Circuit Boards' },
  { icon: Cable, name: 'Cable Accessories' },
  { icon: Waves, name: 'Water Treatment Plants' },
  { icon: Zap, name: 'Lightning Protection' },
  { icon: Droplet, name: 'LPG & CO2 Gas Equipment' },
]

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#4a7c59] font-semibold text-lg mb-2">Where Our Products Are Used</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a2a] mb-4">
            Industries We Serve
          </h2>
          <div className="w-24 h-1 bg-[#4a7c59] mx-auto" />
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-[#f8f9fa] hover:bg-[#1a3a2a] rounded-xl p-6 text-center transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[#1a3a2a] group-hover:bg-[#4a7c59] rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <industry.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-[#1a3a2a] group-hover:text-white transition-colors">
                {industry.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
