import React from 'react';

import styles from './Fallback.module.scss';

export class Fallback extends React.Component<object, object> {
  render() {
    return (
      <div className={styles.container}>
        <h1>Something went wrong.</h1>
      </div>
    );
  }
}
