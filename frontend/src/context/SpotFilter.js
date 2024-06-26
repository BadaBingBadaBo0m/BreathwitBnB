import React, { useState } from "react";

export const SpotFilterContext = React.createContext();

export const SpotFilterProvider = props => {
  const [params, setParams] = useState({
    category: null,
    price: null
  });

  const ClearAllFilters = async () => {
    setParams({
      ...params,
      category: null
    });

    return null;
  }

  const contextValue = [
    params,
    setParams,
    ClearAllFilters
  ];

  return (
    <>
      <SpotFilterContext.Provider value={contextValue}>
        {props.children}
      </SpotFilterContext.Provider>
    </>
  )
}
