import React, { useEffect, useState } from "react";
import { Collapse } from "antd";
import styled from "styled-components";
import axios from "axios";
import Cookies from "js-cookie";
import Upload from "./upload-content";
import { Select } from "../../components/Generics";
import { useDateContext } from "../../context/DateContext";

const Space = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  .ball {
    white-space: nowrap;
  }
`;

const { Panel } = Collapse;

const FileImport = () => {
  const { old_year, setOldYear } = useDateContext();
  const [rawData, setRawData] = useState([]);
  const [updateData, setUpdateData] = useState(false);

  let all = 0;
  let has = 0;

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

  useEffect(() => {
    getData();
  }, []);

  const buildPanels = (items) => {
    return items.map((item) => (
      <Panel
        key={item.id}
        header={
          <Space>
            <div>{item.title}</div>
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

  // const getCount = async () => {
  //   const res = await axios.get(
  //     `${
  //       import.meta.env.VITE_BASE_URL_API
  //     }/documentteacher110setcontroller/getalldocumentteacher110set?oldYear=${old_year}&newYear=${
  //       Number(old_year) + 1
  //     }`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${Cookies.get("_token")}`,
  //       },
  //     }
  //   );

  //   console.log(res.data.filter((e) => !e.document_?.indicator));
  // };

  // useEffect(() => {
  //   getCount();
  // }, []);

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
                      <h4 className="py-2">O'quv yili:</h4>
                      <Select
                        value={old_year}
                        options={[
                          { value: 2020, label: "2020/2021" },
                          { value: 2021, label: "2021/2022" },
                          { value: 2022, label: "2022/2023" },
                          { value: 2023, label: "2023/2024" },
                          { value: 2024, label: "2024/2025" },
                          { value: 2025, label: "2025/2026" },
                          { value: 2026, label: "2026/2027" },
                          { value: 2027, label: "2027/2028" },
                          { value: 2028, label: "2028/2029" },
                          { value: 2029, label: "2029/2030" },
                          { value: 2030, label: "2030/2031" },
                        ]}
                        className={"col-md-2 py-2"}
                        onChange={(e) => {
                          setOldYear(e);
                          setUpdateData({ name: "Jasurbek" });
                        }}
                      />
                      <h4 className="col-md-4 py-2">
                        Maksimal Ball :{" "}
                        <span className="bg-success p-1 rounded">{all}</span>
                      </h4>
                      <h4 className="col-md-4 py-2">
                        To'plangan Ball :{" "}
                        <span className="bg-warning p-1 rounded">
                          я
                        </span>
                      </h4>
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
