import Image from "next/image";

type LocalPictureComponentProps = {
  smallSrc: string,
  largeSrc: string,
  defaultSrc: string,
  alt: string,
  loading?: "lazy" | "eager",
  width: number,
  height: number,
  className?: string
  smScreenMaxWidth?: string
  lgScreenMaxWidth?: string,
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down"
}

const LocalPictureComponent = ({
  smallSrc,
  largeSrc,
  defaultSrc,
  alt,
  loading = "lazy",
  width,
  height,
  className = "",
  smScreenMaxWidth = "(max-width: 600px)",
  lgScreenMaxWidth = "(min-width: 601px)",
  objectFit = "contain"

}: LocalPictureComponentProps) => {
  return (
    <picture>
      <source media={smScreenMaxWidth} srcSet={smallSrc} />
      <source media={lgScreenMaxWidth} srcSet={largeSrc} />
      <Image
        src={defaultSrc}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        className={className}
        style={{objectFit}}
      />
    </picture>
  );
};

export default LocalPictureComponent;
