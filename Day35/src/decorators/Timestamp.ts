export function Timestamp<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt: Date;
    className: string;

    constructor(...args: any[]) {
      super(...args);
      this.createdAt = new Date();
      this.className = constructor.name;
      console.log(`${this.className} created at: ${this.createdAt.toISOString()}`);
    }
		
  };
}

// get properties of classes in log -> 
