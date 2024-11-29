import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ZigNavigation from '../components/ZigNavigation';

const ZigHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white">
      <ZigNavigation />

      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-10"></div>
          <img 
            src="/api/placeholder/1920/1080?text=Data+Analytics+Dashboard"
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 py-32 px-12">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="text-7xl font-extralight leading-tight">
              Unified Data
              <br />
              Visualized Analytics
              <br />
              AI-Driven Automation
            </h1>
            <div className="flex gap-12 mt-16">
              <img src="/api/placeholder/140/45?text=Microsoft+Partner&fontsize=12" alt="Microsoft Partner" className="h-12 bg-white" />
              <img src="/api/placeholder/140/45?text=Fabric&fontsize=16&bgcolor=rgb(0,120,212)&textcolor=white" alt="Fabric" className="h-12" />
              <img src="/api/placeholder/140/45?text=Power+BI&fontsize=14&bgcolor=rgb(244,180,0)&textcolor=black" alt="Power BI" className="h-12" />
              <img src="/api/placeholder/140/45?text=Azure&fontsize=16&bgcolor=rgb(0,137,214)&textcolor=white" alt="Azure" className="h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black py-24 px-12" id="stories">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-24">
          <div className="space-y-8">
            <blockquote className="text-lg font-light italic leading-relaxed">
              "Our partnership with The Zig has consistently added value to our operations. Over the past few years, we've heavily relied on their expertise for a diverse range of projects that have automated and streamlined our operations. The relationship and value have consistently proven to be strong."
            </blockquote>
            <div className="flex items-center gap-6">
              <img src="/api/placeholder/80/80?text=BS&bgcolor=rgb(200,200,200)" alt="Profile" className="rounded-full w-20 h-20" />
              <div>
                <div className="font-semibold text-lg">Brian Steele</div>
                <div className="text-gray-400">Senior Director of IT Security, Infrastructure, and Operations at Salad and Go</div>
              </div>
            </div>
            <img src="/api/placeholder/120/40?text=Salad+and+Go&bgcolor=white&textcolor=black" alt="Company Logo" className="h-10" />
          </div>
          <div className="space-y-8">
            <blockquote className="text-lg font-light italic leading-relaxed">
              "When it came to understanding the end-to-end data lifecycle, The Zig stood a cut above other engineering consultancies we've worked with in the past. The Zig has taken full ownership of helping implement our data warehouse from scratch and building critical data pipelines to acquire, sanitize and enrich our data for use in advanced analytics workloads."
            </blockquote>
            <div className="flex items-center gap-6">
              <img src="/api/placeholder/80/80?text=AS&bgcolor=rgb(200,200,200)" alt="Profile" className="rounded-full w-20 h-20" />
              <div>
                <div className="font-semibold text-lg">Alambir Singh</div>
                <div className="text-gray-400">Lead Data Architect at Pattern Energy Group LP</div>
              </div>
            </div>
            <img src="/api/placeholder/120/40?text=Pattern+Energy&bgcolor=white&textcolor=black" alt="Company Logo" className="h-10" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black relative border border-gray-800" id="services">
        <div className="flex h-[800px]">
          {[
            { number: "01", title: "Feature one", content: {
              heading: "Short heading goes here",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
              image: "/api/placeholder/800/600"
            }},
            { number: "02", title: "Feature two", content: {
              heading: "Short heading goes here",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
              image: "/api/placeholder/800/600"
            }},
            { number: "03", title: "Feature three", content: {
              heading: "Short heading goes here",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
              image: "/api/placeholder/800/600"
            }},
            { number: "04", title: "Feature four", content: {
              heading: "Short heading goes here",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
              image: "/api/placeholder/800/600"
            }}
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`border-r last:border-r-0 border-gray-800 relative ${index === activeIndex ? 'flex-[3]' : 'flex-[0.25]'}`}
              onClick={() => setActiveIndex(index)}
              initial={false}
              animate={{ flex: index === activeIndex ? 3 : 0.25 }}
              transition={{ duration: 0.3 }}
            >
              {index === activeIndex ? (
                <div className="p-12 h-full">
                  <div className="flex items-start">
                    <div className="text-2xl font-bold">{item.number}</div>
                  </div>
                  <h3 className="text-4xl font-bold mt-8 mb-6">{item.content.heading}</h3>
                  <p className="text-gray-300 mb-8">{item.content.description}</p>
                  <div className="aspect-[4/3] w-full">
                    <img 
                      src={item.content.image} 
                      alt={item.title}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col cursor-pointer">
                  <div className="p-8">
                    <span className="text-2xl font-bold">{item.number}</span>
                  </div>
                  <div className="flex-grow flex items-center justify-center relative">
                    <span className="absolute text-2xl font-bold [writing-mode:vertical-rl]">
                      {item.title}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-black py-24 px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-light leading-tight">
                We've got you <span className="text-orange-500">covered across</span> the 
                <span className="text-orange-500"> entire</span> data stack.
              </h2>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <img src="/api/placeholder/80/80" alt="Certification" className="h-16" />
                <div className="text-lg">100% of our team is Microsoft Fabric Certified</div>
              </div>
              <div className="flex items-center gap-6">
                <img src="/api/placeholder/80/80" alt="Certification" className="h-16" />
                <div className="text-lg">PowerBI Certified Data Analysts</div>
              </div>
              <div className="flex items-center gap-6">
                <img src="/api/placeholder/80/80" alt="Certification" className="h-16" />
                <div className="text-lg">Azure Certified Data Engineers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-24">
          <div className="space-y-8">
            <img src="/api/placeholder/180/60?text=Design+Miami&bgcolor=black&textcolor=white" alt="Design Miami" className="h-8" />
            <img src="/api/placeholder/180/60?text=Wacom&bgcolor=black&textcolor=white" alt="Wacom" className="h-8" />
            <img src="/api/placeholder/180/60?text=Flynn+Restaurant+Group&bgcolor=black&textcolor=white" alt="Flynn Restaurant Group" className="h-8" />
            <img src="/api/placeholder/180/60?text=Cox&bgcolor=black&textcolor=white" alt="Cox" className="h-8" />
            <img src="/api/placeholder/180/60?text=Protective+Insurance&bgcolor=black&textcolor=white" alt="Protective Insurance" className="h-8" />
            <img src="/api/placeholder/180/60?text=Vivint&bgcolor=black&textcolor=white" alt="Vivint" className="h-8" />
            <img src="/api/placeholder/180/60?text=Mafisa&bgcolor=black&textcolor=white" alt="Mafisa" className="h-8" />
            <img src="/api/placeholder/180/60?text=Kevala&bgcolor=black&textcolor=white" alt="Kevala" className="h-8" />
          </div>
          <div>
            <blockquote className="text-lg font-light text-black mb-12">
              "What stood out about The Zig is the talent level across the whole organization. The team really takes hold of the project and makes it their own, so they really feel like partners as opposed to just consultants. They were very responsive and understanding, and frankly, not only on time, but also right where I was expecting in terms of budget."
            </blockquote>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-6">
                <img src="/api/placeholder/80/80" alt="Profile" className="rounded-full w-20 h-20" />
                <div>
                  <div className="font-semibold text-lg text-black">Kabir Merchant</div>
                  <div className="text-gray-600">CFO at Oil Changers</div>
                </div>
              </div>
              <img src="/api/placeholder/120/40" alt="Oil Changers Logo" className="h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-12 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-light">
            Partner with us to build a strong data
            <br />foundation for the age of AI
          </h2>
          <button className="bg-orange-500 px-12 py-4 text-xl rounded hover:bg-orange-600 font-light mt-8">
            SCHEDULE A DISCOVERY CALL
          </button>
        </div>
      </section>
    </div>
  );
};

export default ZigHome;