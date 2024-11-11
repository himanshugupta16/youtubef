import { VideoCard } from "./VideoCard"

const VIDEOS=[{
    title:"this is a teaser of himanshu film",
        image:"photo.png",
        thumbimage:"p2.png",
        author:"himanshu",
        timestamp:"256 views || 12 days ago "},
        {
        title:"this is a teaser of himanshu film",
        image:"photo.png",
        thumbimage:"p2.png",
        author:"himanshu",
        timestamp:"256 views || 12 days ago "

        },{
            title:"this is a teaser of himanshu film",
            image:"photo.png",
            thumbimage:"p2.png",
            author:"himanshu",
            timestamp:"256 views || 12 days ago "
    
            },{
                title:"this is a teaser of himanshu film",
                image:"photo.png",
                thumbimage:"p2.png",
                author:"himanshu",
                timestamp:"256 views || 12 days ago "
        
                },{
                    title:"this is a teaser of himanshu film",
                    image:"photo.png",
                    thumbimage:"p2.png",
                    author:"himanshu",
                    timestamp:"256 views || 12 days ago "
            
                    },{
                        title:"this is a teaser of himanshu film",
                        image:"photo.png",
                        thumbimage:"p2.png",
                        author:"himanshu",
                        timestamp:"256 views || 12 days ago "
                
                        },{
                            title:"this is a teaser of himanshu film",
                            image:"photo.png",
                            thumbimage:"p2.png",
                            author:"himanshu",
                            timestamp:"256 views || 12 days ago "
                    
                            },{
                                title:"this is a teaser of himanshu film",
                                image:"photo.png",
                                thumbimage:"p2.png",
                                author:"himanshu",
                                timestamp:"256 views || 12 days ago "
                        
                                }]
export const VideoGrid=()=>{
    return <div className="grid grid-cols-1
    md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video=><div>
            <VideoCard title={video.title}
        image={video.image}
        thumbimage={video.thumbimage}
        author={video.author}
        timestamp={video.timestamp}>

            </VideoCard>
            </div>)}

    </div>
}