import React from "react";
import Breadcrums from "../../pages/Breadcrums/Breadcrums";
import Meta from "../../componets/Meta/Meta";
const TramAndConditions = () => {
  return (
    <>
      <Meta title={"Trams & Conditions"} />
      <Breadcrums title="Trams & AndConditions" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-12 col-xl-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TramAndConditions;
