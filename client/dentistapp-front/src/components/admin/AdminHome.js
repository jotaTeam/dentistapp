import React, { useEffect } from "react";
import { apiUrl } from "../../datahelpers/apiURL";
import { getDataList } from "../../crud/getDataList";
import { useState } from "react";
import LanguageSelector from "../LanguageSelector";

export const AdminHome = () => {
  const [data1, setData1] = useState();

  useEffect(() => {
    getDataList(apiUrl.emergency).then((data) => setData1(data.data));
  }, []);

  return (
    <div style={{textAlign:"center"}}>
      <LanguageSelector />

	<section className="home-header" style={{marginBottom:"100px"}}>
        <div className="home-title-cont">
          <h1 className="home-title-left">Administración</h1>
          <hr />
        </div>
        <br />
        <br />
        <h2>Emergencias por tramitar:</h2>

        <br />
        <br />
      </section>
      {data1 && data1.ok && (
        <table border="1" style={{ border: "none"}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
              <th>Alergias</th>
              <th>Info Aler.</th>
              <th>Patologías</th>
              <th>Info Pat.</th>
              <th>Síntomas</th>
              <th>Causas</th>
            </tr>
          </thead>
          <tbody>
            {data1.emergency.map((emer) => (
              <tr key={emer.id}>
                <td>{emer.id}</td>
                {console.log(emer.medicalInfo.cause)}
                <td>{emer.name}</td>
                <td>{emer.surnames}</td>
                <td>{emer.phone}</td>
                <td>
                  {emer.medicalInfo.allergy ? <span>Si</span> : <span>No</span>}
                </td>
                <td>{emer.medicalInfo.descriptionAllergy}</td>
                <td>
                  {emer.medicalInfo.pathology ? (
                    <span>Si</span>
                  ) : (
                    <span>No</span>
                  )}
                </td>
                <td>{emer.medicalInfo.descriptionPathology}</td>
                <td>
                  <table
                    border="1"
                    style={{ border: "none", borderCollapse: "collapse" }}
                  >
                    <thead>
                      <tr>
                        <th>Sangrado</th>
                        <th>Dolor</th>
                        <th>Movimiento dental</th>
                        <th>Úlcera</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {emer.medicalInfo.simptom.bleeding ? (
                            <span>Si</span>
                          ) : (
                            <span>No</span>
                          )}
                        </td>
                        <td>
                          {emer.medicalInfo.simptom.pain ? (
                            <span>Si</span>
                          ) : (
                            <span>No</span>
                          )}
                        </td>
                        <td>
                          {emer.medicalInfo.simptom.dental_movility ? (
                            <span>Si</span>
                          ) : (
                            <span>No</span>
                          )}
                        </td>
                        <td>
                          {emer.medicalInfo.simptom.ulcer ? (
                            <span>Si</span>
                          ) : (
                            <span>No</span>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <table
                    border="1"
                    style={{ border: "none", borderCollapse: "collapse" }}
                  >
                    <thead>
                      <tr>
                        <th>Caries</th>
                        <th>Fractura</th>
                        <th>Problemas de encías</th>
                        <th>P. higiene oral</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          {emer.medicalInfo.cause.cavity ? (
                            <span>Si</span>
                          ) : (
                            <span>No</span>
                          )}
                        </td>

                        <td>
                          {emer.medicalInfo.cause.fracture ? (
                            <span>Si</span>
                          ) : (
                            <span>No</span>
                          )}
                        </td>

                        <td>
                          {emer.medicalInfo.cause.gums_problems ? (
                            <span>Si</span>
                          ) : (
                            <span>No</span>
                          )}
                        </td>
                        <td>
                          {emer.medicalInfo.cause.oral_hygiene ? (
                            <span>Si</span>
                          ) : (
                            <span>No</span>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
