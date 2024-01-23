import './footer.styles.scss'
import { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor() {
    super();

    this.state = {
      list: [
        { name: "Realitás", id: "213124ea", link: "/" },
        { name: "Sorozatok", id: "113124br", link: "/series" },
        { name: "Kapcsolat", id: "313124hg", link: "/contact" },
      ],
    };
  }

  render() {
    return (
      <>
        <h2>Realitással foglalkozó oldalunk</h2>
        {this.state.list.map((list) => {
          return (
            <Link key={list.id} className="nav-link" to={list.link}>
              <h3>{list.name}</h3>
            </Link>
          );
        })}
      </>
    );
  }
}

export default Footer;
