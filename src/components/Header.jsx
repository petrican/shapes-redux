import React from "react";

type Props = {
  text: string, 
};

const Header = (props: Props) => (
  <div className="site-header">
     {props.text}
  </div>
);

Header.defaultProps = {
  text: "",
};

export default Header;
