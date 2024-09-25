import { useOutletContext } from "react-router-dom";
export default function ProfilePage() {
  const { setActivePage } = useOutletContext();
  setActivePage("profile-page");
  return (
    <>
      <div className="md:h-[calc(100vh-73px)] mt-[61px] md:mt-[73px] xl:ml-[288px]">
        <div className="flex items-center justify-center w-full">
          <div className="w-full h-64 bg-d-text"></div>
        </div>
        <div className="w-full h-auto px-6 lg:px-8 relative">
          <div htmlFor="profile-pict" className="lg:w-24 lg:h-24 w-16 h-16 absolute">
            <img src={"./images/default-profile-picture.png"} alt="" className="-translate-y-1/2 bg-cover rounded-full w-full h-full shadow-inner ring-2 ring-d-primary cursor-pointer" />
          </div>
          <div className="box-border">
            <div className="w-full h-10 justify-items-end d-flex dynamic-text">
              <div className="flex flex-row h-full justify-end text-sm sm:text-md xl:text-2xl items-end gap-2 md:gap-5">
                <div className="">
                  <span className="font-bold">5</span> Post
                </div>
                <div className="">
                  <span className="font-bold">5</span> Follower
                </div>
                <div className="">
                  <span className="font-bold">5</span> Following
                </div>
              </div>
              <div className="w-full h-auto gap-3 flex mt-3 xl:mt-5 flex-row dynamic-text">
                <div>
                  <div className="font-bold text-md cursor-pointer dynamic-text text-ellipsis whitespace-nowrap overflow-hidden">Dummy Friend</div>
                  <div className="font-semibold text-xs opacity-80 dynamic-text">Location</div>
                </div>
                <button className="py-1 px-3 md:px-6 bg-d-accent font-bold text-lg rounded-sm">Follow</button>
              </div>
              <div className="mt-3 mb-3">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, commodi debitis ad voluptatibus libero at neque est autem tempore perspiciatis, et nihil sapiente natus corporis veritatis voluptas quisquam cupiditate
                  repellat, harum odio expedita esse velit. Eaque, accusamus enim incidunt distinctio, error veritatis cumque non quos vitae, voluptatum dolor? Explicabo, ducimus, amet ut cum blanditiis, consequatur officiis quisquam
                  architecto id et atque ab accusantium praesentium adipisci ea debitis maiores sit magni.
                </p>
              </div>
              <div className="w-full h-auto flex flex-col dynamic-primary rounded-xl mt-2">
                <div className="flex flex-col p-4">
                  <div className="w-full h-14 flex items-center" id="headerPost">
                    <div className="w-12 h-12 rounded-full dynamic-bg cursor-pointer object-cover" id="image">
                      <img src="./images/default-profile-picture.png" alt="profile pict" className="rounded-full h-full w-full" />
                    </div>
                    <div className="flex flex-col px-2 dynamic-text" id="nameAndLocation">
                      <p className="font-bold text-md cursor-pointer dynamic-text text-ellipsis whitespace-nowrap overflow-hidden">Display Name</p>
                      <p className="font-semibold text-xs opacity-80 dynamic-text">Location</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nobis commodi nam repellat quas voluptas unde corrupti quo accusantium libero suscipit ipsa natus magni eaque sapiente, earum magnam neque, beatae
                      veritatis inventore vero quasi! Soluta tenetur a quos sequi, obcaecati, nesciunt modi ipsam distinctio iste consequuntur veritatis maxime molestiae officia?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
