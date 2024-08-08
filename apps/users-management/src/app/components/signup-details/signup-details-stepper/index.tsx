import { Steps } from "antd";
import { ISignUpDetailsStepperStatus } from "../../../interfaces";
import { StepperCard, StepsWrapper } from "./index.style";

const { Step } = Steps;

const SignUpDetailsStepper = ({statuses }: ISignUpDetailsStepperStatus) => {

  const items = [
    {
      title: 'Your Details',
      description: 'Provide your basic details.',
    },
    {
      title: 'Choose a Password',
      description: 'Choose a Secure Password.',
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
          <Step key={index} title={item.title} description={item.description} status={statuses[index]} />
        )
        )}
      </StepsWrapper>
    </StepperCard>
  );
}

export default SignUpDetailsStepper;
