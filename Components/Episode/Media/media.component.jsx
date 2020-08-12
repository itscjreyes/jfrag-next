export const EpMedia = ({embed}) => (
    <div className="ep-media">
        <div className="ep-embed">
            <div dangerouslySetInnerHTML={{ __html: embed }} />
        </div>
    </div>
)