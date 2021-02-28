import React, { Component } from 'react';
import InputForm from './Components/InputForm';
// import ButtonAddContact from './Components/ButtonAddContact';
import VisibileContacts from './Components/VisibileContacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleContactFinder = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleChange = e => {
    const { name, number, value } = e.target;
    this.setState({
      [name]: value,
      [number]: value,
    });
  };

  findContact = () => {
    const { contacts } = this.state;
    const filtered = contacts.filter(
      contact => contact.name === this.state.filter,
    );
    return filtered;
  };

  hanldesubmit = e => {
    e.preventDefault();

    const { name } = this.state;
    const { number } = this.state;

    const newContact = {
      name,
      id: Date.now(),
      number,
    };

    this.setState(prevState => {
      return { contacts: [newContact, ...prevState.contacts] };
    });
  };

  render() {
    const data = this.state.contacts;
    const filterContact = this.state.filter;

    return (
      <div className="App">
        <h2>Phonebook</h2>
        <InputForm
          onChangeName={this.handleChange}
          onChangeNumber={this.handleChange}
          onSubmit={this.hanldesubmit}
          valueName={this.state.name}
          valueNumber={this.state.number}
        />
        <VisibileContacts
          data={data}
          onFindContact={this.handleContactFinder}
          filterContact={this.findContact()}
          valueFilter={filterContact}
        />
      </div>
    );
  }
}

export default App;
