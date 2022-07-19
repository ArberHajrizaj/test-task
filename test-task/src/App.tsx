import { useState, useEffect } from "react";
// import Charts from "./components/Charts";
import LineChart from "./components/LineChart";
import { ResponseData,asset } from "./types";





const App: React.FunctionComponent = () => {
  const [data, setData] = useState<asset[]>();

  const fetchData = async () => {
    const result = await fetch(
      "https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000"
    );
    const data:ResponseData = await result.json();
   
    // setData(data.data.map(object=>{return {assetId:object.assetId,asset:object.asset}}));
    setData(data.data.map(object=>{return {assetId:object.assetId,asset:object.asset,aprDaily:object.aprDaily,dateUpdated:object.dateUpdated}}));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    
    <div>
      {data ? (
        <>
        {/* <LineChart asset={data?.asset.dateUpdated} /> */}
        </>
      ):(
        "Loading...."
      )}
      
    </div>
  );
};

export default App;
