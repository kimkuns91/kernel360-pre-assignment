import * as S from "./Layout.style";

import GlobalStyle from "styles/global";
import { Outlet } from "react-router-dom";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";

export default function Layout() {
  return (
    <>
      <GlobalStyle />
      <S.Layout>
        <TopNavigation />
        <S.Container>
          <SideNavigation />
          <Outlet />
        </S.Container>
      </S.Layout>
    </>
  );
}
