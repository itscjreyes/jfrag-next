export const EpDesc = ({description, transcript}) => (
    <div className="ep-desc">
        <div dangerouslySetInnerHTML={{ __html: description }} />
        {
            transcript &&
            <>
            <h3 className="transcript-heading">Transcript</h3>
            <div dangerouslySetInnerHTML={{ __html: transcript }} />
            </>
        }
    </div>
)