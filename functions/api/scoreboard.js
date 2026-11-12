
export async function onRequestGet() {
  const apiUrl =
    "https://script.google.com/macros/s/AKfycbyowj7BeP1m_2Gf2r4j9hIPzruxjDIXnzVO-ibSMFrr-Z0P4aJvUkqF6ihiVdcz4JOYag/exec";

  try {
    const response = await fetch(apiUrl, {
      redirect: "follow"
    });

    if (!response.ok) {
      throw new Error(
        "Google Sheets API returned " + response.status
      );
    }

    const data = await response.json();

    if (data.success !== true) {
      throw new Error(
        data.error || "Scoreboard data unavailable"
      );
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=60"
      }
    });

  } catch (error) {
    console.error("Scoreboard API error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Unable to load scoreboard"
      }),
      {
        status: 502,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}
