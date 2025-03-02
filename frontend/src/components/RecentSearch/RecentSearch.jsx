import React, { useEffect, useState } from "react";

const RecentSearches = () => {
    const [recentSearches, setRecentSearches] = useState([]);

    useEffect(() => {
        // Load recent searches from local storage
        const storedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
        setRecentSearches(storedSearches);
    }, []);

    return (
        <div className="max-w-4xl mx-auto bg-white p-4 mb-16">
            <h2 className="text-xl font-bold mb-4">Recent Searches</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recentSearches.map((search, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow-sm bg-gray-50">
                        <h3 className="font-semibold">{search.trainNumber} {search.trainName}</h3>
                        <p className="text-gray-500 text-sm">{search.from} → {search.to}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentSearches;
