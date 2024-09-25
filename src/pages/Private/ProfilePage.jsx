import { useOutletContext } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
export default function ProfilePage() {
  const { setActivePage } = useOutletContext();
  setActivePage("profile-page");
  return (
    // <>
    //   <Navbar></Navbar>
    //   {/* <div className="w-screen h-screen mt-6 shadow-lg relative">
    //     <div className="w-full mt-6 bg-d-primary">
    //       <div className="w-full h-48 mt-6 top-3 bg-d-text absolute "></div>
    //     </div>
    //   </div> */}
    //   <div className="w-full h-full">
    //     <div class="flex items-center justify-center w-full">
    //       <div className="w-full h-64 bg-d-text"></div>
    //     </div>
    //     <div className="w-full h-auto px-6">
    //       <div className="rounded-full lg:w-24 lg:h-24 w-16 h-16">
    //         <div htmlFor="profile-pict">
    //           <img src={"./images/default-profile-picture.png"} alt="" className="-translate-y-1/2 bg-cover rounded-full w-full h-full shadow-inner ring-2 ring-d-primary cursor-pointer" />
    //         </div>
    //         <div className="w-full bg-d-text h-3 d-flex bottom-3 relative">tesasdasds</div>
    //       </div>
    //     </div>
    //   </div>

    // </>
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <img src="./images/profile-picture.jpg" alt="Profile Picture" className="w-48 h-48 rounded-full border-2 border-gray-300" />
          <h1 className="text-2xl font-bold mt-4">Dummy Friend</h1>
          <p className="text-gray-500 mb-4">London</p>
          <p className="text-gray-700">Crazy? I was crazy once. They locked me in a room. A rubber room! A rubber room with rats, and rats make me crazy. Crazy? I was crazy once.</p>  
        </div>
      </div>
    </>
  );
}
