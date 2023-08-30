import React from "react";
import TableLoading from "../../../../../partials/TableLoading";
import Pills from "../../../../../partials/Pills";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { BsArchiveFill } from "react-icons/bs";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { otheruser } from "./otherdata.js";
import ModalConfirm from "../../../../../partials/modals/ModalConfirm";
import ModalDeleteAndRestore from "../../../../../partials/modals/ModalDeleteAndRestore";

const OtherTables = ({ setItem, item, setIsShowAddModal }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRestore, setIsRestore] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  const [isArchive, setIsArchive] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState([]);

  const active = otheruser.filter((item) => item.status === 1);
  const inactive = otheruser.filter((item) => item.status === 0);

  const handleRestore = (item) => {
    setSelectedItem(item);
    setIsRestore(true);
    setIsDelete(true);
  };

  const handleDelete = (item) => {
    setSelectedItem(item);
    setIsRestore(false);
    setIsDelete(true);
  };

  const handleArchive = (item) => {
    setSelectedItem(item);
    setIsArchive(true);
  };

  const handleEdit = (item) => {
    setItem(item);
    setIsShowAddModal(true);
  };

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
    <div className="table__wrapper">
      {isLoading ? (
        <TableLoading count={20} cols={4} />
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Role</th>
                <th>Description</th>
                <th>Status</th>
                <th className="action"></th>
              </tr>
            </thead>
            <tbody>
              {otheruser.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
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
                            <button
                              className="tooltip"
                              data-tooltip="Edit"
                              onClick={() => handleEdit(item)}
                            >
                              <AiTwotoneEdit />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Archive"
                              onClick={() => handleArchive(item)}
                            >
                              <BsArchiveFill />
                            </button>
                          </li>
                        </ul>
                      ) : (
                        <ul className="flex items-center gap-4">
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Delete"
                              onClick={() => handleDelete(item)}
                            >
                              <AiFillDelete />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Restore"
                              onClick={() => handleRestore(item)}
                            >
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
          <p className="text-center mt-10">End of list.</p>
        </>
      )}
      {isArchive && (
        <ModalConfirm setIsArchive={setIsArchive} item={selectedItem} />
      )}
      {isDelete && (
        <ModalDeleteAndRestore
          item={selectedItem}
          isRestore={isRestore}
          setIsDelete={setIsDelete}
        />
      )}
    </div>
  );
};

export default OtherTables;
