function RecentVideos() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <iframe className="w-full h-72 rounded-md hover:shadow-md transition-all ease-out hover:rounded" loading="lazy" src="https://www.youtube.com/embed/Brvn7nAgZqA" title="Quick pop to the shops" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className="w-full h-72 rounded-md hover:shadow-md transition-all ease-out hover:rounded" loading="lazy" src="https://www.youtube.com/embed/AJ79HZ57mtc" title="Ride To The Test Centre (UK Bike Module 1)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className="w-full h-72 rounded-md hover:shadow-md transition-all ease-out hover:rounded" loading="lazy" src="https://www.youtube.com/embed/lftJmGpNU14" title="Module 1 Highlights" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default RecentVideos