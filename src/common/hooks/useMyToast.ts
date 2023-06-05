import { useToast } from "@chakra-ui/react";

export function useMyToast() {
  const toast = useToast();

  const showSuccess = ({ title = "SUCCESS", description }: any) => {
    toast({
      title: title,
      status: "success",
      position: "top",
      duration: 5000,
      isClosable: true,
      description: description,
    });
  };

  const showError = ({ description }: any) => {
    toast({
      // title: "Error",
      status: "error",
      position: "top",
      duration: 5000,
      isClosable: true,
      description: description,
    });
  };

  const showRes = (res: any) => {
    toast({
      title: res.message ?? "",
      description: res.description ?? "",
      status: res.code === 0 ? "success" : "error",
      position: "top",
      duration: 5000,
      isClosable: true,
    });
  };

  return { showSuccess, showError, showRes };
}
