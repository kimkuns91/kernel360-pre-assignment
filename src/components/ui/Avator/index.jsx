import * as S from "./Avator.style";

const Avatar = ({ src, alt, size }) => {
  return (
    <S.AvatarWrapper size={size}>
      <S.AvatarImage src={src} alt={alt || "Avatar"} />
    </S.AvatarWrapper>
  );
};

export default Avatar;
