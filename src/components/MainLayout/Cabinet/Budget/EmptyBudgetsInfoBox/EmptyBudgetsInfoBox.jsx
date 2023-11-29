import React, { useEffect, useState } from "react";
import * as SC from "./EmptyBudgetsInfoBox.styled";

export const EmptyBudgetsInfoBox = ({ widgetWrapper }) => {
  const [emptyWidgets, setEmptyWidgets] = useState([]);

  useEffect(() => {
    if (widgetWrapper) {
      document.body.addEventListener("empty", (event) => {
        setTimeout(() => {
          if (!widgetWrapper.current) return;
          const hidenWidgets =
            widgetWrapper.current.querySelectorAll("[empty]");
          const newEmptyWidgets = [];

          hidenWidgets.forEach((widget) => {
            const emptyWidget = {
              title: widget.querySelector("h1").textContent,
              id: widget.closest("open-budget-widget").budgetId,
            };

            newEmptyWidgets.push(emptyWidget);
          });

          setEmptyWidgets(newEmptyWidgets);
        }, 1);
      });
    }

    return () => {
      document.body.removeEventListener("empty", () => {});
    };
  }, [widgetWrapper]);

  return (
    emptyWidgets.length !== 0 && (
      <SC.BoxWrapper>
        <SC.EmptyWidgetTitle variant="h3" component="h3">
          Бюджети з відсутніми даними
        </SC.EmptyWidgetTitle>
        <SC.EmptyWidgetsList component={"ul"}>
          {emptyWidgets.map((widget) => (
            <SC.EmptyWidgetItem component={"li"} key={widget.id}>
              <SC.EmptyWidgetItemTitle>{`${widget.title} (${widget.id})`}</SC.EmptyWidgetItemTitle>
            </SC.EmptyWidgetItem>
          ))}
        </SC.EmptyWidgetsList>
        <SC.InfoText>
          Інформація про деякі бюджети наразі відсутня через можливі причини,
          такі як відсутність оновлення даних або технічні обмеження.Ми
          рекомендуємо періодично перевіряти сторінку для оновлень щодо
          бюджетних даних.
        </SC.InfoText>
      </SC.BoxWrapper>
    )
  );
};
