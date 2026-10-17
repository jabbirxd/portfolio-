import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#05070a",
          borderRadius: "8px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#818cf8",
          fontFamily: "sans-serif",
        }}
      >
        JA
      </div>
    ),
    { ...size }
  );
}
