import { PageHeader } from "../components/PageHeader"
import { PageNav } from "../components/PageNav"
import { loanPropInfo } from "../helpers/loanPropInfo"
import { loanPropFeatures } from "../helpers/loanPropFeatures"
import { loanPropDocs } from "../helpers/loanPropDocs"
import { useLayoutEffect } from "react"
import LoanPropHero from "../assets/images/LoanPropHero.png"

export const LoanProperty = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <section className="grid grid-cols-1 gap-6">
      <PageHeader src={LoanPropHero} />

      <PageNav
        pageInfo={loanPropInfo}
        pageFeatures={loanPropFeatures}
        pageDocs={loanPropDocs}
      />
    </section>
  )
}