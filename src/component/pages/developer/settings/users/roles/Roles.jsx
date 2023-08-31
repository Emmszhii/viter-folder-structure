import React from "react";
import Header from "../../../../../partials/Header";
import Breadcrumbs from "../../../../../partials/Breadcrumbs";
import Navigation from "../../../../../partials/Navigation";
import RolesTable from "./RolesTable";
import ModalAddRoles from "./ModalAddRoles";
import Toast from "../../../../../partials/Toast";
import ModalError from "../../../../../partials/modals/ModalError";

const Roles = () => {
  const [isShow, setIsShow] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState([]);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isError, setIsError] = React.useState(true);
  // show Nav in mobile
  const [showNav, setShowNav] = React.useState(false);
  const handleShowNav = () => setShowNav(!showNav);

  const handleAddRoles = () => {
    setIsShow(true);
  };

  return (
    <>
      <Header showNav={showNav} handleShowNav={handleShowNav} />
      <section className="main__grid">
        <aside className={`${showNav ? "active" : ""} `}>
          <Navigation menu="settings" submenu="users" />
        </aside>
        <main>
          <Breadcrumbs />
          <div className="flex justify-between items-center my-5">
            <h1>Roles</h1>
            <button
              className="btn btn--accent btn--sm"
              onClick={handleAddRoles}
            >
              Add
            </button>
          </div>
          <RolesTable setIsShow={setIsShow} setItemEdit={setItemEdit} />
        </main>
      </section>

      {isShow && (
        <ModalAddRoles
          setIsShow={setIsShow}
          itemEdit={itemEdit}
          setItemEdit={setItemEdit}
          setIsSuccess={setIsSuccess}
        />
      )}
      {isSuccess && <Toast setIsSuccess={setIsSuccess} />}
      {isError && <ModalError setIsError={setIsError} />}
    </>
  );
};

export default Roles;
