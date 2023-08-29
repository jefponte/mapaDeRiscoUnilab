import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/api";

export function EventList() {

  const [goals, setGoals] = useState([]);
  useEffect(() => {
    fetchData(setGoals);
  }, []);

  return (
    <div>
        Event List
    </div>
  )
}
