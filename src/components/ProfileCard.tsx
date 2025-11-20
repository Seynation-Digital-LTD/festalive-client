"user-client";
import "../../src/components/index.css";

export const ProfileData = [
  {
    id: 1,
    img: "../assets/profile.jpg",
    title: "Festalive Studio",
    username: "Seynation Digital",
  },
];
export const ProfileCard = ({ collapsed }: { collapsed?: boolean }) => {
  return (
    <div className={`profile-card-contents ${collapsed ? "collapsed" : ""}`}>
      {ProfileData.map((item) => (
        <div className="profile-item" key={item.id}>
          <img src={item.img} alt={item.title} />
          {!collapsed && (
            <>
              <h6>{item.title}</h6>
              <h5>{item.username}</h5>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
