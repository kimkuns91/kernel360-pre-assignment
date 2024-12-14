import * as S from "./RecentMentors.style";

import { ChevronLeft, ChevronRight } from "lucide-react";

import Card from "components/ui/Card";
import React from "react";
import recentMentorsData from "data/recentMentors.json"; // JSON 데이터 가져오기

export default function RecentMentors() {
  return (
    <S.Template>
      <S.Header>
        <S.Title>Recent Mentors</S.Title>
        <S.Buttons>
          <S.PrevButton>
            <ChevronLeft />
          </S.PrevButton>
          <S.NextButton>
            <ChevronRight />
          </S.NextButton>
        </S.Buttons>
      </S.Header>
      <S.Mentors>
        {recentMentorsData.map((mentor) => (
          <Card
            key={`${mentor.image}-${mentor.name}`}
            mentor={mentor}
            variant={"recent"}
          />
        ))}
      </S.Mentors>
    </S.Template>
  );
}
