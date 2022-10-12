import React from "react";
import { Card } from "../Card";
import { ContentStyled, SecondComponentStyled } from "./SecondComponent.style";

import { SecondComponentProps } from "./SecondComponent.types";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { DiJavascript1 } from "@react-icons/all-files/di/DiJavascript1";

export const SecondComponent: React.FC<SecondComponentProps> = () => {
  return (
    <SecondComponentStyled>
      <ContentStyled>
        <Card
          title="React"
          iconComponent={<FaReact size={30} />}
          description="React — это декларативная, эффективная и гибкая JavaScript-библиотека для создания пользовательских интерфейсов. Она позволяет вам собирать сложный UI из маленьких изолированных кусочков кода, называемых «компонентами»."
        />
        <Card
          title="Next"
          iconComponent={<SiNextDotJs size={30} />}
          description="Next.js предоставляет вам наилучшие возможности разработчика со всеми функциями, необходимыми для производства: гибридный статический и серверный рендеринг, поддержка TypeScript, интеллектуальное объединение, предварительная выборка маршрута и многое другое. Конфигурация не требуется."
        />
        <Card
          title="TypeScript"
          iconComponent={<SiTypescript size={30} />}
          description="TypeScript добавляет дополнительный синтаксис в JavaScript для поддержки более тесной интеграции с вашим редактором. Ловите ошибки на ранней стадии в вашем редакторе."
        />
        <Card
          title="JavaScript"
          iconComponent={<DiJavascript1 size={30} />}
          description="JavaScript® (часто просто JS) — это легковесный, интерпретируемый или JIT-компилируемый, объектно-ориентированный язык с функциями первого класса. "
        />
      </ContentStyled>
    </SecondComponentStyled>
  );
};
