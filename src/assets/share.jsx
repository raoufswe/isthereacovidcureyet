import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0)" fill="#030104">
        <path d="M24.923 24.59v4.66a2.599 2.599 0 01-2.596 2.596H6.75a2.599 2.599 0 01-2.596-2.596V13.673a2.599 2.599 0 012.596-2.596h4.748l4.155-4.154H6.75A6.749 6.749 0 000 13.673V29.25A6.749 6.749 0 006.75 36h15.577a6.749 6.749 0 006.75-6.75v-8.816l-4.154 4.155z" />
        <path d="M31.266 0H17.061c-2.611.003-2.43.706-1.052 2.082l4.458 4.459-7.643 7.642a4.052 4.052 0 000 5.733l3.337 3.339a4.056 4.056 0 005.732-.002l7.644-7.643 4.375 4.375c1.524 1.524 2.087 1.564 2.087-1.048L36 4.734C35.999-.025 36.033-.001 31.266 0z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h36v36H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgComponent
