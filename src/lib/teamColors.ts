export const TEAM_COLORS: Record<string, string> = {
  // CONMEBOL
  BRA: "#ffdf00",
  ARG: "#75aadb",
  URY: "#7ec0ee",
  ECU: "#ffce00",
  COL: "#fcd116",
  PRY: "#ba0c2f",

  // UEFA
  FRA: "#0055a4",
  DEU: "#dd0000",
  ESP: "#c60b1e",
  PRT: "#006600",
  ENG: "#ffffff",
  NLD: "#ff6600",
  BEL: "#ff0000",
  HRV: "#ff0000",
  SUI: "#d52b1e",
  CHE: "#d52b1e",
  AUT: "#ed2939",
  NOR: "#ba0c2f",
  SWE: "#006aa7",
  DEN: "#c60c30",
  POL: "#dc143c",
  SCO: "#0065bd",
  BIH: "#002395",
  TUR: "#e30a17",
  CZE: "#11457e",

  // CONCACAF
  USA: "#ffffff",
  MEX: "#006341",
  CAN: "#ff0000",
  PAN: "#da121a",
  HAI: "#00209f",
  CUW: "#002b7f",

  // CAF
  MAR: "#239f40",
  EGY: "#c8102e",
  ALG: "#006233",
  DZA: "#006233",
  SEN: "#00853f",
  GHA: "#ce1126",
  CIV: "#f77f00",
  TUN: "#e70013",
  ZAF: "#007a4d",
  CPV: "#003893",
  COD: "#007fff",

  // AFC
  JPN: "#bc002d",
  KOR: "#c60c30",
  IRN: "#239f40",
  KSA: "#006c35",
  AUS: "#fdda24",
  QAT: "#8a1538",
  UZB: "#0099b5",
  JOR: "#ce1126",
  IRQ: "#ce1126",

  // OFC
  NZL: "#000000",
};

const FALLBACK_COLOR = "#f2b134";

export function getTeamColor(isoCode: string): string {
  return TEAM_COLORS[isoCode.toUpperCase()] ?? FALLBACK_COLOR;
}
