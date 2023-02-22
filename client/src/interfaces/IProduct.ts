export default interface IProduct {
    id?: any | null,
    name: string,
    description: string,
    quantity: number,
    note: string,
    stock?: boolean,
  }