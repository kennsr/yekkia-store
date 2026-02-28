export default function PlaceholderImage({
  width,
  height,
  text = "Image",
  className = "",
  rounded = true,
}: {
  width: string | number;
  height: string | number;
  text?: string;
  className?: string;
  rounded?: boolean;
}) {
  return (
    <div
      className={className}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        backgroundColor: "var(--accent)", // A soft pastel mint background from design system
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--foreground)",
        fontFamily: "var(--font-quicksand)",
        fontWeight: "bold",
        borderRadius: rounded ? "16px" : "0",
        border: "2px dashed rgba(74, 55, 40, 0.2)",
        textAlign: "center",
      }}
    >
      <span>{text}</span>
    </div>
  );
}
