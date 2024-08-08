import React, { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import translations from "../translations";

interface Props {
  children: ReactNode;
}

export const IntlWrapper: React.FC<Props> = ({ children }) => {
  return (
    <IntlProvider locale={'en'}  messages={translations["en"]}>
      {children}
    </IntlProvider>
  );
};