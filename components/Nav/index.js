import React from 'react';
import { Menu } from 'semantic-ui-react';

export default function Nav() {

    const handleNavClick = (e) => {
        alert(e.target.innerHTML)
    }

    return (
        <div>
            <Menu secondary>
                <Menu.Item
                name='home'
                onClick={handleNavClick}
                />
                <Menu.Item
                name='about us'
                onClick={handleNavClick}
                />
                <Menu.Item
                name='menu'
                onClick={handleNavClick}
                />
            </Menu>
      </div>
    )
}