export async function GET() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/v1/discounts`);

    if (!response.ok) {
      throw new Error("Failed to fetch discounts");
    }

    const discounts = await response.json();
    return new Response(JSON.stringify(discounts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error fetching discounts:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
