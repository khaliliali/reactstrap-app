import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import { Link } from 'react-router-dom';

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const VehicleSelections = this.props.vehicleData.map(item => {
            return (
                <DropdownItem key={item.detailKey}>
                    <Link
                        to={{
                            pathname: '/detail/' + item.detailKey
                        }}
                    >
                        {item.model}
                    </Link>
                </DropdownItem>
            );
        }, this);

        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand className="Branding" href="/">
                    flying car dealership
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">
                                <i className="fas fa-home" /> Home
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <i className="fas fa-space-shuttle" /> Flying
                                Cars
                            </DropdownToggle>
                            <DropdownMenu>{VehicleSelections}</DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/find-a-dealer">
                                <i className="fas fa-map-marker-alt" /> Find a
                                Dealer
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/build-and-price">
                                <i className="fas fa-cogs" /> Build & Price
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default TopNav;
