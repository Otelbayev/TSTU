import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import { Collapse } from "antd";
import styled from "styled-components";
import axios from "axios";
import Cookies from "js-cookie";
import Upload from "./upload-content";
import { Input } from "../../components/Generics";

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
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  console.log(month);

  const [rawData, setRawData] = useState([]);
  const [old_year, setOldYear] = useState(month >= 8 ? year : year - 1);

  const [data, setData] = useState([]);
  const getData1 = async () => {
    const res = await axios.get(
      `${
        import.meta.env.VITE_BASE_URL_API
      }/documentteacher110setcontroller/getalldocumentteacher110set?oldYear=${old_year}&newYear=${
        Number(old_year) + 1
      }`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      }
    );

    res.status === 200 && setData(res.data);
  };

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
            getData={getData1}
            data={data}
          />
        )}
      </Panel>
    ));
  };

  const buildNestedItems = (data, parentId) => {
    return data
      .filter((item) => item.parent_id === parentId)
      .map((item) => ({
        ...item,
        children: buildNestedItems(data, item.id),
      }));
  };

  const nestedItems = buildNestedItems(rawData, 0);

  const onDateSubmit = (e) => {
    e.preventDefault();
    getData1();
  };

  return (
    <div>
      <div className="content-wrapper wrapper-min-height">
        <section className="content pt-5">
          <div className="container-fluid">
            <section className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <form className="row" onSubmit={onDateSubmit}>
                      <div className="col-md-2">
                        <h2>O'quv yili:</h2>
                      </div>
                      <Input
                        value={old_year}
                        onChange={(e) => setOldYear(e.target.value)}
                        className="form-group col-md-2"
                        type="number"
                        min={2020}
                      />
                      <Input
                        value={Number(old_year) + 1}
                        disabled={true}
                        className="form-group col-md-2"
                      />
                      <div className="col-md-2">
                        <button className="btn btn-primary" type="submit">
                          Update
                        </button>
                      </div>
                    </form>
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
