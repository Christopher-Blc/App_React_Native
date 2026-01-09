import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { clientesService } from "../../../services/clientsService";
import { Cliente } from "../../../data/clientes";



export default function ClienteDetalle() {
  const { id } = useLocalSearchParams();

  const clientId = Number(id);
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let mounted = true;

    (async () => {
      setCargando(true);
      const c = await clientesService.getById(clientId);
      if (mounted) {
        setCliente(c);
        setCargando(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [clientId]);

  if (cargando) return <Text>Cargando...</Text>;

  if (!cliente) {
    return <Text>Cliente no encontrado</Text>;
  }

  return (
    <View>
      <Text>{cliente.name} {cliente.surname}</Text>
      <Text>Correo: {cliente.email}</Text>
      <Text>Teléfono: {cliente.phoneNumber}</Text>

      <Text>Últimos pedidos:</Text>
      {cliente.pedidos.map((p, i) => (
        <Text key={i}>• {p}</Text>
      ))}
    </View>
  );
}
