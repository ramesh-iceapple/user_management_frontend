import { Steps } from "antd";
import { IStepperStatus } from "../../../interfaces";
import { StepperCard, StepsWrapper } from "./index.style";
import { FormattedMessage } from "react-intl";

const { Step } = Steps;

const UpsertUserStepper = ({statuses }: IStepperStatus) => {

  const items = [
    {
      title: 'um.userDetails',
      description: 'um.provideUserBasicDetails',
    },
    {
      title: 'um.userPassword',
      description: 'um.ChooseASecurePassword',
    },
  ]

  return (
    <StepperCard>
      <StepsWrapper
        progressDot
        current={0}
        direction="vertical"
      >
        {items.map((item, index) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          <Step key={index} title={<FormattedMessage  id={item.title}/>} description={<FormattedMessage  id={item.description} />} status={statuses[index]} />
        )
        )}
      </StepsWrapper>
    </StepperCard>
  );
}

export default UpsertUserStepper;
