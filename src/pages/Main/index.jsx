import * as S from "./MainPage.style";

import Mentors from "./Mentors";
import RecentMentors from "./RecentMentors";
import ToolBar from "components/ui/ToolBar";

export default function MainPage() {
  return (
    <S.Container>
      <ToolBar />
      <RecentMentors />
      <Mentors />
    </S.Container>
  );
}
