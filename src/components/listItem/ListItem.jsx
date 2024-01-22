import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@mui/icons-material";

export default function ListItem() {
  return (
    <div className="listItem">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQct79pxFd5laCq_gPspW2ckdx69mzKXG0t8w&usqp=CAU"
        alt="Programme picture"
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon" />
          <Add className="icon" />
          <ThumbUpAltOutlined className="icon" />
          <ThumbDownOutlined className="icon" />
        </div>
      </div>
    </div>
  );
}
