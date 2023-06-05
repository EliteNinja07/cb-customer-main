import { Flex, Input } from "@chakra-ui/react";
import { useRef, useEffect } from "react";

const styles = {
  IFile: {
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  UploadInputs: {
    position: "relative",
    left: 0,
    width: "100%",
    top: 0,
    zIndex: 0,
  },
};

export function MyUpload({
  children,
  defaultVal = "",
  onChange,
  ...field
}: any) {
  const refname: any = useRef(null);
  // const handleClick = () => {
  //   refname.current.value = "";
  //   refname.current.click();
  // };
  useEffect(() => {
    // console.log(defaultVal, "2defaultVal");
    // refname.current.value = "1";
  }, [defaultVal]);
  const onSelectFile = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => onChange({ src: reader.result }));
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <Flex sx={styles.IFile}>
      <Input
        type="file"
        style={{
          opacity: 0,
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: 10,
          cursor: "pointer",
        }}
        // value={defaultVal}
        onClick={() => {
          refname.current.value = "";
        }}
        ref={refname}
        onChange={onSelectFile}
        {...field}
      />
      <Flex w="100%" sx={styles.UploadInputs} flexDir="column">
        {children}
      </Flex>
    </Flex>
  );
}
