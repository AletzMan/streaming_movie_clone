import { CloseIcon } from '../../services/svgFiles';
import './VideoPlayerStyles.css';

function VideoPlayer({ details, urlVideo, closeVideo }) {

    //const { loadingVideo, searchVideo} = getTrailerMovies(details.id);

    console.log(urlVideo)
    const videoURL = urlVideo.results.length > 0 ? urlVideo.results?.find(video => video.type === 'Trailer')?.key : null;


    return (
        <div className='videotrailer'>
            <div className="videotrailer__controls">
                <button className='videotrailer__close' onClick={() => closeVideo(false)}>
                    <CloseIcon className='videotrailer__iconclose' />
                </button>
                <h3 className='videotrailer__title'>{`Trailer de `}<span className='videotrailer__name'>{details?.name || details?.title}</span></h3>
            </div>
            {details.videos.results.length === 0 && <p className='videotrailer__error'>{'No existe video, esperamos pronto tenerlo en la base de datos, ingresa a '}<a className='videotrailer__link' href='https://www.themoviedb.org/' title='The Movie DB' target={'_blank'}>The Movie DB.</a>{' para seguir creciendo la comunidad.'}</p>}
            {details.videos.results.length > 0 && <iframe className='videotrailer__video' width="100%" height="100%" src={`https://www.youtube.com/embed/${videoURL}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}
        </div>
    )
}

export { VideoPlayer };