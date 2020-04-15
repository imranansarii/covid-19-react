import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import { StylesProvider } from '@material-ui/core';

class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
        this.setState({
            data,
            country: country
        });
    }



    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <h1>COVID-19</h1>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
                <p>All Rights reserved by &copy;<span>IMRAN</span>.2020</p>
            </div>
        )
    }
}

export default App;