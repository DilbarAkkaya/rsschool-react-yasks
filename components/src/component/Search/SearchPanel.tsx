import React, { ChangeEvent, useEffect, useState } from 'react';
import { MyState, MyProps } from '../../types';
import './search.css';

const SearchPanel  = (props: MyProps) => {
 const [value, setValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    localStorage.setItem('searchItem', event.target.value);
  }

  useEffect(()=>{
    setValue( localStorage.getItem('searchItem') as string )
    return ()=> {
      localStorage.setItem('searchItem', value);
    }
  }, []);


  function keyPressHandler(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
     props.onSearchData(value);
    }
  }

    return (
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={value}
        onChange={handleChange}
        onKeyPress={keyPressHandler}
      />
    );
  }

export default SearchPanel;

/* 
class SearchPanel extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.keyPressHandler = this.keyPressHandler.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
    localStorage.setItem('searchItem', event.target.value);
  }

  componentDidMount() {
    this.setState({ value: localStorage.getItem('searchItem') as string });
  }

  componentWillUnmount() {
    localStorage.setItem('searchItem', this.state.value);
  }

  keyPressHandler(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      this.props.onSearchData(this.state.value);
    }
  }

  render() {
    return (
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={this.state.value}
        onChange={this.handleChange}
        onKeyPress={this.keyPressHandler}
      />
    );
  }
}

export default SearchPanel; */
