import React from "react";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { BsArchiveFill } from "react-icons/bs";
import { FaSearch, FaTrashRestoreAlt } from "react-icons/fa";
import { roles } from "./data.js";
import Pills from "../../../../../partials/Pills.jsx";
import TableLoading from "../../../../../partials/TableLoading.jsx";
import ModalConfirm from "../../../../../partials/modals/ModalConfirm.jsx";
import ModalDeleteAndRestore from "../../../../../partials/modals/ModalDeleteAndRestore.jsx";
import Footer from "../../../../../partials/Footer.jsx";
import Nodata from "../../../../../partials/Nodata.jsx";
import Loadmore from "../../../../../partials/Loadmore.jsx";
import SearchBar from "../../../../../partials/SearchBar.jsx";

const RolesTable = ({ setIsShow, setItemEdit }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isArchive, setIsArchive] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  const [isRestore, setIsRestore] = React.useState(false);
  const [item, setItem] = React.useState([]);

  const activeRoles = roles.filter((role) => role.status === 1).length;
  const inActiveRoles = roles.filter((role) => role.status === 0).length;

  const handleEdit = (item) => {
    setItemEdit(item);
    setIsShow(true);
  };

  const handleArchive = (item) => {
    setItem(item);
    setIsArchive(true);
  };
  const handleDelete = (item) => {
    setItem(item);
    setIsDelete(true);
    setIsRestore(false);
  };
  const handleRestore = (item) => {
    setItem(item);
    setIsDelete(true); // open modal
    setIsRestore(true);
  };

  React.useEffect(() => {
    function loadData() {
      setIsLoading(true),
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
    }
    loadData();
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <TableLoading count={1} cols={1} />
          <TableLoading count={20} cols={4} />
        </>
      ) : (
        <>
          <SearchBar />
          <div className="table__wrapper overflow-x-auto">
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
                {isLoading ||
                  (roles.length === 0 && (
                    <tr className="text-center ">
                      <td colSpan="100%" className="p-10">
                        {isLoading ? (
                          <TableLoading count={20} cols={3} />
                        ) : (
                          <h1>No data</h1>
                        )}
                      </td>
                    </tr>
                  ))}

                {roles.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>
                        {item.status === 1 ? (
                          <Pills label="Active" bgc="bg-green-800" />
                        ) : (
                          <Pills label="Inactive" bgc="bg-gray-500" />
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
            <Loadmore />
          </div>
        </>
      )}
      <Footer
        record={roles.length}
        active={activeRoles}
        inactive={inActiveRoles}
      />
      {isArchive && <ModalConfirm setIsArchive={setIsArchive} item={item} />}
      {isDelete && (
        <ModalDeleteAndRestore
          setIsDelete={setIsDelete}
          item={item}
          isRestore={isRestore}
        />
      )}
    </>
  );
};

export default RolesTable;
