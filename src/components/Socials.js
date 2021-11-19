import { Button } from "primereact/button";

function Socials({ links }) {
  const colors = {
    youtube: "red",
    twitter: "blue",
    github: "white",
  };

  return (
    <div>
      <div className="p-d-flex p-jc-center">
        <div className="p-d-flex p-flex-column" style={{ width: 70 + "%" }}>
          {links.map((link) => (
            <Button
              className="p-p-2 p-m-2"
              style={{ color: colors[link.icon] }}
              key={link.url}
            >
              <i className={`pi pi-${link.icon} p-px-2`}></i>
              <span className="p-px-3">{link.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Socials;
// className={
//     link.icon === "twitter"
//       ? "pi pi-twitter p-px-2"
//       : "pi pi-youtube p-px-2"
//   }
