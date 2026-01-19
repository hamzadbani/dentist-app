import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import bannerImg from '../assets/banner.png';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bannerImg}
                    alt="Modern Dental Clinic"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-xl text-left"
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-sky-600 uppercase bg-sky-50 rounded-full border border-sky-100">
                        Welcome to DentistPro
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                        A Smile That <br />
                        <span className="text-sky-500">Inspires Confidence</span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Experience world-class dental care with our team of experts. We combine modern technology with a gentle touch to give you the smile you deserve.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg">Book an Appointment</Button>
                        <Button variant="secondary" size="lg">View Our Services</Button>
                    </div>
                </motion.div>
            </div>

            {/* Subtle floating elements for modern feel */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-20 hidden lg:block"
            >
                <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl border border-white flex items-center gap-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-500">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-800">4.9/5 Rating</p>
                        <p className="text-xs text-slate-500">From 500+ Patients</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
