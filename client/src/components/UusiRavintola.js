import React, {Component} from 'react';
import {FormGroup, FormControl, Button, Grid, Col} from 'react-bootstrap';
import axios from 'axios';
import './UusiRavintola.css';

export default class UusiRavintola extends Component {

    state = {
        nimi: '',
        osoite: '',
        kaupunki: '',
        puh: ''
    };

    handleNameChange = event => {
        this.setState({nimi: event.target.value});
    };

    handleAddressChange = event => {
        this.setState({osoite: event.target.value});
    };

    handleCityChange = event => {
        this.setState({kaupunki: event.target.value});
    };

    handlePhoneChange = event => {
        this.setState({puh: event.target.value});
    };

    handleSubmit = event => {

        const restaurant = {
            nimi: this.state.nimi,
            osoite: this.state.osoite,
            kaupunki: this.state.kaupunki,
            puh: this.state.puh   
        };

        axios.post('/ravintolat', restaurant)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render() {
        return(
            <Grid>  
            <Col xs={12} sm={8} smOffset={2} className="col_restaurants">
            <form onSubmit={this.handleSubmit}>
            <FormControl className="add_form" type="text" ref="nimi" onChange={this.handleNameChange} placeholder="Ravintolan nimi..." />
            <FormControl className="add_form" type="text" ref="osoite" onChange={this.handleAddressChange} placeholder="Ravintolan osoite..."  />
            <FormControl className="add_form" type="text" ref="kaupunki" onChange={this.handleCityChange} placeholder="Ravintolan kaupunki..."  />
            <FormControl className="add_form" type="text" ref="puh" onChange={this.handlePhoneChange} placeholder="Ravintolan puh..."  />
            <FormControl type="submit" />
            </form>
            </Col>
            </Grid>
        );
    }
}
