import React from "react";
import Footer from "./footer";
import GlobalStyle from "./global-style";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
