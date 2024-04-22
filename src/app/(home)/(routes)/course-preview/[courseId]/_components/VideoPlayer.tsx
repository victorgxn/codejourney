


export default function VideoPlayer({video} : any) {

    return (
        <div>
            <h2 className='text-gray-400 mb-3'>Course Preview</h2>
            <video width='500' height='250' controls controlsList='nodownload'>
                <source src={video} type='video/mp4'/>
            </video>
        </div>

    );
}