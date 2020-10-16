import React from "react";
import { useGetFirestore } from "../../hooks/useGetFirestore.js";

export const List = ({ collection }) => {
  const { response, error, loading } = useGetFirestore(collection);

  return (
    <div className="list">
      <table>
        <thead>
          <tr>
            <th>Primero</th>
            <th>Segundo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primero</td>
            <td>Segundo</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};
