const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface FacebookPost {
  id: string;
  message: string;
  created_time: string;
  permalink_url: string;
  picture?: string;
  full_picture?: string;
  story?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    // Facebook Graph API endpoints
    const pageId = "BudapestTigers";
    const accessToken = Deno.env.get("FACEBOOK_ACCESS_TOKEN");

    if (!accessToken) {
      return new Response(
        JSON.stringify({
          error: "Facebook access token not configured",
          posts: [],
        }),
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
          status: 200,
        }
      );
    }

    const url = `https://graph.facebook.com/v18.0/${pageId}/posts?fields=id,message,created_time,permalink_url,picture,full_picture,story,type&access_token=${accessToken}`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error("Facebook API error:", response.statusText);
      return new Response(
        JSON.stringify({
          error: "Failed to fetch Facebook feed",
          posts: [],
        }),
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
          status: 200,
        }
      );
    }

    const data = await response.json();
    const posts: FacebookPost[] = data.data || [];

    // Filter and format posts
    const formattedPosts = posts
      .filter((post) => post.message || post.story)
      .slice(0, 10)
      .map((post) => ({
        id: post.id,
        message: post.message || post.story || "",
        created_time: post.created_time,
        permalink_url: post.permalink_url,
        image: post.full_picture || post.picture,
      }));

    return new Response(JSON.stringify({ posts: formattedPosts }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching Facebook feed:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
        posts: [],
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 200,
      }
    );
  }
});
