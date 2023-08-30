import React from "react";
import { system } from "./systemdata";
import TableLoading from "../../../../../partials/TableLoading";
import SearchBar from "../../../../../partials/SearchBar";
import Pills from "../../../../../partials/Pills";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { BsArchiveFill } from "react-icons/bs";
import { FaTrashRestoreAlt } from "react-icons/fa";
import Loadmore from "../../../../../partials/Loadmore";
import Footer from "../../../../../partials/Footer";
import ModalConfirm from "../../../../../partials/modals/ModalConfirm";
import ModalDeleteAndRestore from "../../../../../partials/modals/ModalDeleteAndRestore";

const SystemTable = ({ item, setItem }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleEdit = () => {};

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
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
          <div className="table__wrapper">
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
                  (system.length === 0 && (
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

                {system.map((item, key) => {
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
                                // onClick={() => handleEdit(item)}
                              >
                                <AiTwotoneEdit />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Archive"
                                // onClick={() => handleArchive(item)}
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
                                // onClick={() => handleDelete(item)}
                              >
                                <AiFillDelete />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Restore"
                                // onClick={() => handleRestore(item)}
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
            {/* <Loadmore /> */}
          </div>
        </>
      )}
      {/* <Footer
        record={system.length}
        active={activeRoles}
        inactive={inActiveRoles}
      /> */}
      <p className="mt-10 text-center">End of list</p>

      {/* {isArchive && <ModalConfirm setIsArchive={setIsArchive} item={item} />}
      {isDelete && (
        <ModalDeleteAndRestore
          setIsDelete={setIsDelete}
          item={item}
          isRestore={isRestore}
        />
      )} */}
    </>
  );
};

export default SystemTable;
