import React, { useEffect, useState, createRef } from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './events-utils';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Spin } from 'antd';

import './Calendar.css';
import { useNavigate } from 'react-router-dom';
import { fetchLeaveByDateRange } from '../../actions/leaves';
import moment from 'moment';
const { useBreakpoint } = Grid;

//https://github.com/scaredofseagles/Producky/blob/master/client/src/views/CalendarMain.js
//https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/react/src/DemoApp.jsx
const Calendar = () => {
  const dispatch = useDispatch();
  const screens = useBreakpoint();
  const navigate = useNavigate();
  const c = createRef();
  let newLeave;
  const [dateRange, setDateRange] = useState({
    fromDate: moment(),
    toDate: moment(),
  });
  const [cal, setCal] = useState({});
  const { calendar, isLoading, error } = useSelector((state) => state.leaves);
  //https://stackoverflow.com/questions/61528054/react-full-calendar-change-view-api
  useEffect(() => {
    if (!isLoading) {
      if (screens.xs) {
        c.current.getApi().changeView('listMonth');
      } else {
        c.current.getApi().changeView('dayGridMonth');
      }
    }
  }, [screens]);

  const handleEventsss = async (info, success, error) => {
    const startDate = moment(info.start);
    const endDate = moment(info.end);

    if (
      dateRange.fromDate.diff(startDate) != 0 &&
      dateRange.toDate.diff(endDate) != 0
    ) {
      setDateRange({
        fromDate: startDate,
        toDate: endDate,
      });
      dispatch(
        fetchLeaveByDateRange({
          fromDate: startDate,
          toDate: endDate,
        })
      );
    }

    success(calendar);
  };

  const handleEventClick = (clickInfo) => {
    if (clickInfo.event.display != 'background') navigate(clickInfo.event.url);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
        <i>{eventInfo.event.extendedProps.emp_id}</i>
      </>
    );
  };
  return (
    <>
      <div className='demo-app'>
        <div className='demo-app-main'>
          <Spin spinning={isLoading}>
            <FullCalendar
              ref={c}
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: 'prevYear,prev,next,nextYear',
                center: 'title',
                right: 'today dayGridMonth,listMonth',
              }}
              initialView='dayGridMonth'
              dayMaxEvents={true}
              weekends
              businessHours={{ daysOfWeek: [1, 2, 3, 4, 5] }}
              events={handleEventsss}
              eventContent={renderEventContent}
              eventClick={handleEventClick}
            />
          </Spin>
        </div>
      </div>
    </>
  );
};
export default Calendar;
