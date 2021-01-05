import NextI18Next from "next-i18next"

const defaultLanguage = "en"
const otherLanguages = ["it"]
const allLanguages = [defaultLanguage, ...otherLanguages]

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: defaultLanguage,
  otherLanguages: otherLanguages,
  defaultNS: "common",
  fallbackLng: allLanguages,
  localePath: "public/static/locales",
  strictMode: false,
})

export const { appWithTranslation, useTranslation, i18n } = NextI18NextInstance

export function changeLanguage(languageCode: string) {
  return i18n.changeLanguage(
    allLanguages.includes(languageCode) ? languageCode : defaultLanguage
  )
}

export default NextI18NextInstance
