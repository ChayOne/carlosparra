import carlos from '../assets/carlos.png'
import ProjectLink from '../components/ProjectLink.jsx'
import MeshGradient from '../components/MeshGradient.jsx'
import { motion } from 'framer-motion'
import TechTabs from '../components/TechTabs.jsx'
import Timeline from '../components/Timeline.jsx'

export default function Index() {
    return (
        <>
            <main className='mx-auto dark:bg-black bg-gray-300 dark:text-white transition-colors max-w-screen overflow-x-hidden relative' >
                <header className="w-screen overflow-hidden h-screen bg-blue-200 dark:bg-black transition-colors" >
                    <MeshGradient />
                    <div className='relative flex flex-col justify-center items-center gap-2 h-full ' >
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, }}
                            transition={{ duration: 2 }}
                            className='rounded-full h-20 w-20 overflow-hidden border-4 border-black dark:border-gray-100 transition-colors'
                        >
                            <img src={carlos} alt="Carlos Parra" className='dark:bg-blue-900 bg-blue-200 transition-colors' />
                        </motion.div>
                        <motion.h1
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", delay: 1.5 }}
                            className='text-4xl font-bold text-center'
                        >
                            Carlos Parra
                        </motion.h1>
                        <motion.h3
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", delay: 2 }}
                            className='text-center'
                        >
                            Desarrollador de sofware
                        </motion.h3>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.5, duration: 1.5 }}
                            className='dark:bg-gray-300 bg-black rounded-full text-white dark:text-black px-8 py-1 text-xs hover:dark:bg-gray-200 hover:bg-gray-600 cursor-default transition-colors'
                        >
                            Disponible para trabajar
                        </motion.div>
                    </div>
                </header>

                <section
                    className='w-full p-10 relative bg-fixed bg-cover bg-center'
                    style={{
                        backgroundImage: "url('/img/compu.jpg')",
                    }}
                >
                    <motion.div

                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className=" backdrop-blur-sm w-full rounded-xl border bg-[#ffffff77] dark:bg-[#00000047] text-black p-2 transition-colors max-w-6xl mx-auto "
                    >
                        <h2 className="text-4xl text-black dark:text-white text-center mb-5 transition-colors" >Lo que hago</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3" >

                            <div className='flex flex-col items-center text-black dark:text-white p-5 transition-colors' >
                                <i className="fas fa-code text-6xl"></i>
                                <h3 className="text-2xl text-center">Desarrollo web</h3>
                            </div>
                            <div className='flex flex-col items-center text-black dark:text-white p-5 transition-colors' >
                                <i className="fa-solid fa-pen-nib text-6xl"></i>
                                <h3 className="text-2xl text-center">Diseño UI</h3>
                            </div>
                            <div className='flex flex-col items-center text-black dark:text-white p-5 transition-colors' >
                                <i className="fa-solid fa-fingerprint text-center text-6xl"></i>
                                <h3 className="text-2xl text-center">Diseño de experiencia de usuario</h3>
                            </div>
                        </div>

                    </motion.div>

                </section>
                <section className='px-5 py-14 md:py-32 w-full relative' >
                    <div className="container max-w-4xl mx-auto">

                        <h3 className='text-4xl'><b>Mis habilidades</b></h3>
                        <div className="flex flex-col md:flex-row gap-7">
                            <TechTabs />
                            <div className='flex-1 pt-0 md:pt-10 h-10 w-full flex flex-col' >
                                <div className="flex gap-5 items-center mb-5 mx-auto md:mx-0">
                                    <i className="fa-solid fa-pen-nib text-2xl"></i>
                                    <h4 className="text-2xl" >Diseño</h4>
                                </div>
                                <div className="flex gap-5 mx-auto md:mx-0">
                                    <div className='border-black dark:border-white border-4 flex items-center justify-center text-2xl font-bold w-10 h-10 transition-colors' >
                                        Ps
                                    </div>
                                    <div className='border-black dark:border-white border-4 flex items-center justify-center text-2xl font-bold w-10 h-10 transition-colors' >
                                        Ai
                                    </div>
                                    <div className='border-black dark:border-white border-4 flex items-center justify-center text-2xl font-bold w-10 h-10 transition-colors' >
                                        Ae
                                    </div>
                                    <div className='border-black dark:border-white border-4 flex items-center justify-center text-2xl font-bold w-10 h-10 transition-colors' >
                                        Pr
                                    </div>
                                    <h3>
                                        <i className="fa-brands fa-figma text-4xl"></i>
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto md:mx-0 mt-5 md:mt-0">
                                    <div className="flex flex-col">
                                        <div className="flex gap-5 items-center my-5">
                                            <i className="fa-solid fa-screwdriver-wrench text-2xl"></i>
                                            <h4 className="text-2xl" >Herramientas</h4>
                                        </div>
                                        <ul className="flex flex-col gap-1 text-center sm:text-left">
                                            <li><i className="fa-solid fa-check"></i> Git + github </li>
                                            <li><i className="fa-solid fa-check"></i> Terminal </li>
                                            <li><i className="fa-solid fa-check"></i> Visual studio code </li>
                                            <li><i className="fa-solid fa-check"></i> Postman </li>
                                            <li><i className="fa-solid fa-check"></i> Notion </li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex gap-5 items-center my-5">
                                            <i className="fa-solid fa-brain text-2xl"></i>
                                            <h4 className="text-2xl" >Conocimientos</h4>
                                        </div>
                                        <ul className="flex flex-col gap-1 text-center sm:text-left">
                                            <li><i className="fa-solid fa-check"></i> Diseño responsivo </li>
                                            <li><i className="fa-solid fa-check"></i> ECMAScript 6 </li>
                                            <li><i className="fa-solid fa-check"></i> Prácticas SEO </li>
                                            <li><i className="fa-solid fa-check"></i> Diseño de bases de datos </li>
                                        </ul>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-5 w-full relative" >
                    <div className='max-w-4xl w-full mx-auto' >
                        <h3 className='text-4xl'><b>Mi experiencia</b></h3>

                        <Timeline />
                    </div>

                </section>

                <section className='px-5 py-10 w-full' >
                   {/*  <h3 className='text-xl'><b>Algunos de mis proyectos</b></h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3' >
                        <ProjectLink />
                    </div> */}
                </section>

            </main>

        </>
    )
}
