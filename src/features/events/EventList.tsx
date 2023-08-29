import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectEvents } from "./eventSlice";
// import { fetchData } from "../../services/api";

export function EventList() {

  // const [events, setevEnts] = useState([]);
  // useEffect(() => {
  //   fetchData(setevEnts);
  // }, []);
  // console.log(events);
  const events = useAppSelector(selectEvents);

  return (
    <div>
      Event List
      {events.map((element) => {
        return (<p>{element.area}</p>);
      })}
    </div>
  )
}
