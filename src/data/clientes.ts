export interface Cliente {
  id: number;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  pedidos: string[];
}

export const clientes: Cliente[] = [
  {
    id: 1,
    name: "Christopher",
    surname: "Bolocan",
    email: "chris.bolocan@gmail.com",
    phoneNumber: "+34641251848",
    pedidos: ["Pedido A", "Pedido B"],
  },
  {
    id: 2,
    name: "María",
    surname: "Martínez",
    email: "Martinez.maria@gmail.com",
    phoneNumber: "+34641251849",
    pedidos: ["Pedido C"],
  },
];
