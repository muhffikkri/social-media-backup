import { useOutletContext } from "react-router-dom";
import Friendlist from "../../components/Private/Friendlist";
export default function ProfilePage() {
  const { setActivePage } = useOutletContext();
  setActivePage("profile-page");
  const friends = [
    {
      name: "Rand",
      location: "CEO",
    },
    {
      name: "Excel PPG",
      location: "LA",
    },
    {
      name: "Roy Siregar",
      location: "Bekasi",
    },
    {
      name: "Rifat El-Rasista",
      location: "Bogor",
    },
    {
      name: "Bondan Kecap",
      location: "Dark Planet",
    },
  ];
  return (
    <>
      <div className="md:h-[calc(100vh-73px)] mt-[61px] md:mt-[73px] xl:ml-[288px]">
        <div className="flex items-center justify-center w-full relative">
          <div className="w-full h-32 md:h-64 bg-d-text"></div>
          <label
            htmlFor="profile-pict"
            className="rounded-full bg-d-text w-7 h-7 lg:w-10 lg:h-10 flex items-center justify-center bg-cover absolute lg:-bottom-3 lg:right-4 -bottom-4 right-2 backdrop:cursor-pointer transition-all duration-300 hover:bg-d-secondary shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.15)]"
          >
            <img src="./icons/pencil.svg" alt="upload" className="lg:w-8 lg:h-8 w-5 h-5" />
          </label>
        </div>
        <div className="w-full h-auto px-6 lg:px-8 relative">
          <div htmlFor="profile-pict" className="lg:w-24 lg:h-24 w-16 h-16 flex justify-center absolute">
            <label
              htmlFor="profile-pict"
              className="rounded-full bg-d-text w-7 h-7 lg:w-10 lg:h-10 flex items-center justify-center bg-cover absolute lg:mt-4 mt-3 backdrop:cursor-pointer transition-all duration-300 hover:bg-d-secondary shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.15)] z-10"
            >
              <img src="./icons/pencil.svg" alt="upload" className="lg:w-8 lg:h-8 w-5 h-5" />
            </label>
            <img src={"./images/default-profile-picture.png"} alt="" className="-translate-y-1/2 bg-cover rounded-full w-full h-full shadow-inner ring-2 ring-d-primary cursor-pointer z-0" />
          </div>
          <div className="box-border">
            <div className="w-full h-16 md:h-10 dynamic-text">
              <div className="flex flex-row h-full md:justify-end items-end gap-2 md:gap-5">
                <div className="text-md md:text-xl xl:text-2xl">
                  <span className="font-bold">5</span> Post
                </div>
                <div className="text-md md:text-xl xl:text-2xl">
                  <span className="font-bold">5</span> Follower
                </div>
                <div className="text-md md:text-xl xl:text-2xl">
                  <span className="font-bold">5</span> Following
                </div>
              </div>
              <div className="w-full h-auto gap-3 flex mt-1 lg:mt-3 xl:mt-5 flex-row dynamic-text">
                <div>
                  <div className="font-bold text-md md:text-xl cursor-pointer dynamic-text text-ellipsis whitespace-nowrap overflow-hidden">Dummy Friend</div>
                  <div className="font-semibold text-xs md:text-sm opacity-80 dynamic-text">Location</div>
                </div>
                <div className="py-1 px-6 md:px-6 bg-d-accent rounded-sm">
                  <button className="w-full h-full font-bold text-lg">Follow</button>
                </div>
              </div>
              <div className="mt-3 mb-3">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, commodi debitis ad voluptatibus libero at neque est autem tempore perspiciatis, et nihil sapiente natus corporis veritatis voluptas quisquam cupiditate
                  repellat, harum odio expedita esse velit. Eaque, accusamus enim incidunt distinctio, error veritatis cumque non quos vitae, voluptatum dolor? Explicabo, ducimus, amet ut cum blanditiis, consequatur officiis quisquam
                  architecto id et atque ab accusantium praesentium adipisci ea debitis maiores sit magni.
                </p>
              </div>
              <div className="w-full h-auto flex dynamic-primary justify-between rounded-xl mt-2">
                <div className="flex flex-col shrink lg:w-[65%]">
                  <div className="w-full flex flex-col p-4">
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
                  <div className="w-full flex flex-col p-4">
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
                <div className="w-[35%] hidden lg:block">
                  <div className="w-full h-full flex flex-col">
                    <div className="w-full h-[55%]">
                      <div className="w-full h-full dynamic-primary rounded-2xl p-4">
                        <h1 className="dynamic-text font-bold text-xl mb-3">Your Friend</h1>
                        <hr className="hr my-2" />
                        <div className="flex flex-col overflow-y-auto rounded-lg">
                          {friends.map((friend, i) => {
                            return (
                              <div key={i} className="flex w-full items-center justify-between mb-2 pr-2 dynamic-text	 ">
                                <img src="/images/default-profile-picture.png" alt="profile picture" className="w-10 rounded-full" />
                                <div className="flex flex-col w-full px-3 justify-between">
                                  <p className="text-base font-semibold text-ellipsis w-full whitespace-nowrap overflow-hidden dynamic-text">{friend.name}</p>
                                  <p className="text-base dynamic-text">{friend.location}</p>
                                </div>
                                <div className="rounded-full cursor-pointer dynamic-secondary p-2 w-10 h-10 flex items-center">
                                  <img src="/icons/person-add.svg" alt="add friend" className="w-full" />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-16"></div>
              <div className="w-full h-16 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
