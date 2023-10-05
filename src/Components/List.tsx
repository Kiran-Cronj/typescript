import React from "react";
import { useAppSelector } from "../store/store";

const List = () => {
  const persons = useAppSelector((state) => state.person.persons);
  return (
    <div className="rounded shadow border m-2 p-2">
      <p>This is List Components</p>
      <table className="rounded">
        <thead>
          <tr className="">
            <th className="p-2 border rounded">ID</th>
            <th className="p-2 border rounded">Name</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr className="" key={person.id}>
              <td className="p-2">{person.id}</td>
              <td className="p-2">{person.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
