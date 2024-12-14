import * as S from "./SideNavigation.style";

import { Link, useLocation } from "react-router-dom";

import navigationItems from "../../constants/navigationItems";

export default function SideNavigation() {
  const location = useLocation();

  return (
    <S.SideNavigation>
      {navigationItems.map((item) => {
        const isActive = location.pathname === item.route;

        return (
          <Link to={item.route} key={item.id} style={{ textDecoration: "none" }}>
            <S.CategoryList isActive={isActive}>
              <S.CategoryItem>{item.icon}</S.CategoryItem>
              <S.CategoryItem>{item.label}</S.CategoryItem>
            </S.CategoryList>
          </Link>
        );
      })}
    </S.SideNavigation>
  );
}