import * as S from "./Mentors.style";

import Card from "components/ui/Card";
import mentorsData from "data/mentors.json";

export default function Mentors() {
  return (
    <S.Template>
      <S.Title>Mentors</S.Title>
      <S.Mentors>
        {mentorsData.map((mentor) => (
          <Card
            key={`${mentor.image}-${mentor.name}`}
            mentor={mentor}
            variant={"detail"}
          />
        ))}
      </S.Mentors>
    </S.Template>
  );
}
