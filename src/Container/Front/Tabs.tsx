import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FrontTabs = () => {
  return (
    <div className="tabs">
      <Tabs defaultActiveKey="About US" id="uncontrolled-tab-example" >
        <Tab eventKey="About US" title="About US">
          {/* <Sonnet /> */}About Us
Arishti is a Sanskrit word which means “Security” to drive our cultural inheritance in the form of security. The vision of Arishti Info Labs is to
provide security to critical infrastructure systems by ensuring operational
data integrity.
      </Tab>
        <Tab eventKey="Our Mission" title="Our Mission
">
          {/* <Sonnet /> */}Our Mission
Arishti Info Labs is aiming to help companies with large-scale operational technology (OT) networks embrace the benefits of industrial IIoT/ICS by reducing cyber risks and mitigating operational threats. Arishti secures IIoT/ICS networks in manufacturing industries, critical infrastructure industries etc. The Arishti Info Labs to provide security and visibility solutions by providing multiple security tools for industries to manage their security of the complex IIoT/ICS infrastructure.
      </Tab>
        <Tab eventKey="Why Us?" title="Why Us?
" >In the era of digitalization every organization is driving their business by modern technologies like IIoT/ICS and security problems of it becomes an inherited problem statement with it, And we see a lot of opportunities in this technology field, on the other side, it is harming the businesses through novel cyber-attacks every day. It is important for companies to get their security systems in place. For this we have come up with the idea of IIoT/ICS security.
        {/* <Sonnet /> */}
        </Tab>
      </Tabs>
    </div>
  );
};
export default FrontTabs;
