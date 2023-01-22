import React, { useState } from 'react';

const tokenIdContext = React.createContext({
  tokenId: null,
  isLoggedIn: false,
  addTokenId: () => {},
  removeTokenId: () => {},
});

export const TokenIdContextProvider = (props) => {
  const localStorageTokenId = localStorage.getItem('tokenId');
  const [isTokenId, setIsTokenId] = useState(localStorageTokenId);

  const isLoggedIn = isTokenId ? true : false;

  const addtokenId = (idToken) => {
    localStorage.setItem('tokenId', idToken);
    setIsTokenId(idToken);
  };

  const removeTokenId = () => {
    localStorage.removeItem('tokenId');
    setIsTokenId(null);
  };

  return (
    <tokenIdContext.Provider
      value={{
        tokenId: isTokenId,
        isLoggedIn: isLoggedIn,
        addTokenId: addtokenId,
        removeTokenId: removeTokenId,
      }}
    >
      {props.children}
    </tokenIdContext.Provider>
  );
};

export default tokenIdContext;
