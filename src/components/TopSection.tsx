import React from 'react';

import styles from './TopSection.module.scss';

interface State {
  inputValue: string;
  throwError: boolean;
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
      throwError: false,
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.props.updateSearchTerm(this.state.inputValue);
  };

  componentDidUpdate(): void {
    if (this.state.throwError) {
      throw new Error('Something went wrong');
    }
  }

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
          <button
            type="button"
            onClick={() => this.setState({ throwError: true })}
          >
            Error
          </button>
        </form>
      </header>
    );
  }
}
