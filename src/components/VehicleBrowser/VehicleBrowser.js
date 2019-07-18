import React, { Component } from 'react';
import Numeral from 'numeral';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    NavLink
} from 'reactstrap';

class VehicleBrowser extends Component {
    render() {
        const VehicleSelections = this.props.vehicleData.map(item => {
            console.log(item.thumbnail);
            return (
                <Col
                    key={item.detailKey}
                    md={Math.ceil(12 / this.props.vehicleData.length)}
                >
                    <Card>
                        <CardImg
                            top
                            width="100%"
                            src={item.thumbnail}
                            alt={item.altText}
                        />
                        <CardBody>
                            <CardTitle>
                                {item.year} {item.model}
                            </CardTitle>
                            <CardSubtitle>{item.taglline}</CardSubtitle>
                            <CardText>
                                Starting at {Numeral(item.msrp).format('$0,0')}
                            </CardText>
                            <NavLink href={'/detail/' + item.detailKey}>
                                Details
                            </NavLink>
                            <NavLink href="/build-and-price">
                                Build & Price
                            </NavLink>
                            <NavLink href="/find-a-dealer">
                                Dealers Near You
                            </NavLink>
                        </CardBody>
                    </Card>
                </Col>
            );
        });
        return (
            <div style={{ marginTop: '40px', marginBottom: '40px' }}>
                <Container>
                    <Row>{VehicleSelections}</Row>
                </Container>
            </div>
        );
    }
}

export default VehicleBrowser;
