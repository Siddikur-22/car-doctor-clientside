import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);
   

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])
    return (
        <div >
            <div className="mt-4 mb-28">
                <h2 className="text-center md:text-3xl font-bold text-red-500 mb-2">Our Services</h2>
                <h2 className="text-center md:text-5xl text-3xl font-bold ">Our Services Area</h2>
                <p className="text-center   w-2/3 mx-auto mt-5"> Are you referring to the geographical region or specific locations where you provide your services? Understanding your service area helps you tailor your marketing efforts and allocate resources efficiently.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  grid-cols-1">
               {
                services.map( service => <ServicesCard key={service._id} service={service}></ServicesCard>)
               }
            </div>
        </div>
    );
};

export default Services;