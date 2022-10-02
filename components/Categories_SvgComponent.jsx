import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const Categories_SvgComponent = (props) => (
  <Svg
    width={34}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 29h.065v-4H17a8 8 0 1 1 0-16h.065V5H17C10.373 5 5 10.373 5 17s5.373 12 12 12Zm12-12c0-6.29-4.84-11.45-11-11.959v4.02a8.001 8.001 0 0 1 0 15.877v4.02c6.16-.507 11-5.667 11-11.958Z"
        fill="#000"
      />
    </G>
    <Defs></Defs>
  </Svg>
)

export default Categories_SvgComponent