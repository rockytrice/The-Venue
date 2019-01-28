import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";
// import { element } from "prop-types";

const SideDrawer = props => {
  const scrollToElement = element => {
    // make use of scroller.
    // Use one of the built in methods from scroll-react.
    // the scrollTo is just a function and it needs two properties, the element(where we will be scrolling to) and the configuration of the scroller(the props/options noted in the docs❗️)

    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
    // so the nav drawer closes when we click a link
    props.onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        {/* now make a reference to scroll to element. now when ever we click the link it will trigge the scrollToElement function, the scroller will try and find an element of the app called highlight for example. To do this we need to bring a component from react scroll. So we import Element from react-scroll in the main App component and grab the element and wrap the component we want to scroll to. The Scoller knows we have an element but we still need to pass in a name so we had the property name so in the case of highlights we pass in the name 'highlights */}
        <ListItem button onClick={() => scrollToElement("Events starts in")}>
          Events starts in
        </ListItem>
        <ListItem button onClick={() => scrollToElement("Venue NFO")}>
          Venue NFO
        </ListItem>
        <ListItem button onClick={() => scrollToElement("Description")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrollToElement("Pricing")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => scrollToElement("Location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
