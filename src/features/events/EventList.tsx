import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/api";

export function EventList() {

  const [events, setevEnts] = useState([]);
  useEffect(() => {
    fetchData(setevEnts);
  }, []);
  console.log(events);
  return (
    <div>
        Event List
    </div>
  )
}
