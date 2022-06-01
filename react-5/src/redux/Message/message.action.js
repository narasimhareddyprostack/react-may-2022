//action types 
const GM = 'GM'
const GN = 'GN'
const LUNCH = 'BUNCH'
//actions
let gmAction = () => {
    console.log("Morning")
    return { type: GM, payload: "MR Zedan" }
}
let gnAction = () => {
    console.log("Night")
    return { type: GN, payload: "OM Sankar" }
}
let gaAction = () => {
    console.log("afternoon")
    return { type: LUNCH }
}
export { gmAction, gnAction, gaAction, GM, GN, LUNCH }