import API from './API.js';

const api = new API('http://localhost:7075/contacts');

async function a() {
  {
    const TicketFull = await api.load();
    const data = await TicketFull.json();
    console.log(data);
  }

  {
    const TicketFull = await api.add({id: 1, name: 'Починить принтер', description: 'Кабинет 404, краска на складе', status: false, created: '13.03.2012'});
  }

  {
    const TicketFull = await api.load();
    const data = await TicketFull.json();
    console.log(data);
  }
}

a();

// Ticket {
//   id // идентификатор (уникальный в пределах системы)
//   name // краткое описание
//   status // boolean - сделано или нет
//   created // дата создания (timestamp)
// }

// TicketFull {
//   id // идентификатор (уникальный в пределах системы)
//   name // краткое описание
//   description // полное описание
//   status // boolean - сделано или нет
//   created // дата создания (timestamp)
// }

// TicketStatusUpdate {
//   id
//   status
// }