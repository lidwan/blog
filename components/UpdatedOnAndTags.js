const UpdatedOnAndTags = ({date, tags}) => {
    return (
        <>
            <h6>
                tags: {tags}
            </h6>
            <h6>
                Last updated on {date} by Loay Idwan.
            </h6>
        </>
    )
}

export default UpdatedOnAndTags

