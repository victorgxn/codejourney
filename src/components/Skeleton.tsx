import Skeleton from 'react-loading-skeleton';

const CourseSkeleton = () => {
  return (
    <div>
      <Skeleton height={100} width={200} />
      <Skeleton count={3} />
    </div>
  );
};

export default CourseSkeleton;
