import { useOutletContext } from "react-router-dom";
export default function ProfilePage() {
  const { setActivePage } = useOutletContext();
  setActivePage("profile-page");
  return (
    <>
      <div className="container">asdsd</div>
      <h1>asdasd</h1>
    </>
  );
}
