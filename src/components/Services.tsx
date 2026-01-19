import React from 'react';
import Section from './Section';
import { Sparkles, Shield, Smile, HeartPulse } from 'lucide-react';
import servicesImg from '../assets/services.png';

const services = [
    {
        icon: <Smile className="w-8 h-8" />,
        title: 'General Cleaning',
        description: 'Keep your teeth healthy and your breath fresh with our thorough cleaning service.'
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: 'Teeth Whitening',
        description: 'Brighten your smile with our advanced and safe professional whitening treatments.'
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: 'Orthodontics',
        description: 'Achieve perfectly aligned teeth with our modern braces and invisible aligners.'
    },
    {
        icon: <HeartPulse className="w-8 h-8" />,
        title: 'Regular Checkups',
        description: 'Preventive care to detect and treat issues early for long-lasting oral health.'
    }
];

const Services: React.FC = () => {
    return (
        <Section id="services">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Premium Services</h2>
                <p className="text-lg text-slate-600">
                    We provide a comprehensive range of dental services tailored to meet your unique needs. Our modern approach ensures a painless and comfortable experience.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="grid sm:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-200 hover:bg-sky-50 transition-all group"
                        >
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-sky-500 mb-4 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="relative rounded-2xl overflow-hidden h-full min-h-[400px]">
                    <img
                        src={servicesImg}
                        alt="Dental Services"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent" />
                </div>
            </div>
        </Section>
    );
};

export default Services;
