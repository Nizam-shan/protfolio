/**
 * Dynamic Career Experience Calculator
 * Career start date: February 6, 2023 (06/02/2023)
 */

export const CAREER_START_DATE = new Date("2023-02-06T00:00:00");

export function getExperience(startDate = CAREER_START_DATE) {
  const now = new Date();
  
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  
  if (now.getDate() < startDate.getDate()) {
    months--;
  }
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  const totalMonths = years * 12 + months;
  const decimalYears = (totalMonths / 12).toFixed(1);
  
  return {
    years,
    months,
    totalMonths,
    decimalYears,
    // e.g. "3+ Years"
    yearsPlus: `${years}+ Years`,
    // e.g. "3+ years"
    yearsPlusLower: `${years}+ years`,
    // e.g. "3.5+ Years"
    precisePlus: `${decimalYears}+ Years`,
    // e.g. "3 yrs 7 mos"
    detailedCompact: `${years} yrs ${months} mos`,
    // e.g. "3 years and 7 months"
    detailedFull: `${years} years${months > 0 ? ` and ${months} month${months > 1 ? "s" : ""}` : ""}`,
  };
}

export default getExperience;
