import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

export const ChapterVideoPlayer = ({
  activeChapter,
  handleCompletedChapter,
  completedChapter,
}: any) => {
  const { toast } = useToast();
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
  if (!activeChapter) {
    if (!activeChapter?.youtubeUrl) {
      if (!activeChapter?.video?.url) {
        return <div>Video cargando...</div>;
      }
    }
    return <div>Video cargando...</div>;
  }

  {
    /*TODO: No cambia el video, llega correctamente la url, probar a renderizar el componente???*/
  }
  //console.log(activeChapter.video.url);
  return (
    <div className="">
      <div>
        <div className="flex justify-center items-center">
          <div className="">
            <div className="mt-28">
              {activeChapter?.video?.url && (
                <video
                  key={activeChapter.video.url}
                  width="1000"
                  height="250"
                  controls
                  controlsList="nodownload"
                //   className="w-full h-full"
                >
                  <source
                    key={activeChapter.video.url}
                    src={activeChapter.video.url}
                    type="video/mp4"
                  />
                </video>
              )}
              {activeChapter?.youtubeUrl && (
                <iframe
                  width="1000"
                  height="562"
                  src={activeChapter.youtubeUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
        <div className="  border-t mt-4 pt-4 rounded-lg flex justify-between items-center">
          <h2 className="text-[20px] font-medium">
            {' '}
            <span className="text-blue-600">Capitulo: </span>{' '}
            {activeChapter.name}
          </h2>
          <button
            disabled={isChapterCompleted}
            onClick={() => {
              handleCompletedChapter();
              toast({
                title: 'Capitulo marcado como completado ✅',
              });
            }}
            className="bg-blue-500 text-white p-2 px-5 rounded-lg flex gap-2 hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 disabled:text-gray-700"
          >
            <CheckCircle color="#ffffff" /> <h2>Marcar como completado</h2>
          </button>
        </div>
      </div>
    </div>
  );
};
