import API from './API.js';

const api = new API('https://seven-one.herokuapp.com/TicketFull');

async function a() {
  {
    const TicketFull = await api.load();
    const data = await TicketFull.json();
    console.log(data);
  }

  { // добавляем тикет
    // eslint-disable-next-line no-unused-vars
    const TicketFull = await api.add({
      id: 1,
      name: 'принтер не работает',
      description: 'кабинет 404, краска на складе 1Б',
      status: false,
      created: '12.01.1992',
    });
  }

  {
    const TicketFull = await api.load();
    const data = await TicketFull.json();
    console.log(data);
  }
}

a();
