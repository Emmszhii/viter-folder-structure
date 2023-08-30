import React from "react";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import Breadcrumbs from "../../../../../partials/Breadcrumbs";
import OtherTables from "./OtherTables";
import OtherAddModal from "./OtherAddModal";

const Other = () => {
  const [item, setItem] = React.useState([]);
  const [isShowAddModal, setIsShowAddModal] = React.useState(false);

  return (
    <>
      <Header />
      <section className="main__grid">
        <aside>
          <Navigation />
        </aside>
        <main>
          <Breadcrumbs />
          <div className="flex justify-between items-center my-5">
            <h1>Other</h1>
            <button
              className="btn btn--accent"
              onClick={() => setIsShowAddModal(true)}
            >
              Add
            </button>
          </div>
          <OtherTables
            item={item}
            setItem={setItem}
            setIsShowAddModal={setIsShowAddModal}
          />
        </main>
      </section>
      {isShowAddModal && (
        <OtherAddModal
          item={item}
          setItem={setItem}
          setIsShowAddModal={setIsShowAddModal}
        />
      )}
    </>
  );
};

export default Other;
