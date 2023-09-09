import './MediaItem.css';

function MediaItem({pagelink, title, date}) {
    return (
        <>
            <a className='media-link-style' href={pagelink} target='_blank'>
                {title}
            </a>
            <p className='media-date'>
                {date}
            </p>
        </>
    );
}

export default MediaItem;