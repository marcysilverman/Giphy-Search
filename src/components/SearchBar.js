import React from 'react';
import styles from 'styled-components';

const InputStyle = styles.input`
    width: 300px;
    height: 50px;
    font-size: 3rem;
    border: 10px solid;
    border-image-source: url('https://cdn.shopify.com/s/files/1/2255/7955/products/rainbow_gradient_paper_2048x.jpg?v=1538150385');
    border-image-slice: 60 30;
`;

const SearchDiv = styles.div`
    display: flex;
    flex-direction: center;
    align-item: center;
    justify-content: center;
`;

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            term: ""
        }
    }

    onSearch(term) {
        this.setState({term});
        this.props.onChange(term);
    }
    render() {
        return (
            <SearchDiv className="search">
            <InputStyle placeholder="search gif" onChange={event => this.onSearch(event.target.value)}/>
            </SearchDiv>
        );
    }
}

export default SearchBar;