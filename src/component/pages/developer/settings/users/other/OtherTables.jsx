import React from "react";
import TableLoading from "../../../../../partials/TableLoading";

import Pills from "../../../../../partials/Pills";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { BsArchiveFill } from "react-icons/bs";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { otheruser } from "./otherdata.js";
import ModalConfirm from "../../../../../partials/modals/ModalConfirm";

const OtherTables = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showArchiveModal, setShowArchiveModal] = React.useState(false);
  // const handlerShowArchiveModal = setShowArchiveModal(!showArchiveModal);
  let counter = 1;

  React.useEffect(() => {
    function loadData() {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
    loadData();
  }, []);

  return (
    <>
      {isLoading ? (
        <TableLoading count={20} cols={4} />
      ) : (
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
            {otheruser.map((item, i) => {
              return (
                <tr key={item.id}>
                  <td>{counter++}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    {item.status === 1 ? (
                      <Pills label="Active" bgc="bg-green-800" />
                    ) : (
                      <Pills label="Inactive" bgc="bg-gray-400" />
                    )}
                  </td>
                  <td className="table__action">
                    {item.status === 1 ? (
                      <ul className="flex items-center gap-4">
                        <li>
                          <button className="tooltip" data-tooltip="Edit">
                            <AiTwotoneEdit />
                          </button>
                        </li>
                        <li>
                          <button
                            className="tooltip"
                            data-tooltip="Archive"
                            onClick={() => setShowArchiveModal(true)}
                          >
                            <BsArchiveFill />
                          </button>
                        </li>
                      </ul>
                    ) : (
                      <ul className="flex items-center gap-4">
                        <li>
                          <button className="tooltip" data-tooltip="Delete">
                            <AiFillDelete />
                          </button>
                        </li>
                        <li>
                          <button className="tooltip" data-tooltip="Restore">
                            <FaTrashRestoreAlt />
                          </button>
                        </li>
                      </ul>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {/* {showArchiveModal && <ModalConfirm setIsArchive={setShowArchiveModal} />} */}
    </>
  );
};

export default OtherTables;
