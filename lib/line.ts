export async function sendLineNotify(message: string, token: string) {
  const res = await fetch("https://notify-api.line.me/api/notify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
    body: new URLSearchParams({ message }).toString(),
  });

  return res.ok;
}
