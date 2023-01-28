import React from "react";
import Service from "./Service";
import { services } from "../data";

import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="About" subTitle="us" />
      <div className="section-center services-center">
      {services.map((service) => {
        return <Service key={service.id} {...service}/>
      })}
      </div>
    </section>
  );
};

export default Services;
