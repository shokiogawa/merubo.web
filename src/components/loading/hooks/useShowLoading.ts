import { useState } from "react";

const useShowLoading = () => {
  const [isLoading, setShowLoading] = useState(false);

  const showLoadinghandler = () => {
    setShowLoading(true);
  };
  const hideLoadingHandler = () => {
    setShowLoading(false);
  };

  return { isLoading, showLoadinghandler, hideLoadingHandler };
};
export default useShowLoading;
