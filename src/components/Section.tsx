import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    bgWhite?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, bgWhite = false }) => {
    return (
        <section
            id={id}
            className={`py-20 px-6 md:px-12 lg:px-24 ${bgWhite ? 'bg-white' : 'bg-slate-50'} ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
