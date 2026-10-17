import { ImageResponse } from "next/og";

export const alt = "Md. Jabbir Ali — Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#05070a",
          color: "#f1f5f9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: "28px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#818cf8",
            marginBottom: "24px",
          }}
        >
          Portfolio
        </div>
        <div style={{ fontSize: "72px", fontWeight: "bold", marginBottom: "16px" }}>
          Md. Jabbir Ali
        </div>
        <div style={{ fontSize: "32px", color: "#94a3b8" }}>
          Web Developer — Next.js · TypeScript · Laravel
        </div>
      </div>
    ),
    { ...size }
  );
}
