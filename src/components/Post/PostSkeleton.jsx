export default function PostSkeleton(isDarkMode) {
  return (
    <>
      <div className="w-full h-auto flex flex-col dynamic-primary rounded-xl mb-2">
        <div className="flex flex-col p-4 pb-2">
          <div className="w-full h-14 flex items-center" id="headerPost">
            <div
              className="w-12 h-12 rounded-full dynamic-bg cursor-pointer object-cover"
              id="image"
            >
              <img
                src="./images/default-profile-picture.jpg"
                alt="profile pict"
                className="rounded-full h-full w-full"
              />
            </div>
            <div
              className="flex flex-col px-2 dynamic-text"
              id="nameAndLocation"
            >
              <p className="font-bold text-xl cursor-pointer dynamic-text text-ellipsis whitespace-nowrap overflow-hidden">
                Dummy Friend
              </p>
              <p className="font-semibold opacity-80 dynamic-text">
                new london
              </p>
            </div>
          </div>
          <div className="w-full h-auto pt-2">
            <p className="dynamic-text text-lg text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum voluptatem sit quod obcaecati, excepturi recusandae
              inventore in esse voluptate fugiat commodi voluptas tenetur beatae
              quibusdam sequi nostrum ut, nulla nesciunt?
            </p>
            <div className="text-l-accent dark:text-d-accent text-lg font-semibold py-1 flex flex-row gap-1">
              #post #hashtags
            </div>
          </div>
        </div>
        <div className="w-full mb-2 md:mb-4 flex justify-center">
          <img src="./images/alien.jpg" alt="image post" />
        </div>
        <div
          className="w-full h-[40px] md:h-[42px] flex flex-row px-3 gap-3 pb-2  md:pb-2"
          id="likes"
        >
          <div className="flex flex-row justify-center leading-3">
            <img
              src={`./icons/${isDarkMode ? "d-" : "l-"}like.svg`}
              alt="like"
              className="cursor-pointer w-8"
            />
            <p className="dynamic-text font-semibold text-lg pl-1 self-center">
              1
            </p>
          </div>
          <div className="flex flex-row justify-center">
            <img
              src={`./icons/${isDarkMode ? "d-" : "l-"}comment.svg`}
              alt="comment"
              className="cursor-pointer w-8"
            />
            <p className="dynamic-text font-semibold text-lg pl-[6px] self-center">
              1
            </p>
          </div>
          <img
            src={`./icons/${isDarkMode ? "d-" : "l-"}share.svg`}
            alt="share"
            className="cursor-pointer w-8"
          />
        </div>
        <div className="flex dynamic-text text-sm opacity-80 px-4  pb-2 md:pb-2">
          19 seconds ago
        </div>
      </div>
    </>
  );
}
