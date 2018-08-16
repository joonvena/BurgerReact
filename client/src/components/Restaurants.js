import React, {Component} from 'react';
import {Grid, Col, Table, Button} from 'react-bootstrap';
import './Restaurants.css';
import axios from 'axios';
import Modal from './Modal';

class Restaurants extends Component {

    showModal = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        });
    }

    state = {
        restaurants: []
    };

    componentDidMount() {
        axios.get('/ravintolat')
        .then(res => {
            console.log(res);
            this.setState({restaurants: res.data});
        });
    }

    
    onDelete(restaurants_id) {
        const updatedRestaurants = this.state.restaurants;
        const index = updatedRestaurants.findIndex(x => x.id === restaurants_id);
        updatedRestaurants.splice(index, 1);
        this.setState({updatedRestaurants:updatedRestaurants});
        axios.delete('/ravintolat/' + restaurants_id)
            .then(res => {
                console.log(res)
                console.log('Toimii')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
            <Grid>  
            <Col xs={12} sm={8} smOffset={2} className="col_restaurants">
                <Table responsive striped hover className="restaurantlist">
                <thead>
                    <tr>
                        <th>Nimi</th>
                        <th>Osoite</th>
                        <th>Kaupunki</th>
                        <th>Puh</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.restaurants.map(restaurants =>
                        <tr key={restaurants.id}>
                            <td>{restaurants.nimi}</td>
                            <td>{restaurants.osoite}</td>
                            <td>{restaurants.kaupunki}</td>
                            <td>{restaurants.puh}</td>
                            <td><Button bsStyle="danger" bsSize="xsmall" onClick={() => this.onDelete(restaurants._id)}>Poista</Button></td>
                        </tr>
                        )}
                    </tbody>
                    </Table>
            </Col>
            </Grid>
            <Button onClick={this.showModal} value="Show modal" />
            <Modal show={this.state.show}>
                This message is from Modal!
            </Modal>
            </div>
        );
    }
}

export default Restaurants;