import React from 'react';

const JobOffers = () => {
    const jobs = [
        {
            id: 1,
            company: "Tech Corp",
            title: "Frontend Engineer",
            tags: ["React", "TypeScript", "Remote"],
            salary: "¥6M - ¥9M",
            description: "We are looking for a skilled Frontend Engineer to join our dynamic team."
        },
        {
            id: 2,
            company: "Design Studio",
            title: "UI/UX Designer",
            tags: ["Figma", "Adobe XD", "On-site"],
            salary: "¥5M - ¥7M",
            description: "Create beautiful user interfaces and experiences for our global clients."
        },
        {
            id: 3,
            company: "Startup Inc",
            title: "Full Stack Developer",
            tags: ["Node.js", "React", "Hybrid"],
            salary: "¥7M - ¥10M",
            description: "Join a fast-paced startup and work on the full stack of our product."
        },
        {
            id: 4,
            company: "Global Systems",
            title: "Backend Engineer",
            tags: ["Go", "AWS", "Remote"],
            salary: "¥8M - ¥12M",
            description: "Build scalable backend systems for our enterprise customers."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                <header className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Job Offers</h1>
                    <p className="text-gray-600">Find your dream job today</p>
                </header>

                <div className="mb-8 bg-white p-4 rounded-lg shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Search jobs..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            Search
                        </button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                            Filter
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job) => (
                        <div key={job.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                                        <p className="text-sm text-gray-500 font-medium">{job.company}</p>
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
                                        New
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {job.tags.map((tag, index) => (
                                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {job.description}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <span className="text-gray-900 font-bold text-sm">
                                        {job.salary}
                                    </span>
                                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                        View Details →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobOffers;
