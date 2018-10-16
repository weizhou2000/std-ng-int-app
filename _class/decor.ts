export class Decor {
  static gra(query: string) {
    const me: any = this;
    return (target, property, descriptor) => {
      const oldValue = descriptor.value;

      descriptor.value = function(...opt: any[]) {
        const variables = opt[0];
        const info = {
          query,
          variables,
        };
        return oldValue.apply(this, [info]);
      };

      return descriptor;
    };
  }
}
