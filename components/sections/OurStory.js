import { weddingConfig } from '../../lib/config';

export default function OurStory() {
  return (
    <main className="px-6 pt-8 pb-12">
      <div className="text-center mb-8">
        <h2 className="title-font text-[var(--text-primary)] text-4xl font-bold leading-tight tracking-tight">
          {weddingConfig.texts.ourStoryTitle}
        </h2>
        <p className="text-[var(--text-primary)] text-base font-normal leading-relaxed mt-4 max-w-md mx-auto">
          {weddingConfig.texts.ourStoryDescription}
        </p>
      </div>
      <div className="flex overflow-x-auto snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6 gap-4 max-w-[480px] mx-auto">
        {weddingConfig.storyPhotos.map((photo, index) => (
          <div key={index} className="flex-none w-[85%] snap-center">
            <div className="flex flex-col gap-4 rounded-xl overflow-hidden shadow-lg bg-white">
              <div 
                className="w-full bg-center bg-no-repeat aspect-square bg-cover"
                style={{ backgroundImage: `url("${photo.image}")` }}
              ></div>
              <div className="p-4">
                <p className="text-[var(--text-primary)] text-lg font-bold leading-normal">{photo.title}</p>
                <p className="text-[var(--text-secondary)] text-sm font-medium leading-normal mt-1">{photo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
