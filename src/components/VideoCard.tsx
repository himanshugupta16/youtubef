export function VideoCard(props: any    ){
    return <div className="p-3 curs">
        <img src={props.image}className={"rounded-xl w=20 h=20"}></img>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img className={"rounded-full w=20 h=20"} src={props.thumbimage}>
                </img>
            </div>
            <div className="col-span-10
            pl-5">
                {props.title}

            </div>
            <div className="col-span-11  text-gray-400 text-base">
                {props.author}

            </div>
            <div className="col-span-10  text-gray-500 text-base">
                {props.timestamp}
            </div>
        </div>
    </div>
}