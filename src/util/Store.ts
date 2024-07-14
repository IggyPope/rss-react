export class Store {
  constructor(
    private key: string,
    private storage: Storage,
  ) {}

  getSnapshot = () => this.storage.getItem(this.key);

  subscribe = (listener: () => void) => {
    addEventListener('storage', listener);
    return () => {
      removeEventListener('storage', listener);
    };
  };
}
