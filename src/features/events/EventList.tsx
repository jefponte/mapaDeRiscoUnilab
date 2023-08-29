import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectEvents } from "./eventSlice";

export function EventList() {
  const columns = [
    { field: 'id', headerName: "Nº", width: 100 },
    { field: 'area', headerName: "Área", width: 200 },
    { field: 'objetivo', headerName: "Objetivo", width: 200 },
    { field: 'classificacaoIndicador', headerName: "Classificação do Indicador", width: 200 },
    { field: 'categoriaIndicador', headerName: "Categoria do Indicador" },
    { field: 'tipoIndicador', headerName: "Tipo de Indicador" },
    { field: 'descricaoIndicador', headerName: "Descrição do Indicador", width: 250 },
    { field: 'descricao', headerName: "Descrição da Meta", width: 250 },
    { field: 'prazo', headerName: "Prazo", width: 100 },
    { field: 'unidadeResponsavel', headerName: "Unidade Responsavel", width: 200 },
    { field: 'unidadeCoResponsavel', headerName: "Unidade Co-Responsavel", width: 250 }
  ];

  const events = useAppSelector(selectEvents);

  return (
    <div>
      Event List
      {events.map((element) => {
        return (<p key={element.id}>{element.area}</p>);
      })}
    </div>
  )
}
