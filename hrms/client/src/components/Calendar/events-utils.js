let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
let date1 = new Date('2021-10-03');
let date2 = new Date('2021-10-08');
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr,
    display: 'background',
  },
  {
    id: createEventId(),
    title: 'Timed1 event',
    start: todayStr + 'T12:00:00',
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: date1,
    end: date2,
    display: 'background',
  },
];

export function createEventId() {
  return String(eventGuid++);
}
