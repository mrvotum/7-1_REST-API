import API from './API.js';

const api = new API('http://localhost:7075/TicketFull');

async function a() {
  {
    const TicketFull = await api.load();
    const data = await TicketFull.json();
    console.log(data);
  }

  { // добавляем тикет
    const TicketFull = await api.add({
      id: 1,
      name: 'принтер не работает',
      description: 'кабинет 404, краска на складе 1Б',
      status: false,
      created: '12.01.1992',
    });

    // const Ticket = await api.add({
    //   id: TicketFull[0],
    //   name: TicketFull[2],
    //   status: TicketFull[3],
    //   created: TicketFull[4],
    // });
  }

  {
    const TicketFull = await api.load();
    const data = await TicketFull.json();
    console.log(data);
  }
}

a();
