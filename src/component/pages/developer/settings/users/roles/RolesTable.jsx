import React from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { BsArchiveFill } from "react-icons/bs";
import { roles } from "./data.js";

const RolesTable = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th className="action"></th>
          </tr>
        </thead>
        <tbody>
          {roles.map((item, key) => (
            <tr key={key}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>Active</td>
              <td className="table__action">
                <ul className="flex items-center gap-4">
                  <li>
                    <button className="tooltip" data-tooltip="Edit">
                      <AiTwotoneEdit />
                    </button>
                  </li>
                  <li>
                    <button className="tooltip" data-tooltip="Archive">
                      <BsArchiveFill />
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RolesTable;
