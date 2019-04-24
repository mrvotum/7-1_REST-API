import API from './API.js';

const api = new API('http://localhost:7075/contacts');

async function a() {
  {
    const contacts = await api.load();
    const data = await contacts.json();
    console.log(data);
  }

  {
    const contacts = await api.add({name: 'принтер', phone: '+8909111111'});
  }

  {
    const contacts = await api.load();
    const data = await contacts.json();
    console.log(data);
  }
}

a();
