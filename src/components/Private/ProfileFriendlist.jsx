export default function ProfileFriendlist() {
  return (
    <>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nobis commodi nam repellat quas voluptas unde corrupti quo accusantium libero suscipit ipsa natus magni eaque sapiente, earum magnam neque, beatae veritatis
            inventore vero quasi! Soluta tenetur a quos sequi, obcaecati, nesciunt modi ipsam distinctio iste consequuntur veritatis maxime molestiae officia?
          </p>
        </div>
      </div>
    </>
  );
}
