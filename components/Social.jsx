import {
  BiLogoInstagramAlt,
  BiLogoYoutube,
  BiLogoFacebook,
  BiLogoSpotify,
} from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoInstagramAlt />,
    path: "",
  },
  {
    icon: <BiLogoYoutube />,
    path: "",
  },
  {
    icon: <BiLogoFacebook />,
    path: "",
  },
  {
    icon: <BiLogoSpotify />,
    path: "",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <div key={index} className={iconStyles}>
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default Social;
