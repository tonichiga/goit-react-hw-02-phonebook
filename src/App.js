import React, { Component } from 'react';
import InputForm from './Components/InputForm';
// import ButtonAddContact from './Components/ButtonAddContact';
import VisibileContacts from './Components/VisibileContacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const newContact = {
      name: data.name,
      number: data.number,
      id: Date.now(),
    };

    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === newContact.name)) {
      return alert('такой контакт существует');
    }

    this.setState(prevState => {
      return { contacts: [newContact, ...prevState.contacts] };
    });
  };

  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const data = this.state.contacts;

    return (
      <div className="App">
        <h2>Phonebook</h2>
        <InputForm onSubmit={this.formSubmitHandler} />
        <VisibileContacts
          data={data}
          contacts={this.state.contacts}
          delete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
