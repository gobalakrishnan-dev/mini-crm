import { useEffect, useState } from "react";

import API from "../api/axios";

function Leads() {

  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {

    const res = await API.get("/leads");

    setLeads(res.data.leads);
  };

  return (
    <div>

      <h1>Leads</h1>

      <table border="1">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {leads.map((lead) => (

            <tr key={lead._id}>

              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Leads;