import { useOutletContext } from "react-router-dom";
export default function ProfilePage() {
  const { setActivePage } = useOutletContext();
  setActivePage("profile-page");
  return <></>;
}
