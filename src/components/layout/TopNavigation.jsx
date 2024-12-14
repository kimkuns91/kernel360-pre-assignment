import * as S from "./TopNavigation.style";

import Avatar from "components/ui/Avator";
import NotificationIcon from "components/ui/NotificationIcon";

export default function TopNavigation() {
  return (
    <S.TopNavigation>
      <S.Logo src="/assets/images/KernelMentor.png" alt="Logo" />
      <S.Container>
        <NotificationIcon hasNewMessages={true} />
        <Avatar src={"/assets/images/Profile.png"}/>
      </S.Container>
    </S.TopNavigation>
  );
}
