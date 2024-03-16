import {useParams} from "react-router-dom";

export default function ProfilesPage() {
  const params = useParams();
  return (
    <div>
      <h1>Profiles Page {params.profileId}</h1>
    </div>
  );
}
