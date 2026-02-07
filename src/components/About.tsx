import Section from './Section';
import portraitImg from '../assets/portrait.png';

const About = () => {
    return (
        <Section id="about" bgWhite>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="absolute -inset-4 bg-sky-100 rounded-[2rem] -rotate-3 z-0" />
                    <img
                        src={portraitImg}
                        alt="Dr. Sara Amellal"
                        className="relative z-10 w-full rounded-2xl shadow-2xl object-cover aspect-[4/5]"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block border border-sky-50">
                        <p className="text-2xl font-bold text-sky-500">15+</p>
                        <p className="text-sm text-slate-600 font-medium">Years of experience</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
                        Meet Dr. Sara Amellal <br />
                        <span className="text-sky-500 text-3xl font-medium italic underline decoration-sky-200">Your Trusted Partner in Dental Health</span>
                    </h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        With over 15 years of dedicated practice, Dr. Sara Amellal has built a reputation for excellence and compassionate care. Her philosophy centers on patient comfort and utilizing the latest dental innovations to achieve natural, beautiful results.
                    </p>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        She specializes in cosmetic dentistry and restorative procedures, ensuring that every patient leaves our clinic with a healthier, more radiant smile.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <h4 className="font-bold text-slate-800 mb-1">Education</h4>
                            <p className="text-sm text-slate-600">Université Internationale de Rabat (UIR)</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <h4 className="font-bold text-slate-800 mb-1">Expertise</h4>
                            <p className="text-sm text-slate-600">Cosmetic & Implant Dentistry</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
