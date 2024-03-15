import {Link} from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      404 Not Found --
      <Link to="/"> Click here to get back home!</Link>
    </div>
  );
}
