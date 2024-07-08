import React from 'react';

import styles from './TopSection.module.scss';

interface State {
  inputValue: string;
}

interface Props {
  inputValue: string;
  updateSearchTerm(term: string): void;
}

export class TopSection extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      inputValue: props.inputValue,
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.props.updateSearchTerm(this.state.inputValue);
  };

  render() {
    return (
      <header className={styles.header}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            placeholder="Search by name"
            className={styles.input}
            type="text"
            value={this.state.inputValue}
            onChange={(event) =>
              this.setState({ inputValue: event.target.value })
            }
          />
          <button type="submit">Search</button>
        </form>
      </header>
    );
  }
}
