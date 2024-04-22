import React, { useEffect, useState } from "react";
import { supabase } from "./supabase";
import PixabayAPI from "./PixabayAPI";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
function GetApt() {
  const [myApt, setMyApt] = useState([]);

  useEffect(() => {
    async function getApt() {
      let { data: challengeten } = await supabase
        .from("challengeten")
        .select("*");
      setMyApt(challengeten);
    }
    getApt();
  }, []);

  const rows = [];
  for (let i = 0; i < myApt.length; i += 3) {
    rows.push(myApt.slice(i, i + 3));
  }

  return (
    <div>
      {rows.map((row, rowindex) => (
        <Row key={"row-$rowIndex}"} className="px-2">
          {row.map((r) => (
            <Col key={r.name} xs={12} md={4} className="px-3 ">
              <PixabayAPI className="images mb-8" query={r.aptimg} />
              <Row>
                <Col md="1" className="text-right">
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    style={{ color: "#a6a6a6" }}
                    size="2x"
                  />
                </Col>
                <Col>
                  <p className="text-left fw-bold">
                    {r.name}{" "}
                    <Button
                      variant="secondary"
                      className="border rounded-2 fw-bold text-white "
                      size="sm"
                    >
                      {r.tier}
                    </Button>
                  </p>
                </Col>
                <Col>
                  <p className="text-right  fw-bold">
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ color: "#a6a6a6" }}
                    />{" "}
                    {r.likes}{" "}
                    <FontAwesomeIcon
                      icon={faEye}
                      style={{ color: "#a6a6a6" }}
                    />{" "}
                    {r.views}
                  </p>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}

export default GetApt;
