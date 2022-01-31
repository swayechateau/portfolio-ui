interface IIFrameVideo {
    url: string,
    title: string
}
function IFrameVideo({url, title}: IIFrameVideo) {
    return (
        <iframe className="w-full rounded-md hover:shadow-md transition-all ease-out hover:rounded" loading="lazy" src={url} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>           
    )
}

export default IFrameVideo