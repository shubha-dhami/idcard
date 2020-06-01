import React, { Component } from 'react';
import { Card, CardBody, CardTitle , CardText } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }
    onDishSelect(dis){
        this.setState({selectedDish:dis});
    }
    renderDish(dis){
        if (dis != null)
            return (
                <Card>
                    <CardBody>
                        <CardTitle>{dis.name}</CardTitle>
                        <CardText>{dis.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.map((dis) => {
            return (
                <div className="col-12 col-md-5 m-2">
                    <Card key={dis.id} onClick={()=>this.onDishSelect(dis)}>
                            <CardTitle>{dis.name}</CardTitle>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                        {menu}
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;