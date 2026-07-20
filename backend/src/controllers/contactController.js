const messages = [];

export function submitContact(req, res) {
  const { name, email, phone = "", subject = "", message } = req.body || {};

  if (!name?.trim()) {
    return res.status(400).json({ ok: false, message: "Name is required" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "")) {
    return res.status(400).json({ ok: false, message: "Enter a valid email" });
  }
  if (phone && !/^[6-9]\d{9}$/.test(String(phone).replace(/\s/g, ""))) {
    return res
      .status(400)
      .json({ ok: false, message: "Enter a valid 10-digit mobile number" });
  }
  if (!message?.trim()) {
    return res
      .status(400)
      .json({ ok: false, message: "Please include a short message" });
  }

  const entry = {
    id: `msg_${Date.now()}`,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: String(phone).trim(),
    subject: String(subject).trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
  };

  messages.push(entry);
  console.log("[contact]", entry);

  return res.status(201).json({
    ok: true,
    message: "Message received. We will get back to you shortly.",
    data: { id: entry.id },
  });
}

export function listContactMessages() {
  return messages;
}
