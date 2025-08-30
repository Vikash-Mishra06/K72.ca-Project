import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from('.lol', {
      height: '350px',
      stagger: { amount: 0.4 },
      scrollTrigger: {
        trigger: '.hero',
        start: 'top 100%',
        end: 'top -500%',
        scrub: true
      }
    })
  })

  const projects = [
    "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/OSM/thumbnail_OSM_1280-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg"
  ]

  return (
    <div className='p-4'>
      <div className='lg:pt-[25vh] pt-[10vh]'>
        <h2 className='font-[font2] md:mb-[10vw] mb-[10vw] uppercase text-[9vw]'>Projects</h2>
      </div>

      {/* Responsive Grid */}
      <div className='lol grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-[-5vh]'>
        {projects.map((src, i) => (
          <div 
            key={i} 
            className='hero relative w-full hover:rounded-4xl overflow-hidden transition-all hover:scale-105 group'
          >
            <img className="h-full w-full object-cover" src={src} alt={`Project ${i}`} />
            <div className="absolute top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center">
              <h2 className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl md:text-3xl lg:text-5xl font-[font1] text-white uppercase border-2 rounded-full p-3">
                Voir le projet
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
