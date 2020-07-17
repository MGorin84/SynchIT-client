import React from 'react';
import logo from './synchit-logo.png';
import Calendar from 'react-calendar';
import styles from './Calendar.scss';


const App = () => {
  return (
    <div>
      <h1>
        SynchIT
      </h1>
      <p className={styles.calendar}>
      <Calendar />
      <logo />
      </p>
    </div>
  );
}

export default App;