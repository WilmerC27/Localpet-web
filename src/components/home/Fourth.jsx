import React from 'react'
import clientes from '../../assets/icono-clientes.png'
import alcance from '../../assets/alcance.png'
import servicio from '../../assets/servicio.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Fourth = () => {
    return (
        <div className=''>
            <p className='font-bol text-center text-4xl font-bold text-orange-400 py-10'>Beneficios de My Happy Pet </p>
            <div className='w-full py-[3rem] px-4'>
                <div className='max-w-[1000px] mx-auto grid md:grid-cols-3 gap-10'>
                    <AnimationOnScroll initiallyVisible={false} animateIn="animate__fadeInRight" duration={1}>
                        <div className=' flex flex-col p-4 my-4 '>
                            <img className='w-40 mx-auto mt-[-3rem]' src={alcance} alt="icono-clientes" />
                            <p className='font-bold text-center text-xl'>Mayor alcance</p>
                            <p className='text-justify '>Nuestro sistema te permitirá tener un mayor alcance a nivel geográfico sin tener que gastar excesivamente en publicidad antigua y engorrosa.</p>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll initiallyVisible={false} animateIn="animate__fadeInLeft" duration={1}>
                        <div className=' flex flex-col p-4 my-4 '>
                            <img className='w-40 mx-auto mt-[-3rem]' src={clientes} alt="icono-clientes" />
                            <p className='font-bold text-center text-xl'>Comunicación</p>
                            <p className=''>Al elevar el conocimiento sobre temas, podrás llegar con las personas más capacitas.</p>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll initiallyVisible={false} animateIn="animate__fadeInRight" duration={1}>
                        <div className=' flex flex-col p-4 my-4 '>
                            <img className='w-40 mx-auto mt-[-3rem]' src={servicio} alt="icono-clientes" />
                            <p className='font-bold text-center text-xl'>Información completa</p>
                            <p className=''>Con nuestro sistemas podrás mostrar a los clientes toda la información sobre tu clínica veterinaria 24/7, desde horarios de servicio hasta precio y detalles de los servicios que ofreces.</p>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}

export default Fourth