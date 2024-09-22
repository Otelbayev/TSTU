import React, { useEffect, useState } from "react";
import { Collapse } from "antd";
import styled from "styled-components";
import axios from "axios";
import Cookies from "js-cookie";
import Upload from "./upload-content";
import { Select } from "../../components/Generics";
import { useDateContext } from "../../context/DateContext";
import { studyYears } from "../../utils/mock";

const getSize = (id, $italic) => {
  if (!$italic) {
    return "14px";
  }
  switch (id) {
    case 0:
      return "20px";
    case 1:
      return "18px";
    case 2:
      return "16px";
    default:
      return "14px";
  }
};

const Space = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  .ball {
    white-space: nowrap;
    font-style: ${({ $italic }) => ($italic ? "" : "italic")};
    font-weight: ${({ $italic }) => ($italic ? "" : "400")};
    font-size: ${({ $italic, id }) => getSize(id, $italic)};
  }
  .panel-title {
    font-style: ${({ $italic }) => ($italic ? "" : "italic")};
    font-weight: ${({ $italic }) => ($italic ? "" : "400")};
    font-size: ${({ $italic, id }) => getSize(id, $italic)};
  }
`;

const { Panel } = Collapse;

const FileImport = () => {
  const { old_year, setOldYear } = useDateContext();
  const [rawData, setRawData] = useState([]);
  const [updateData, setUpdateData] = useState(false);
  const [count, setCount] = useState(0);

  let all = 0;

  const getData = async () => {
    const res = await axios.get(
      `${
        import.meta.env.VITE_BASE_URL_API
      }/documentteacher110controller/getalldocumentteacher110`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      }
    );

    res.status === 200 && setRawData(res.data);
  };

  const getBall = async () => {
    const res2 = await axios.get(
      `${
        import.meta.env.VITE_BASE_URL_API
      }/documentteacher110setcontroller/getteacherdocumentscore?oldYear=${old_year}&newYear=${
        old_year + 1
      }`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      }
    );
    setCount(res2.data?.summ_score || 0);
  };

  useEffect(() => {
    getBall();
  }, [old_year]);

  useEffect(() => {
    getData();
  }, []);

  const buildPanels = (items) => {
    return items.map((item) => (
      <Panel
        key={item.id}
        header={
          <Space $italic={item.indicator} id={item.parent_id}>
            <div className="panel-title">{item.title}</div>
            <div className="ball">
              {item.max_score ? `${item.max_score} ball` : ""}
            </div>
          </Space>
        }
      >
        {item.children?.length ? (
          <Collapse>{buildPanels(item.children)}</Collapse>
        ) : (
          <Upload
            old_year={old_year}
            new_year={Number(old_year) + 1}
            id={item.id}
            upd={updateData}
            max_score={item?.max_score}
          />
        )}
      </Panel>
    ));
  };

  const buildNestedItems = (data, parentId) => {
    return data
      .filter((item) => item.parent_id === parentId)
      .map((item) => {
        if (item.parent_id === 0) {
          all += item.max_score;
        }
        return {
          ...item,
          children: buildNestedItems(data, item.id),
        };
      });
  };

  const nestedItems = buildNestedItems(rawData, 0);

  return (
    <div>
      <div className="content-wrapper wrapper-min-height">
        <section className="content pt-5">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>
                    Pedagog xodimlarning o‘quv yilidagi faoliyatini baholash
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <div className="container-fluid">
            <section className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header pl-4">
                    <div className="row">
                      <div className="col row">
                        <h5 className="col-5 py-2">O'quv yili:</h5>
                        <Select
                          value={old_year}
                          options={studyYears}
                          className={"col-7 py-2"}
                          onChange={(e) => {
                            setOldYear(e);
                            setUpdateData({ name: "Jasurbek" });
                          }}
                        />
                      </div>
                      <h5 className="col py-2">
                        Maksimal Ball :{" "}
                        <span className="bg-success p-1 rounded">{all}</span>
                      </h5>
                      <h5 className="col py-2">
                        To'plangan Ball :{" "}
                        <span className="bg-warning p-1 rounded">{count}</span>
                      </h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <Collapse>{buildPanels(nestedItems)}</Collapse>
                  </div>
                  <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-right"></ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FileImport;
