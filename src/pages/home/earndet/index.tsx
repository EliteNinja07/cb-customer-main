import "./style.scss";
import { Flex } from "@chakra-ui/react";
import Overview from "./components/Overview";
import YourBalance from "./components/YourBalance";
import { request, MyContent } from "../../../common";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [res, setRes] = useState<any>({});

  useEffect(() => {
    request("coins/info", {
      data: { symbol: searchParams.get("symbol") },
    }).then((result) => {
      setRes(result.data);
    });
  }, []);

  return (
    <MyContent w="full">
      <Flex flexDir="column">
        <YourBalance tdata={res} />
        <Overview des={res?.info?.description} />
      </Flex>
    </MyContent>
  );
};
