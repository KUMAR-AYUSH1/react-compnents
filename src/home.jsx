import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  ProductItem,
  HoveredLink,
} from "./components/navbar.jsx";

export default function Top_nav() {
    const [active, setActive] = useState(null);
    return(      <div className="flex justify-center pt-10">
            <Menu setActive={setActive}>
              <MenuItem
                item="Home"
                active={active}
                setActive={setActive}
              >
                <div className="flex flex-col gap-4">
                  <HoveredLink href="#home">Home page</HoveredLink>
                  <HoveredLink href="#about">About us</HoveredLink>
                </div>
              </MenuItem>
    
              <MenuItem
                item="Products"
                active={active}
                setActive={setActive}
              >
                <div className="grid grid-cols-2 gap-4">
                  <ProductItem
                    title="Project One"
                    description="Explore our first project."
                    href="#project-one"
                    src="https://placehold.co/140x70"
                  />
                  <ProductItem
                    title="Project Two"
                    description="Explore our second project."
                    href="#project-two"
                    src="https://placehold.co/140x70"
                  />
                </div>
              </MenuItem>
    
              <MenuItem
                item="Contact"
                active={active}
                setActive={setActive}
              >
                <div className="flex flex-col gap-4">
                  <HoveredLink href="mailto:hello@example.com">
                    Email us
                  </HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>)
}