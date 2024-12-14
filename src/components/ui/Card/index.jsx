import * as S from "./Card.style";

import { FileStack, Star } from "lucide-react";

export default function Card({ mentor, variant }) {
  const {
    image,
    name,
    job,
    introduction,
    isFollowed,
    numOfTask,
    reviewScore,
    reviewCount,
  } = mentor;

  return (
    <S.CardWrapper variant={variant}>
      <S.Header>
        <S.AvatarWrapper>
          <S.Avatar src={image} alt={name}></S.Avatar>
          <S.InfoWrapper>
            <S.Name>{name}</S.Name>
            <S.Role>{job}</S.Role>
          </S.InfoWrapper>
        </S.AvatarWrapper>
        {!isFollowed ? (
          <S.FollowButton>+ Follow</S.FollowButton>
        ) : (
          <S.FollowedButton>Followed</S.FollowedButton>
        )}
      </S.Header>
      {variant === "detail" && <S.Content>{introduction}</S.Content>}
      <S.Info>
        <S.Task>
          <FileStack style={{ color: "#54577A", marginRight: "3px" }} />
          {numOfTask} Task
        </S.Task>
        <S.Reviews>
          <Star style={{ color: "#FFB054", marginRight: "3px" }} />
          {reviewScore}
          {" ("}
          {reviewCount}
          {" Reviews)"}
        </S.Reviews>
      </S.Info>
    </S.CardWrapper>
  );
}
