const API_BASE = import.meta.env.VITE_API_URL || "/api";

export type HomeContent = {
  stats: { value: string; label: string }[];
  features: { title: string; text: string }[];
  pillars: { title: string; text: string }[];
  testimonials: { quote: string; name: string; role: string }[];
};

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
      ...init,
    });
  } catch {
    throw new Error(
      "Cannot reach the Careerly server. Start the backend with npm run dev:backend.",
    );
  }

  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(
      (json as { message?: string }).message || "Request failed",
    );
  }
  return json as T;
}

export async function fetchHomeContent(): Promise<HomeContent | null> {
  try {
    const json = await request<{ ok: boolean; data: HomeContent }>(
      "/site/home",
    );
    return json.data ?? null;
  } catch {
    return null;
  }
}

export async function submitContact(payload: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  return request<{ ok: boolean; message: string }>("/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
