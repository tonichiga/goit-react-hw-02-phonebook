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

  handleAddContactName = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handleAddContactNumber = e => {
    this.setState({
      number: e.target.value,
    });
  };
  handleContactFinder = e => {
    const { contacts } = this.state;

    const filtered = contacts.filter(
      contact => contact.name === e.target.value,
    );
    this.setState({
      filter: filtered,
    });
  };

  // findContact = () => {
  //   const { contacts } = this.state;
  //   const { filter } = this.state;
  // };

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
    console.log(filterContact);
    return (
      <div className="App">
        <h2>Phonebook</h2>
        <InputForm
          onChangeName={this.handleAddContactName}
          onChangeNumber={this.handleAddContactNumber}
          onSubmit={this.hanldesubmit}
        />
        <VisibileContacts
          data={data}
          onFindContact={this.handleContactFinder}
          filterContact={this.state.filter}
        />
      </div>
    );
  }
}

export default App;
