import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1025 0%, #0c0b12 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: -2,
            backgroundImage: "linear-gradient(90deg, #ffffff 0%, #d8b4fe 55%, #8b5cf6 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          FLY
        </div>
      </div>
    ),
    { ...size }
  );
}
