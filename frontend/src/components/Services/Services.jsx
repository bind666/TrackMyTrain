import React from "react";
import { ShieldCheck, Clock, Bell, Database, BarChart2, Leaf } from "lucide-react";

const services = [
    {
        title: "Enhanced Safety",
        description: "Timely weather updates prevent accidents caused by rain, snow, or fog.",
        icon: <ShieldCheck size={30} color="#007bff" />
    },
    {
        title: "Scheduling & Efficiency",
        description: "Anticipating weather disruptions helps in proactive schedule adjustments.",
        icon: <Clock size={30} color="#007bff" />
    },
    {
        title: "Passenger Experience",
        description: "Real-time updates allow passengers to plan better for delays.",
        icon: <Bell size={30} color="#007bff" />
    },
    {
        title: "Resource Management",
        description: "Efficient resource allocation for maintenance and emergency services.",
        icon: <Database size={30} color="#007bff" />
    },
    {
        title: "Predictive Analytics",
        description: "Data-driven decisions improve planning and response strategies.",
        icon: <BarChart2 size={30} color="#007bff" />
    },
    {
        title: "Environmental Benefits",
        description: "Optimized train routes reduce energy usage and emissions.",
        icon: <Leaf size={30} color="#007bff" />
    }
];

const Services = () => {
    return (
        <div className="h-[100vh] max-w-4xl mx-auto p-4 mt-20 ">
            <div className="w-full  max-w-8xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h2 className="text-3xl font-bold mb-9">Our Services</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="flex gap-3 items-start">
                            <div className="p-2 bg-blue-100 rounded-full">{service.icon}</div>
                            <div>
                                <h3 className="font-semibold">{service.title}</h3>
                                <p className="text-gray-500 text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
