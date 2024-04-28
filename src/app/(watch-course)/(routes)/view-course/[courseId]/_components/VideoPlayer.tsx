import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ChapterVideoPlayer = ({
  activeChapter,
  handleCompletedChapter,
  completedChapter,
}: any) => {
  // console.log(activeChapter);
  const [isChapterCompleted, setIsChapterCompleted] = useState<boolean>(false);
  useEffect(() => {
    const completed =
      completedChapter &&
      completedChapter.find(
        (chapter: any) => chapter?.chapterId == activeChapter?.chapterNumber
      );
    setIsChapterCompleted(!!completed);
  }, [activeChapter, completedChapter]);
  {
    /*Skeleton*/
  }
  if (!activeChapter || !activeChapter.video) {
    return <div>Video cargando...</div>;
  }

  {
    /*TODO: No cambia el video, llega correctamente la url, probar a renderizar el componente???*/
  }

  //console.log(activeChapter.video.url);
  return (
    <div className="p-5">
      <video
        key={activeChapter.video.url}
        width="1000"
        height="250"
        controls
        controlsList="nodownload"
      >
        <source
          key={activeChapter.video.url}
          src={activeChapter.video.url}
          type="video/mp4"
        />
      </video>
      <div className="p-5 border rounded-lg mt-5 flex justify-between items-center">
        <h2 className="text-[20px] font-medium">
          {' '}
          <span className="text-blue-600">Capitulo: </span> {activeChapter.name}
        </h2>
        <button
          disabled={isChapterCompleted}
          onClick={handleCompletedChapter}
          className="bg-blue-500 text-white p-2 px-5 rounded-lg flex gap-2 hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 disabled:text-gray-700"
        >
          <CheckCircle color="#ffffff" /> <h2>Marcar como completado</h2>
        </button>
      </div>
    </div>
  );
};
