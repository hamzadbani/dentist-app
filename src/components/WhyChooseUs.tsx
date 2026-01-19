import React from 'react';
import Section from './Section';
import familyImg from '../assets/family.png';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
    "Advanced Pain-Free Technology",
    "Friendly & Experienced Team",
    "Affordable & Flexible Pricing",
    "Emergency Dental Care",
    "Modern & Sterile Environment",
    "Personalized Treatment Plans"
];

const WhyChooseUs: React.FC = () => {
    return (
        <Section id="why-us" bgWhite>
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 order-2 lg:order-1">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Why Thousands Trust Our Clinic</h2>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        We understand that visiting the dentist can be stressful. That's why we've designed our clinic to be a sanctuary of health and comfort, where your wellbeing is our top priority.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-sky-50 transition-colors">
                                <CheckCircle2 className="text-sky-500 w-6 h-6 flex-shrink-0" />
                                <span className="font-medium text-slate-700">{reason}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 order-1 lg:order-2 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-50 rounded-full blur-3xl -z-10" />
                    <img
                        src={familyImg}
                        alt="Happy Family"
                        className="rounded-3xl shadow-2xl w-full object-cover"
                    />
                </div>
            </div>
        </Section>
    );
};

export default WhyChooseUs;
