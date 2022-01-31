import IFrameVideo from './IFrameVideo';

function RecentVideos() {
  const videos = [
    {
      url: 'https://www.youtube.com/embed/Brvn7nAgZqA',
      title: 'Quick pop to the shops',
    },
    {
      url: 'https://www.youtube.com/embed/AJ79HZ57mtc',
      title: 'Ride To The Test Centre (UK Bike Module 1)',
    },
    {
      url: 'https://www.youtube.com/embed/lftJmGpNU14',
      title: 'Module 1 Highlights',
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {videos.map((video) => (
        <IFrameVideo url={video.url} title={video.title} />
      ))}
    </div>
  );
}

export default RecentVideos;
