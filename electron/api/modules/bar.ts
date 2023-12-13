const barApi = {
  sum(a: number, b: number) {
    return a + b;
  },
  multiply(a: number, b: number) {
    return a * b;
  },
  asyncMethod() {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(true), 500);
    });
  }
}

export default barApi;
