import { Cliente, clientes } from "../data/clientes";

let clientesDb: Cliente[] = [...clientes];

const nextId = () =>
  clientesDb.length ? Math.max(...clientesDb.map((c) => c.id)) + 1 : 1;

export const clientesService = {
  async list(): Promise<Cliente[]> {
    return [...clientesDb];
  },

  async getById(id: number): Promise<Cliente | null> {
    return clientesDb.find((c) => c.id === id) ?? null;
  },

  async create(data: Omit<Cliente, "id">): Promise<Cliente> {
    const nuevo: Cliente = { id: nextId(), ...data };
    clientesDb = [nuevo, ...clientesDb];
    return nuevo;
  },

  async update(
    id: number,
    data: Partial<Omit<Cliente, "id">>
  ): Promise<Cliente | null> {
    clientesDb = clientesDb.map((c) => (c.id === id ? { ...c, ...data } : c));
    return clientesDb.find((c) => c.id === id) ?? null;
  },

  async remove(id: number): Promise<boolean> {
    const before = clientesDb.length;
    clientesDb = clientesDb.filter((c) => c.id !== id);
    return clientesDb.length !== before;
  },
};
