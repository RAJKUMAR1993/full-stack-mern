import React from "react";

const Container = (props) => {
  return (
    <section className={props.classOne}>
      <div className="container ">{props.children}</div>
    </section>
  );
};

export default Container;
