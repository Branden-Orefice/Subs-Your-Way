export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const now = new Date().getTime();
  const targetTime = new Date(dateStr).getTime();
  const targetTimePlus30 = targetTime + 30 * 60000;
  return Math.round((targetTimePlus30 - now) / 60000);
}