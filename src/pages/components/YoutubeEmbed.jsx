//<iframe width="1120" height="700" src="https://www.youtube.com/embed/O4jTSwObSVg" title="Pageblox Demo Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

const YoutubeEmbed = ({ embedId }) => (
    <div className="overflow-hidden relative h-0" style={{ paddingBottom: '56.25%' }}>
        <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
        />
    </div>  
);

export default YoutubeEmbed;