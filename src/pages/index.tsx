import { useEffect, useState } from "react";
import { request } from "../common/";
import PageEight from "../components/index/PageEight";
import PageEleven from "../components/index/PageEleven";
import PageFive from "../components/index/PageFive";
import PageFooter from "../components/index/PageFooter";
import PageFour from "../components/index/PageFour";
import PageFs from "../components/index/PageFs";
import PageNav from "../components/index/PageNav";
import PageNine from "../components/index/PageNine";
import PageOne from "../components/index/PageOne";
import PageSeven from "../components/index/PageSeven";
import PageSix from "../components/index/PageSix";
import PageTen from "../components/index/PageTen";
import PageThree from "../components/index/PageThree";
import PageTwo from "../components/index/PageTwo";

export default function index() {
  const [res, setRes] = useState<any>([]);

  useEffect(() => {
    request("home/home", {}).then((res) => {
      setRes(res.data);
    });
  }, []);

  return (
    <>
      <PageNav />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <PageSix />
      <PageSeven />
      <PageEight data={res?.data} />
      <PageNine funds={res?.funds} />
      <PageTen />
      <PageEleven />
      <PageFooter />
      <PageFs />
    </>
  );
}
