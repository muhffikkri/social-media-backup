export default function NotificationCard() {
    return (
      <>
        <div className="flex content-center box-border gap-2 md:gap-0">
          <div className="w-8 flex justify-center content-center md:w-12">
            <div className="w-full h-full rounded-full bg-d-bgc" id="image"></div>
          </div>
          <div className="flex items-center w-3/4 ml-1 md:ml-3 sm:w-5/6 sm:text-sm lg:w-full ">
            <p className="inline-block align-bottom text-xs md:text-base">
              <span className="font-semibold">Nickname</span> Lorem ipsum dolor, sit amet consectetur adipisicing el
            </p>
          </div>
          <div className="bg-d-text w-10 h-10 ml-auto sm:w-12 sm:h-10 cursor-pointer"></div>
        </div>
      </>
    );
}