export const EpDesc = ({description, transcript}) => (
    <div className="ep-desc">
        <h3 className="section-heading">In This Episode</h3>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        {
            transcript &&
            <div className="transcript">
            <h3 className="section-heading">Transcript</h3>
            <div dangerouslySetInnerHTML={{ __html: transcript }} />
            </div>
        }
    </div>
)