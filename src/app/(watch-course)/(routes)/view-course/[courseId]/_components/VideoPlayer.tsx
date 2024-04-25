import {CheckCircle} from "lucide-react";

export const ChapterVideoPlayer = ({ activeChapter }: any) => {
    //console.log(activeChapter);

    {/*Skeleton*/}
    if (!activeChapter || !activeChapter.video) {
        return <div>Video cargando...</div>;
    }

    return (
        <div className='p-5'>
            <video width='1000' height='250' controls controlsList='nodownload'>
                <source key={activeChapter.video.url} src={activeChapter.video.url} type='video/mp4'/>
            </video>
            <div className='p-5 border rounded-lg mt-5 flex justify-between items-center'>
                <h2 className='text-[20px] font-medium'> <span className='text-blue-600'>Capitulo: </span>  {activeChapter.name}</h2>
                <button className='bg-blue-500 text-white p-2 px-5 rounded-lg flex gap-2 hover:bg-blue-800'>
                   <CheckCircle color='#ffffff'/>  <h2>Marcar como completado</h2>
                </button>
            </div>
        </div>

    );
}