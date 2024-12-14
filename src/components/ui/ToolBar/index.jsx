import * as S from "./ToolBar.style";

import { ArrowDownWideNarrow } from "lucide-react";
import { LayoutPanelLeft } from "lucide-react";
import { Search } from "lucide-react";

export default function ToolBar() {
  return (
    <S.ToolBar>
      <S.InputWrapper>
        <S.Input type="text" placeholder="Search Mentors" />
        <S.Lens>
          <Search style={{ color: "#9599c0" }} />
        </S.Lens>
      </S.InputWrapper>
      <S.ButtonWrapper>
        <S.Button>
          <LayoutPanelLeft style={{ color: "#9599c0" }} /> Category
        </S.Button>
        <S.Button>
          <ArrowDownWideNarrow style={{ color: "#9599c0" }} /> Sort by: Popular
        </S.Button>
      </S.ButtonWrapper>
    </S.ToolBar>
  );
}
