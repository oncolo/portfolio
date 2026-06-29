type ClassValue = string | number | boolean | undefined | null;

function flatten(val: unknown): string[] {
  if (!val) return [];
  if (typeof val === "string") return [val];
  if (Array.isArray(val)) return val.flatMap(flatten);
  return [String(val)];
}

export function cn(...inputs: (ClassValue | ClassValue[])[]): string {
  return inputs.flatMap(flatten).filter(Boolean).join(" ");
}
