import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "CORE & CRAFT — From Idea to Digital Experience";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050b16 0%, #0a1424 48%, #101f33 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,123,232,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(102,223,247,0.11) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          {/* Available badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              borderRadius: 999,
              border: "1px solid rgba(102,223,247,0.25)",
              background: "rgba(102,223,247,0.06)",
              fontSize: 14,
              color: "#a1b1c7",
              letterSpacing: 2,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4ade80",
              }}
            />
            FULL-SERVICE TECHNOLOGY & CREATIVE AGENCY
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              background: "linear-gradient(115deg, #c3f3ff 0%, #66dff7 58%, #8b7be8 100%)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.1,
              marginTop: 8,
            }}
          >
            CORE & CRAFT
          </div>

          {/* Divider */}
          <div
            style={{
              width: 64,
              height: 1,
              background: "linear-gradient(90deg, transparent, #66dff7, transparent)",
              margin: "4px 0",
            }}
          />

          {/* Title */}
          <div
            style={{
              fontSize: 28,
              color: "#c3f3ff",
              fontWeight: 500,
            }}
          >
            From Idea to Digital Experience.
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 18,
              color: "#a1b1c7",
              maxWidth: 600,
              textAlign: "center",
              lineHeight: 1.5,
              marginTop: 4,
            }}
          >
            We build digital products, software, AI solutions, websites, apps, games, and creative experiences from idea to launch.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
