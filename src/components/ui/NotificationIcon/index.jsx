import * as S from "./NotificationIcon.style";

import { Bell } from "lucide-react"; // Lucide 아이콘 사용 (Bell 아이콘)
import React from "react";

const NotificationIcon = ({ hasNewMessages }) => {
  return (
    <S.NotificationWrapper>
      <Bell size={24} color="#6B7280" />
      {hasNewMessages && <S.Badge />}
    </S.NotificationWrapper>
  );
};

export default NotificationIcon;
