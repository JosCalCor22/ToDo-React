import { useState } from "react";

export default function useLocalStorage() {
  const [ items, setItems ] = useState([]);

  /* Save Items ToDo in LocalStorage */
  const todoSave = (newItem) => {
    localStorage.setItem('TODO_V1', JSON.stringify(newItem));
    setItems(newItem);
  }

  return [ items, todoSave ];
}