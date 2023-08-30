import React from "react";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import Breadcrumbs from "../../../../../partials/Breadcrumbs";
import SystemTable from "./SystemTable";
import ModalAddSystem from "./ModalAddSystem";

const System = () => {
  const [showAddModal, setIsAddModal] = React.useState(false);
  const [item, setItem] = React.useState([]);
  // show Nav in mobile
  const [showNav, setShowNav] = React.useState(false);
  const handleShowNav = () => setShowNav(!showNav);
  return (
    <>
      <Header showNav={showNav} handleShowNav={handleShowNav} />
      <section className="main__grid">
        <aside className={`${showNav ? "active" : ""}`}>
          <Navigation />
        </aside>
        <main className="pr-10">
          <Breadcrumbs />
          <div className="flex justify-between items-center my-5">
            <h1>System</h1>
            <button
              className="btn btn--accent"
              onClick={() => setIsAddModal(true)}
            >
              Add
            </button>
          </div>
          <SystemTable
            item={item}
            setItem={setItem}
            setIsAddModal={setIsAddModal}
          />
        </main>
      </section>

      {showAddModal && (
        <ModalAddSystem
          setIsAddModal={setIsAddModal}
          item={item}
          setItem={setItem}
        />
      )}
    </>
  );
};

export default System;
