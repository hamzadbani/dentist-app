import React from 'react';
import Section from './Section';
import Button from './Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <Section id="contact">
            <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <div className="p-10 md:p-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Get In Touch</h2>
                    <p className="text-slate-600 mb-10">
                        Have questions or want to book an appointment? Fill out the form below and our team will get back to you within 24 hours.
                    </p>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                                <input type="tel" placeholder="+212 6 00 00 00 00" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Service</label>
                            <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all">
                                <option>General Cleaning</option>
                                <option>Teeth Whitening</option>
                                <option>Orthodontics</option>
                                <option>Checkup</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                            <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" />
                        </div>
                        <Button className="w-full">Send Message</Button>
                    </form>
                </div>

                <div className="bg-sky-500 p-10 md:p-16 text-white flex flex-col justify-between">
                    <div>
                        <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="font-bold">Address</p>
                                    <p className="text-sky-100">Avenue Hassan II ang. av Rachidi<br />CASABLANCA, Morocco</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="font-bold">Phone</p>
                                    <p className="text-sky-100">+212 6 12 98 24 11</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="font-bold">Email</p>
                                    <p className="text-sky-100">sara@dentistpro.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <p className="font-bold">Working Hours</p>
                                    <p className="text-sky-100">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-10">
                        <div className="w-full h-[200px] rounded-2xl overflow-hidden border border-white/20 shadow-inner">
                            <iframe
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                src="https://maps.google.com/maps?q=Avenue%20Hassan%20II%20ang.%20av%20Rachidi%20casablanca%20morooco&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
