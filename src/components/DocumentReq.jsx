/* eslint-disable react/prop-types */
import check from "../assets/images/check.png"

export const DocumentReq = ({ title, desc, desc2 }) => {
  return (
    <section className="grid grid-cols-1 place-items-center gap-4 p-4">
      <div className="flex flex-row gap-6 p-6 rounded-lg w-full max-w-7xl bg-primary-featureBox shadow-md shadow-primary-featureShadow">
        <div className="flex flex-col justify-center">
          <img src={check} alt="Requirements" />
        </div>
        <div className="grid grid-cols-1 font-Sora">
          <p className="font-semibold md:text-xl lg:text-2xl">{title}</p>
          <p className="text-xs md:text-base lg:text-lg text-neutral-600">
            {desc}
          </p>
          <p className="text-xs md:text-base lg:text-lg text-neutral-600">
            {desc2}
          </p>
        </div>
      </div>
    </section>
  )
}