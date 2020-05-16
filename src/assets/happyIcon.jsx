import * as React from "react"

function SvgComponent(props) {
  return (
    <svg height="3rem" viewBox="0 0 60 60" fill="none" {...props}>
      <path fill="url(#prefix__pattern0)" d="M0 0h60v60H0z" />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#prefix__image0" transform="scale(.01042)" />
        </pattern>
        <image
          id="prefix__image0"
          width={96}
          height={96}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default SvgComponent
