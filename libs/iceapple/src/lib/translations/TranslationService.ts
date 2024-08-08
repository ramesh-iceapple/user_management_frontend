import { IntlShape } from "react-intl";

export const getTranslation = (
  intl: IntlShape,
  translationKey: string,
  value?: string,
  valueIsTranslationKey?: boolean
): string => {
  return value
    ? valueIsTranslationKey
      ? intl.formatMessage({ id: translationKey }, { item: intl.formatMessage({ id: value }) })
      : intl.formatMessage({ id: translationKey }, { item: value })
    : intl.formatMessage({ id: translationKey });
};