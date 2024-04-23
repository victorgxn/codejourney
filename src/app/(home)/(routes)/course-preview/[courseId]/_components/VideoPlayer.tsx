export default function VideoPlayer({video} : any) {

    return (
        <div className='border rounded-lg p-3'>
            <h2 className='text-gray-400 mb-3'>Vista previa del curso</h2>
            <video width='1000' height='250' controls controlsList='nodownload'>
                <source src={video} type='video/mp4'/>
            </video>
        </div>

    );
}