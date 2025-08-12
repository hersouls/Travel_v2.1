export const KST_TIMEZONE = 'Asia/Seoul';

const DEFAULT_DATE_OPTS: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: KST_TIMEZONE,
};

/**
 * Parses a YYYY-MM-DD string into a Date representing UTC midnight for that date.
 * This avoids local timezone side effects when doing day-based arithmetic.
 */
export function toDateFromYmdUtc(ymd: string): Date {
  const [yearStr, monthStr, dayStr] = ymd.split('-');
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);
  return new Date(Date.UTC(year, month - 1, day));
}

/** Formats a Date or YYYY-MM-DD as ko-KR date fixed to KST. */
export function formatDateKst(
  dateInput: Date | number | string,
  options?: Intl.DateTimeFormatOptions
): string {
  const opts: Intl.DateTimeFormatOptions = {
    ...DEFAULT_DATE_OPTS,
    ...(options || {}),
    timeZone: KST_TIMEZONE,
  };
  const dateObj =
    typeof dateInput === 'string'
      ? toDateFromYmdUtc(dateInput)
      : new Date(dateInput);
  return dateObj.toLocaleDateString('ko-KR', opts);
}

/** Returns YYYY-MM-DD in KST for a given Date or YYYY-MM-DD input. */
export function formatKstYmd(dateInput: Date | number | string): string {
  const d =
    typeof dateInput === 'string'
      ? toDateFromYmdUtc(dateInput)
      : new Date(dateInput);
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: KST_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return formatter.format(d);
}

/** Today as YYYY-MM-DD in KST. */
export function todayIsoKst(): string {
  return formatKstYmd(new Date());
}

/** Adds delta days to a YYYY-MM-DD and returns a Date object (UTC-based). */
export function addDaysYmd(ymd: string, deltaDays: number): Date {
  const base = toDateFromYmdUtc(ymd).getTime();
  const added = base + deltaDays * 24 * 60 * 60 * 1000;
  return new Date(added);
}

/** Extracts YYYY, MM, DD from a Date using UTC getters to avoid local tz. */
export function getUtcYmdParts(date: Date): { year: number; month: number; day: number } {
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  };
}

/** Returns 0-6 weekday using UTC to avoid local tz. */
export function getUtcWeekday(date: Date): number {
  return date.getUTCDay();
}