import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import { Link } from "react-router-dom";

export default function Watch() {
  return (
    <div className="watch">
      <Link className="back" to="/">
        <ArrowBackOutlined />
        Home
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://cdn11.mypornvid.fun/play/1/sd/18b451bf08b73ee262081054c5431ec9/(MyPornVid.fun)_90-day-fianc-alina-and-caleb-finally-get-intimate.mp4?id=7AUv5gCW23k7zzmwGh39Ig&t=1706043930&cid=nUE0pUZ6Yl9grKOipz5_nJDhMaIhY3McMTIipl8mY_gCD1AdIIukFyyeY_McLJ5wMKZgp_I-YKMcMTIipl8yEGVyBQNyBRVyEGVyBQNyBRV5ZP1xLKxgMzyuozZyDmZyDGxgLJkcozRgLJ5xYJAuoTIvYJMcozSfoUxgM_I0YJyhqTygLKEyXFfbZwN0ZGZ3"
      />
    </div>
  );
}
