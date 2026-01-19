import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Logo className="h-10 w-auto" />
                            <span className="text-2xl font-bold tracking-tight">Dentist<span className="text-sky-500">Pro</span></span>
                        </div>
                        <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
                            Providing exceptional dental care for the whole family since 2010. We are committed to clinical excellence and patient-focused care.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">Home</a></li>
                            <li><a href="#about" className="text-slate-400 hover:text-sky-500 transition-colors">About Us</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-sky-500 transition-colors">Services</a></li>
                            <li><a href="#contact" className="text-slate-400 hover:text-sky-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} DentistPro Clinic. All rights reserved. Designed with ❤️ for healthy smiles.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
