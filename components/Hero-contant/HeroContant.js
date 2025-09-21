import React from 'react'


const HeroContant = () => {
    return (
        <div>
            <section className="position-hero-content text-white py-20 px-4 ">
                <div className="max-w-screen-xl mx-auto text-center md:text-start sm:">
                    <h1 className="hero-heading text-7xl md:text-7xl font-bold leading-snug">
                        Where <span className="italic font-semibold">bold brands</span><br />
                        break through<br />
                        the noise
                    </h1>
                    <p className="text-lg text-gray-300 max-w-xl text-center md:text-start ">
                        From startups to enterprise, we help brands break barriers with tailored ad strategies,
                        striking visuals, and data-driven results.
                    </p>
                    <button className="mt-8 bg-gray-300 text-gray-900 font-semibold px-6 md:p-3 py-2.5 rounded hover:bg-gray-400 transition">
                        Connect With Us
                    </button>
                </div>
            </section>
        </div>
    )
}

export default HeroContant
