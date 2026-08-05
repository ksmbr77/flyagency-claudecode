import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logoBuffer = readFileSync(join(process.cwd(), "public", "logo.png"));
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "0 90px",
          background:
            "radial-gradient(1000px circle at 50% -10%, rgba(139,92,246,0.45), transparent 60%), radial-gradient(700px circle at 100% 100%, rgba(168,85,247,0.25), transparent 55%), #060608",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoBase64} width={128} height={128} alt="" />

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 6,
            color: "#ffffff",
          }}
        >
          FLY AGENCY
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 6,
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: 4,
            color: "#a855f7",
          }}
        >
          VOE ALTO
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 44,
            maxWidth: 900,
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: -1.5,
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          <span style={{ marginRight: 16 }}>Marketing que vende de</span>
          <span style={{ color: "#a855f7" }}>verdade.</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 24,
            color: "#b6b6c4",
          }}
        >
          Marketing digital para empresas que querem crescer
        </div>
      </div>
    ),
    { ...size }
  );
}
