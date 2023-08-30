import React from "react";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import Breadcrumbs from "../../../../../partials/Breadcrumbs";
import SystemTable from "./SystemTable";
import ModalAddSystem from "./ModalAddSystem";

const System = () => {
  const [showAddModal, setIsAddModal] = React.useState(false);
  console.log(showAddModal);
  const [item, setItem] = React.useState([]);

  return (
    <>
      <Header />
      <section className="main__grid">
        <aside>
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
          <SystemTable item={item} setItem={setItem} />
        </main>
      </section>

      {showAddModal && <ModalAddSystem setIsAddModal={setIsAddModal} />}
    </>
  );
};

export default System;
